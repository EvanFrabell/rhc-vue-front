import { getAuth, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import {
  getFirestore,
  collection,
  query,
  where,
  getDocs,
} from "firebase/firestore";
import router from '../../router/index';

export default {
  name: 'Login',

  data() {
    return {
      email: '',
      password: '',
      error: '',
    };
  },
  methods: {
    async signIn() {
      try {
        const auth = getAuth();
        const provider = new GoogleAuthProvider();
        const gUser = await signInWithPopup(auth, provider);
        console.log(gUser)
        this.fetchSubscription();
            
      } catch (error) {
        console.log(error.message);
        alert("There was an issue logging into your account.  Please email support team.")
      }
      
    },
    async login() {
      try {
        const auth = getAuth();
        const user = await signInWithEmailAndPassword(
          auth,
          this.email,
          this.password
        );
        console.log({ user });

        this.fetchSubscription();
      } catch (error) {

        if(error.message=="Firebase: Error (auth/user-not-found).") {
          alert("Email has not been registered.")
        } else if (error.message=="Firebase: Error (auth/wrong-password).") {
          alert("Incorrect username or password.")
        };
      }
    },
    async fetchSubscription() {
      this.isLoading = true;
      
      const db = getFirestore();
     
      const subsRef = collection(
        db,
        "customers", getAuth().currentUser.uid, "subscriptions"
      );
      
      const subsQuery = query(
        subsRef,
        where("status", "in", ["trialing", "active", "past_due", "unpaid"])
      );
      
      this.subscription = await getDocs(subsQuery)
        .then((sub) => 
            sub.docs.length > 0 ? sub.docs[0].data() : null);
      
      this.isLoading = false;

      if (this.subscription == null) {
        console.log("You are NOT subscribed!!!");
        alert("Your subscription has expired or has not started.  Redirecting to your Account page.");
        //getAuth().signOut();
        this.$router.replace({ name: 'Account' });
      } else {
        console.log("You are subscribed!!!");
        this.$store.commit("SET_ISSUBSCRIBED", true);
        this.$router.replace({ name: 'Dashboard' });
      };
    },
  },
};
