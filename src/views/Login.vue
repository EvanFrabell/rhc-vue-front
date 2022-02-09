<template>
  <section class="vh-100 gradient-custom">
  <div class="container py-5 h-100">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col-12 col-md-8 col-lg-6 col-xl-5">
        <div class="card bg-dark text-white" style="border-radius: 1rem;">
          <div class="card-body p-5 text-center">

            <div class="mb-md-5 mt-md-4 pb-5">
              <form @submit.prevent="pressed">
                <h2 class="fw-bold mb-2 text-uppercase">Login</h2>
                <p class="text-white-50 mb-5">Please enter your login and password!</p>

                <div class="form-outline form-white mb-4">
                  <input v-model="email" type="email"  id="typeEmailX" class="form-control form-control-lg" />
                  <label class="form-label" for="typeEmailX">Email</label>
                </div>

                <div class="form-outline form-white mb-4">
                  <input v-model="password" type="password" id="typePasswordX" class="form-control form-control-lg" />
                  <label class="form-label" for="typePasswordX">Password</label>
                </div>

                <p class="small mb-5 pb-lg-2"><a class="text-white-50" href="#!">Forgot password?</a></p>

                <button class="btn btn-outline-light btn-lg px-5" type="submit">Login</button>

                <div class="d-flex justify-content-center text-center mt-4 pt-1">
                  <a href="#!" class="text-white"><i class="fab fa-facebook-f fa-lg"></i></a>
                  <a href="#!" class="text-white"><i class="fab fa-twitter fa-lg mx-4 px-2"></i></a>
                  <a href="#!" class="text-white"><i class="fab fa-google fa-lg"></i></a>
                </div>
              </form>
              <div class="error" v-if="error">{{error.message}} 1234</div>
            </div>
            

            <div>
              <p class="mb-0">Don't have an account? <a href="#!" class="text-white-50 fw-bold">Sign Up</a></p>
            </div>

          </div>
        </div>
      </div>
    </div>
  </div>
</section>
  <!-- <main class="form-signin">
    <form @submit.prevent="pressed">
      <h1 class="h3 mb-3 fw-normal">Please sign in</h1>

      <div class="form-floating">
        <label for="Input">Email address</label>
        <input v-model="email" type="email" class="form-control" id="floatingInput" placeholder="name@example.com">
      </div>
      <div class="form-floating">
        <label for="floatingPassword">Password</label>
        <input v-model="password" type="password" class="form-control" id="floatingPassword" placeholder="Password">
      </div>

      <button class="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
    </form>
    <div class="error" v-if="error">{{error.message}} 1234</div>
    <span>Need an account? Click here to <router-link to="/register">register</router-link></span>
  </main> -->
</template>

<script>
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";


export default {
  name: "Login",

  data(){
    return {
      email: '',
      password: '',
      error: ''
    }
  },
  methods: {
    async pressed() {
        try{
          const auth = getAuth();
          const user = await signInWithEmailAndPassword(auth, this.email, this.password);
          console.log(user);

          this.$router.replace({name: "Main"});
  
        }catch(error){
          console.log(error.message);

        }
        
      }

  }
 
  

}
</script>

<style>



  /* html,
body {
  height: 100%;
} */
/* 
body {
  display: flex;
  align-items: center;
  padding-top: 40px;
  padding-bottom: 40px;
  background-color: #f5f5f5;
} */

/* .form-signin {
  width: 100%;
  max-width: 330px;
  padding: 15px;
  margin: auto;
}

.form-signin .checkbox {
  font-weight: 400;
}

.form-signin .form-floating:focus-within {
  z-index: 2;
}

.form-signin input[type="email"] {
  margin-bottom: -1px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}

.form-signin input[type="password"] {
  margin-bottom: 10px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
} */
</style>