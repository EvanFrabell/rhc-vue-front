import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

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
    async pressed() {
      try {
        const auth = getAuth();
        const user = await signInWithEmailAndPassword(
          auth,
          this.email,
          this.password
        );
        console.log(user);

        this.$router.replace({ name: 'Main' });
      } catch (error) {
        console.log(error.message);
      }
    },
  },
};
