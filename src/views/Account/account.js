import PriceSelection from "../../components/PriceSelection/index.vue";
import SubscribedAccount from "../../components/SubscribedAccount/index.vue";
import { getAuth } from 'firebase/auth';

import router from '../../router/index';

import {
  getFirestore,
  collection,
  query,
  where,
  getDocs,
} from "firebase/firestore";

export default {
  components: {
    PriceSelection,
    SubscribedAccount
  },
  data() {
    return {
      isLoading: false,
      subscription: null,
    };
  },
  mounted() {
    this.fetchSubscription();
  },
  methods: {
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

      if (this.subscription == null) {
        console.log("You are NOT subscribed!!!");
      } else {
        console.log("You are subscribed!!!");
        this.$store.commit("SET_ISSUBSCRIBED", true);
      };
      this.isLoading = false;
    },
  },
};
