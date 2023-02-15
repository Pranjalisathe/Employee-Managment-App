<template>
<Header/>
<h1>Home</h1>

<hr>
<h2>All Employees Details</h2>
<table border="1">
<tr class="title">
<td>ID</td>
<td>NAME</td>
<td>EMAIL</td>
<td>ROLE</td>
<td>CREATED AT</td>
<td>UPDATED AT</td>
<td>ACTIONS</td>

<!-- <h1>dhbsjbh</h1> -->
</tr>
<tr class="information" v-for="item in employees" :key="item.id">

<td v-if="item.status===1">{{item.id}}</td>
<td v-if="item.status===1">{{item.name}}</td>
<td v-if="item.status===1">{{item.email}}</td>
<td v-if="item.status===1">{{item.role}}</td>
<td v-if="item.status===1">{{item.createdAt}}</td>
<td v-if="item.status===1">{{item.updatedAt}}</td>


<td v-if="item.status===1"><button id="updatebtn"><router-link :to="'/update/'+item.id">Update</router-link></button>
<!-- <td v-if="item.status===1"><button id="updatebtn"><router-link :to="'/add1/'+item.id">Update</router-link></button> -->
<button v-if="item.status===1" id="deletebtn"><router-link :to="'/delete/'+item.id">Delete</router-link></button>
</td>



<!-- <h1>dhbsjbh</h1> -->
</tr>
</table>
</template>
<script>
import axios from 'axios';
import Header from './Header.vue'

export default{
    name:'Home',
    components:{
        Header
    },
    data(){
        return{
            employees:[],
            currentPage:1,
            rows:0,
            perPage:10
        };
    },
    
   async mounted(){
      let user=localStorage.getItem('user-info');
      if(!user)
      {
        this.$router.push({name:'Home'})
      }
      let result=await axios.get("http://localhost:3000/users");
    //    let result=await axios.get("http://localhost:3000/usersPagination?page=4&limit=6");
      this.employees=result.data
      console.log("api data",result);
     
      
    },
  
    
};
</script>
<style>
.information td{
    color:black;
    background-color:white;
}



*, *::after, *::before {
  box-sizing: border-box;
}

  a
      {
          color: black;
      }
      a:hover 
      { 
         color:#ddd ; 
      }            
      a:active
      {
      color: white;
      }



</style>