import { getAuth, onAuthStateChanged } from 'firebase/auth';

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
        }
      });
    },
    signOut() {
      getAuth()
        .signOut()
        .then(() => {
          this.$router.replace({ name: 'Login' });
        });
    },
  },
};
