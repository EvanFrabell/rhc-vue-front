import {
  getFirestore,
  getDocs,
  where,
  query,
  collection,
  addDoc,
  onSnapshot,
} from 'firebase/firestore';
import {
  getAuth,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from 'firebase/auth';

import router from '../../router/index';

export default {
  name: 'Register',
  data() {
    return {
      email: '',
      password: '',
      passwordCopy: '',
      error: '',
      products: [],
      selectedPrice: 'price_1Lat4VGrTucbD8SBxtUFHJR3',
      isLoading: false,
    };
  },
  methods: {

    async emailRegister() {
      if (this.password !== this.passwordCopy) {
        alert("Passwords do not match.")
      } else{
        try {
          const auth = getAuth();
          const user = await createUserWithEmailAndPassword(
              auth,
              this.email,
              this.password
            );
          await this.fetchSubscription();
        } catch (error) {
          console.log(error.message);
          if(error.message == "Firebase: Error (auth/email-already-in-use).") {
            alert("Email is already in use.");
          } else if(error.message == "Firebase: Password should be at least 6 characters (auth/weak-password)."){
            alert("Password must be at least 6 characters in length.");
          };
        };
      }; 
    },

    async googleRegister() {
      try {
        const auth = getAuth();
        const provider = new GoogleAuthProvider();
        const gUser = await signInWithPopup(auth, provider);
        await this.fetchSubscription();
      } catch (error) {
        console.log(error.message);
      }
    },

    async fetchSubscription() {
      this.isLoading = true;
      const db = getFirestore();
      const subsRef = collection(
        db,
        'customers',
        getAuth().currentUser.uid,
        'subscriptions'
      );

      const subsQuery = query(
        subsRef,
        where('status', 'in', ['trialing', 'active', 'past_due', 'unpaid'])
      );

      this.subscription = await getDocs(subsQuery).then((sub) =>
        sub.docs.length > 0 ? sub.docs[0].data() : null
      );

      if (this.subscription == null) {
        console.log('You are NOT subscribed!!!');
        this.createSub();
      } else {
        console.log('You are already subscribed!!!');
        this.$store.commit("SET_ISSUBSCRIBED", true);
        this.isLoading = false;
        this.$router.replace({name:"Account"})
      }
    },

    async createSub() {
      const db = getFirestore();
      const collectionRef = collection(
        db,
        'customers',
        getAuth().currentUser.uid,
        'checkout_sessions'
      );
      const docRef = await addDoc(collectionRef, {
        price: this.selectedPrice,
        success_url: window.location.origin,
        cancel_url: window.location.origin,
      });
      onSnapshot(docRef, (snap) => {
        const { error, url } = snap.data();
        if (error) {
          console.error(`An error occured: ${error.message}`);
          this.isLoading = false;
        }
        if (url) {
          window.location.assign(url);
        }
      });
    },
  },
};
