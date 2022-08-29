import { getAuth, sendPasswordResetEmail } from 'firebase/auth';

import router from '../../router/index';

export default {
  name: 'ForgotPassword',

  data() {
    return {
      email: '',
      error: '',
    };
  },
  methods: {
    async resetPassword() {
      try {
        const auth = getAuth();
        const userEmail = await sendPasswordResetEmail(auth, this.email);
        
        console.log(userEmail);
        await alert("Password reset email sent!");
    
      } catch (error) {
        console.log(error.message);
        alert("There was an issue resetting your password.  Please email support team.")
      }
      
    },
  },
};
