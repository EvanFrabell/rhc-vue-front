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
        console.log(error.message);
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
        getAuth().signOut();
        this.$router.replace({ name: 'Register' });
      } else {
        console.log("You are subscribed!!!");
        router.replace({ name: 'Dashboard' });
        this.$router.replace({ name: 'Dashboard' });
      };
    },
  },
};
