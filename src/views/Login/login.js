import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
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
    async login() {
      try {
        const auth = getAuth();
        const user = await signInWithEmailAndPassword(
          auth,
          this.email,
          this.password
        );
        console.log({ user });

        router.replace({ name: 'Dashboard' });
      } catch (error) {
        console.log(error.message);
      }
    },
  },
};
