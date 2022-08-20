import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';

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

        this.$router.replace({ name: 'Main' });
      } catch (error) {
        console.log(error.message);
      }
    },
  },
};
