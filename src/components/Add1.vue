<template>
  <Header />
 <!-- update employee form 2 -->
  <h1>Update Page</h1>
 <div class="testbox">
      <form @submit="handleForm">
        <h1>update Employee Form</h1>
         <h4>Name<span>*</span></h4>
        <input name="name" type="text" v-model="this.employee.name" 
        @blur="required" 
        @input="required"
         :style="error.name.state ? 'border-color:red;outline-color:red':null"/>
        <p v-if="error.name.state" style="color:red">This is required field !</p>
        <h4>Email Address<span>*</span></h4>
        <input name="email" type="text" v-model="this.employee.email"   
         @blur="[required($event),email($event)]" 
        @input="[required($event),email($event)]"
         :style="error.email.state ? 'border-color:red;outline-color:red':null"/> 
      <p v-if="error.email.state" style="color:red">This is required field !</p>
        <h4>Password</h4>
        <input name="password" type="password" v-model="this.employee.password"  
         @blur="required" 
        @input="required"
         :style="error.password.state ? 'border-color:red;outline-color:red':null" />
         <p v-if="error.password.state" style="color:red">This is required field !</p>
      <h4>Role<span>*</span></h4>
        <select name="role" type="text" v-model="this.employee.role"  id="role">
            <option value="Select Role" selected>Select Your Role*</option>
            <option value="Manager">Manager</option>
            <option value="Software Developer">Software Developer</option>
            <option value="Junior Software Developer">Junior Software Developer</option>
            <option value="Software Architect">Software Architect</option>
            <option value="Intern Software Developer">Intern Software Developer</option>
            <option value="Engineering Project Manager">Engineering Project Manager</option>
            <option value="VP of Marketing">VP of Marketing</option>
          </select>
        <div class="btn-block">
          <button type="submit" v-on:click="addEmployee">update Employee</button>
        </div>
      </form>
    </div>
</template>
<script>
import Header from "./Header.vue";
import axios from "axios";
export default {
  name: "Update",
  components: {
    Header,
  },
  data() {
    return {
      employee: {
        name: "",
        email: "",
        role: "",
        password: "",
      },
     error:{
            name:{
              state:false,
              message:""
            },
            email:{
              state:false,
              message:""
            },
             password:{
              state:false,
              message:""
            }
            
           }
        }
    },  
     methods:{
        handleForm(e){
            e.preventDefault();
            console.log(this.employee);
        },
        required(e){
           let value= e.target.value;
           let name=e.target.name;
          //  alert(name);
          this.error[name]={
            state:value?false:true,
            message:value?"":"This is required field!"
          }
        },
        email(e){
          let value=e.target.value;
          if(!value)
           return false
         

          let regExp="^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+.[a-zA-Z]+$";
          let isValid=value.match(regExp);
          // console.log(isValid);
          this.error.email={
            state: isValid ? false : true,
            message : isValid ? "":"Enter a Valid Email"
          }
          // alert();
        },
    async updateEmployee() {
    //   console.warn( this.employee)

      const result = await axios.put("http://localhost:3000/usersById/" + this.$route.params.id,
        {
          name: this.employee.name,
          email: this.employee.email,
          role: this.employee.role,
          password: this.employee.password,
        }
        
        
      );
      console.warn(result.status);
      if (result.status == 200 ) {
        this.$router.push({ name: "Home" });
        alert("Employee updated successfully!");
      }
    },

  },

  async mounted() {
   try{ let user = localStorage.getItem("user-info");
    // console.warn(user);
    console.warn(this.$route.params.id);
    const result = await axios.get(
      "http://localhost:3000/usersById/" + this.$route.params.id
    );
    // console.warn(this.$params.id);
    this.employee = result.data;}
    catch(err)
    {
      console.log(err);
    }
  },
};

</script>
   <style>
   
      body, div, form, input, select { 
      padding: 10px;
      margin: 10px;
      outline: none;
      font-family: Roboto, Arial, sans-serif;
      font-size: 14px;
      color: #666;
      line-height: 22px;
      }
      h1, h4 {
      margin: 15px 0 4px;
      font-weight: 400;
      }
      h4 {
      margin: 20px 0 4px;
      font-weight: 400;
      }
      span {
      color: red;
      }
    
      .testbox {
      display: flex;
      justify-content: center;
      align-items: center;
      height: inherit;
      padding: 150px;
      }
      form {
      
      padding: 20px;
      background: #fff;
      box-shadow: 0 2px 5px #ccc; 
      }
      input {
      width: calc(100% - 10px);
      padding: 5px;
      border: 1px solid #ccc;
      border-radius: 3px;
      vertical-align: middle;
      }
      input:hover, textarea:hover, select:hover {
      outline: none;
      border: 1px solid #095484;
      background: #e6eef7;
      }
      .title-block select, .title-block input {
      margin-bottom: 10px;
      }
      select {
      padding: 7px 0;
      border-radius: 3px;
      border: 1px solid #ccc;
      background: transparent;
      }
      select, table {
      width: 100%;
      }
      
   
    
      .btn-block {
      margin-top: 20px;
      text-align: center;
      }
      button {
      width: 150px;
      padding: 10px;
      border: none;
      -webkit-border-radius: 5px; 
      -moz-border-radius: 5px; 
      border-radius: 5px; 
      background-color: #FFA500;
      font-size: 16px;
      color: #fff;
      cursor: pointer;
      }
      button:hover {
      background-color:#754C00;
      }
      @media (min-width: 568px) {
      .title-block {
      display: flex;
      justify-content: space-between;
      }
      .title-block select {
      width: 30%;
      margin-bottom: 0;
      }
      .title-block input {
      width: 31%;
      margin-bottom: 0;
      }
      th, td {
      word-break: keep-all;
      }
      }
    </style>