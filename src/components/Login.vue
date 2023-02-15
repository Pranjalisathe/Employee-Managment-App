<template>

 
 <Header />
  <div class="login">
   <h1>Login Page</h1>
   <br>
    <input type="text" v-model="email" placeholder="Enter Email" />
    <input type="password" v-model="password" placeholder="Enter Password" />
    <button v-on:click="login()">Login</button>
    <p>
      <router-link to="/form">Sign Up</router-link>
      
    </p>
  </div>
</template>

<script>
import axios from "axios";
import Header from "./Header.vue";
export default {
  name: "Login",
  data() {
    return {
      logDetails:{
          email: "",
         password: ""
      }
    };
  },
  methods: {
    async login() {
      console.log(this.email,this.password);
   try{    const result = await axios.get("http://localhost:3000/usersLog/"+this.email+"/"+this.password);
      console.warn( result);

      if(result.status==200 && result.data.length>0)
      {
        localStorage.setItem("user-info",JSON.stringify(result.data[0]));
        this.$router.push({name:"Home"});
      }
      
      }
      catch(err)
      {
        console.log(err);
      }
    },
  
  },
    mounted(){
      let user=localStorage.getItem('user-info');
      if(user)
      {
        this.$router.push({name:'Home'})
      }
    }
};
</script>
<style>
.login{
  margin:200px 600px;
  border:1px solid black;
  padding:100px;
}
.login input {
  width: 300px;
  height: 40px;
  padding-left: 20px;
  display: block;
  margin-bottom: 30px;
  margin-left: auto;
  margin-right: auto;
  border: 1px solid black;
}
.login button {
  width: 320px;
  height: 40px;
  padding-left: 20px;
  display: block;
  margin-bottom: 30px;
  margin-left: auto;
  margin-right: auto;
  color: black;
  background-color: orange;
  border: 1px solid black;
}
</style>
