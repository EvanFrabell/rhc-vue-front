<template>

  <div>
    <div v-if="error" class="error">{{error.message}}</div>
      <main class="form-signin">
        <form @submit.prevent="pressed">
          <h1 class="h3 mb-3 fw-normal">Registration is closed at this time.</h1>
          <!-- <div class="form-floating">
            <input v-model="name" class="form-control" id="floatingInput" placeholder="John Doe">
            <label for="floatingInput">Full Name</label>
          </div> -->
          <div class="form-floating">
            <input v-model="email" type="email" class="form-control" id="floatingInput" placeholder="name@example.com">
            <label for="floatingInput">Email address</label>
          </div>
          <div class="form-floating">
            <input v-model="password" type="password" class="form-control" id="floatingPassword" placeholder="Password">
            <label for="floatingPassword">Password</label>
          </div>
          
          <!-- <button class="w-100 btn btn-lg btn-primary" type="submit">Submit</button> -->
    
        </form>
      </main>
    </div>
  

</template>

<script>

import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

export default {
    name: "Register",
    data() {
      return {
        email: '',
        password: '',
        error: ''
      }
    },
    methods: {
      pressed : async function() {
        try{
          const auth =  getAuth();
          const newUser = await createUserWithEmailAndPassword(auth, this.email, this.password)
          
          console.log(newUser);
          
          this.$router.replace({name: "Main"});

        }catch(error){
          console.log(error.message)

        }
        
      }
    }
    
}
</script>

<style scoped>
  html,
body {
  height: 100%;
}
/* 
body {
  display: flex;
  align-items: center;
  padding-top: 40px;
  padding-bottom: 40px;
  background-color: #f5f5f5;
} */

.form-signin {
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
}

</style>