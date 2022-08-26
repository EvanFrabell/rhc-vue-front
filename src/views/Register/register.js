import {
  getFirestore,
  getDocs,
  where,
  query,
  collection,
  addDoc,
  onSnapshot,
} from "firebase/firestore";
import { getAuth, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

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
      selectedPrice: 'price_1LaiwzGrTucbD8SBfFIUUBPv',
      isLoading: false,
    };
  },
  methods: {
    async emailRegister() {
      try {
        const auth = getAuth();
        const user = await signInWithEmailAndPassword(
          auth,
          this.email,
          this.password
        );
        console.log({ user });
        this.fetchSubscription();
        this.createSub();

      } catch (error) {
        console.log(error.message);
      }
    },

    async googleRegister() {
      try {
        const auth = getAuth();
        const provider = new GoogleAuthProvider();
        const gUser = await signInWithPopup(auth, provider);
        console.log(gUser)

        this.fetchSubscription();
        this.createSub();

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
      
      //this.isLoading = false;

      if (this.subscription == null) {
        console.log("You are NOT subscribed!!!");
        this.fetchProducts();
    
      } else {
        console.log("You are already subscribed!!!");

      };
    },



    async fetchProducts() {
      const db = getFirestore();
      const productsRef = collection(db, "products");
      const productsQuery = query(productsRef, where("active", "==", true));
      const productsQuerySnap = await getDocs(productsQuery);
      productsQuerySnap.forEach(async (doc) => {
        const pricesRef = collection(db, "products", doc.id, "prices");
        const pricesQuerySnap = await getDocs(pricesRef);
        this.products.push({
          id: doc.id,
          ...doc.data(),
          prices: pricesQuerySnap.docs.map((price) => {
            return {
              id: price.id,
              ...price.data(),
            };
          }),
        });
        
      });
    },
    async createSub() {
      const db = getFirestore();
      const collectionRef = collection(
        db,
        "customers",
        getAuth().currentUser.uid,
        "checkout_sessions"
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

