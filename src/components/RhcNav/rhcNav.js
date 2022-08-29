import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { mapGetters } from 'vuex';

export default {
  name: 'rhc-nav',
  data() {
    return {
      loggedIn: false,
    };
  },
  mounted() {
    this.setupFirebase();
  },
  computed: {
    ...mapGetters({isSubscribed: 'getisSubscribed'}),
  },
  methods: {
    setupFirebase() {
      let auth = getAuth();

      onAuthStateChanged(auth, (user) => {
        if (user) {
          // User is signed in.
          console.log('signed in');
          this.loggedIn = true;
        } else {
          // No user is signed in.
          this.loggedIn = false;
          console.log('signed out', this.loggedIn);
          this.$store.commit('SET_ISSUBSCRIBED', false)
        }
      });
    },
    signOut() {
      getAuth()
        .signOut()
        .then(() => {
          this.$router.replace({ name: 'Login' });
          this.$store.commit('SET_ISSUBSCRIBED', false);
        });
    },
  },
};
