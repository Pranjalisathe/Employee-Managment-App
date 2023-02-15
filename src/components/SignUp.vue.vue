<template>
<h3>Enter  Details page</h3>
<div class="register">
<input type="text" v-model="name" placeholder="Enter Name"/>
<input type="text" v-model="email" placeholder="Enter Email"/>
<input type="text" v-model="role" placeholder="Enter Role"/>
<input type="password" v-model="password" placeholder="Enter password"/>

<button v-on:click="signup">Enter</button>
</div>
</template>
<script>
import axios from 'axios'
export default{
    name:"SignUp",
    data()
    {
        return{
            name:"",
            email:"",
            role:"",
            password:""
        }
    },
    methods:{
       async signup()
        {
            console.log("Sign up",this.name,this.email,this.role);
             let result = await axios.post("http://localhost:3000/users",{
                email:this.email,
                name:this.name,
                role:this.role,
                password:this.password
             });
             console.warn(result);
             if(result.status==200)
             {
               
             localStorage.setItem("user-info",JSON.stringify(result.data))
             this.$router.push({name:'Login'})
             }
        }
    },
    mounted(){
      let user=localStorage.getItem('user-info');
      if(user)
      {
        this.$router.push({name:'Login'})
      }
    }
}
</script>
