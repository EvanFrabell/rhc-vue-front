import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';

import router from '../../router/index';

export default {
  name: 'Register',
  data() {
    return {
      email: '',
      password: '',
      error: '',
    };
  },
  methods: {
    pressed: async function () {
      try {
        const auth = getAuth();
        const newUser = await createUserWithEmailAndPassword(
          auth,
          this.email,
          this.password
        );

        console.log(newUser);

        router.replace({ name: 'Dashboard' });
      } catch (error) {
        console.log(error.message);
      }
    },
  },
};
