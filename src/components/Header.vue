<template>
<!-- <h1>Header</h1> -->
<div class="nav">
<router-link to="/">Login</router-link>
<router-link  to="home">Home</router-link>
<router-link to="/home2">Home2</router-link>
<router-link to="add">Add Employee</router-link>
<!-- <router-link to="add1">Add Employee11</router-link> -->
<router-link to="form">Add Employee Validation</router-link>
<router-link to="paginDz">Search</router-link>
<!-- <router-link to="paginationComponent">Logout</router-link> -->
<button id="logoutBtn" @click="logout">Logout</button>
<!-- <router-link to="logout">Logout</router-link> -->
<!-- <router-link ="home">Logout</router-link> -->

</div>
</template>
<script>
export default{
    name:'Header',
    methods:{
         logout()
      {
        localStorage.clear();
        this.$router.push({name:'Login'});
      }
    }

}
</script>
<style>
.nav{
    background-color:#333;
    overflow:hidden;
    
}
.nav a{
    float:left;
    color:white;
    text-align:center;
    padding:10px 14px;
    text-decoration:none;
    font-size:16px;
    margin-right:4px;
}
.nav a:hover{
    background-color:#ddd;
    color:#222;
}
.router-link-exact-active {
  background: orange;
  border-radius: 5px;
  color: red;
  font-variant: italic;
}
#logoutBtn{
       margin-left: 550px;
    width: 70px;
    padding:10px;
}

</style>