import {
  getFirestore,
  // getDocs,
  // where,
  // query,
  collection,
  addDoc,
  onSnapshot,
} from "firebase/firestore";
import { getAuth } from 'firebase/auth';
export default {
  data() {
    return {
      // products: [],
      selectedPrice: 'price_1Lat4VGrTucbD8SBxtUFHJR3',
      isLoading: false,
    };
  },
  // mounted() {
  //   this.fetchProducts();
  // },
  methods: {
    // async fetchProducts() {
    //   const db = getFirestore();
    //   const productsRef = collection(db, "products");
    //   const productsQuery = query(productsRef, where("active", "==", true));
    //   const productsQuerySnap = await getDocs(productsQuery);
    //   productsQuerySnap.forEach(async (doc) => {
    //     const pricesRef = collection(db, "products", doc.id, "prices");
    //     const pricesQuerySnap = await getDocs(pricesRef);
    //     this.products.push({
    //       id: doc.id,
    //       ...doc.data(),
    //       prices: pricesQuerySnap.docs.map((price) => {
    //         return {
    //           id: price.id,
    //           ...price.data(),
    //         };
    //       }),
    //     });
    //   });
    // },
    async createSub() {
      this.isLoading = true;
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