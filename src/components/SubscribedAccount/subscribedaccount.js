import { getFunctions, httpsCallable } from "firebase/functions";
export default {
  props: ["subscription"],
  data() {
    return {
      isLoading: false,
    }
  },
  methods: {
    async openCustomerPortal() {
      this.isLoading = true;
      const functions = getFunctions();
      const functionRef = httpsCallable(
        functions,
        "ext-firestore-stripe-payments-createPortalLink"
      );
      const { data } = await functionRef({
        returnUrl: window.location.origin,
      });
      console.log(data);
      window.location.assign(data.url);
    },
  },
}