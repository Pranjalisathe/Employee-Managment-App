<template>
  <Header />
  <h1>Search Page</h1>
  <hr>
  <!-- <a>Button</a> -->
  <!-- <select name="role" type="Integer" v-model="this.limitcount"  id="lmtCnt">
            <option value="Select Role" selected>Select employees on page*</option>
            <option value="5">5</option>
            <option value="10">10</option>
</select> -->
  <br />
  
  <!-- <a class="link"  href="#" value="2" >2</a> -->
  <!-- <button type="button" style="  color: black;
  
  margin: 6px;
  text-decoration: none; display: inline-block;" @click="fetchData(1)">1</button>
  <button type="button" @click="fetchData(2)">2</button>
  
  <button type="button" @click="fetchData(3)">3</button>
  <button type="button" @click="fetchData(4)">4</button>
  <hr> -->
  <!-- <li class="paginationButtons" v-for="item of employeePageCnt" >
 
  <button type="button" @click="fetchData(item)">{{item}}</button>
 
 </li> -->
 
  <!-- <a v-on:click="activeStatus = !activeStatus">bkabd</a> -->
 <input type="text" v-model="searchName" placeholder="Enter Name" /> 
 <button @click="searchDataByName(searchName)">Search By Name</button>
  <select name="role" type="text" v-model="searchRole"  id="role" placeholder="Select  Role*">
            <option value="Select Role" selected>Select  Role*</option>
            <option value="Manager">Manager</option>
            <option value="Software Developer">Software Developer</option>
            <option value="Junior Software Developer">Junior Software Developer</option>
            <option value="Software Architect">Software Architect</option>
            <option value="Intern Software Developer">Intern Software Developer</option>
            <option value="Engineering Project Manager">Engineering Project Manager</option>
            <option value="VP of Marketing">VP of Marketing</option>
          </select>
 <button @click="searchDataByRole(searchRole)">Search By Role</button>


  <!-- <div
    class="pagination"
    style="display: inline"
    v-for="(val,index) of employeePageCnt"
  >
    <a
      class="link"
      :style="(val===this.pgno) ? { 'background-color': 'orange' } : { 'background-color': '#ddd' }"
      style="overflow: hidden"
      @click="fetchData(val)"
 
      >{{ val }}</a
    >
  </div> -->
<br>
  <br>
  <h2>Employees Details</h2>
  
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
      <td v-if="item.status === 1">{{ item.id }}</td>
      <td v-if="item.status === 1">{{ item.name }}</td>
      <td v-if="item.status === 1">{{ item.email }}</td>
      <td v-if="item.status === 1">{{ item.role }}</td>
      <td v-if="item.status === 1">{{ item.createdAt }}</td>
      <td v-if="item.status === 1">{{ item.updatedAt }}</td>

      <td v-if="item.status === 1">
        <a id="updatebtn"
          ><router-link :to="'/update/' + item.id"
            ><i
              class="fas fa-edit"
              style="
                color: black;
                padding: 10px;
                margin: 5px;
                height: 25px;
              " /></router-link
        ></a>
        <!-- <a id="updatebtn"><router-link :to="'/add1/'+item.id"><i class="fas fa-edit" style="color:black;padding:10px;margin:5px;height:25px" /></router-link></a> -->
        <!-- <td v-if="item.status===1"><button id="updatebtn"><router-link :to="'/add1/'+item.id">Update</router-link></button> -->
        <a v-if="item.status === 1" id="deletebtn"
          ><router-link :to="'/delete/' + item.id"
            ><i
              class="fas fa-trash"
              style="
                color: black;
                padding: 10px;
                margin: 5px;
                height: 25px;
              " /></router-link
        ></a>
      </td>

      <!-- <h1>dhbsjbh</h1> -->
    </tr>
  </table>
</template>
<script>
import axios from "axios";
import Header from "./Header.vue";
export default {
  name: "PaginDz",
  components: {
    Header,
  },
  data() {
    return {
      employees: [],
      activeStatus: "false",
      pagecount: "1",
      limitcount: 10,
      employeeCnt: "",
      employeePageCnt: "",
      pgno:"1",
      pageActiveClass:"class1"
    };
  },

  async mounted() {
    let user = localStorage.getItem("user-info");
    if (!user) {
      this.$router.push({ name: "PaginDz" });
    }

    //   let result=await axios.get("http://localhost:3000/users");
    console.warn(this.pagecount);
    console.log("mounted");
    let result = await axios.get(
      "http://localhost:3000/usersPagination?page=" +
        this.pagecount +
        "&limit=" +
        this.limitcount
    );
    let resultCount = await axios.get(
      " http://localhost:3000/usersPaginationCount?page" +
        this.pagecount +
        "&limit=" +
        this.limitcount
    );

    this.employees = result.data;
    this.employeeCnt = resultCount.data.count;
    let remainder = this.employeeCnt % this.limitcount;
    let rem = (this.employeeCnt - remainder) / this.limitcount;
    this.employeePageCnt = remainder === 0 ? rem : rem + 1;
    console.log(
      "api data",
      this.employeeCnt,
      this.limitcount,
      this.employeePageCnt,
      this.remainder,
      this.activeStatus,
      this.pgno
    );
  },

  methods: {
    async fetchData(data) {
      
      try{
        this.pagecount = data;
      this.pgno=this.pagecount;
      this.activeStatus = "true";
      console.log("dfs", data, this.pagecount, this.activeStatus,this.pgno);
      
      let result = await axios.get(
        "http://localhost:3000/usersPagination?page=" +
          this.pagecount +
          "&limit=" +
          this.limitcount
      );
      this.employees = result.data;
      }
      catch(err)
      {
        console.log(err);
      }
    },
    async searchDataByName(name) {
      
      try{
      
      let result = await axios.get(
        "http://localhost:3000/users/" +name  
      );
      this.employees = result.data;
      }
      catch(err)
      {
        console.log(err);
      }
    },
     async searchDataByRole(role) {
      
      try{
      
      let result = await axios.get(
        "http://localhost:3000/usersRole/" +role  
      );
      this.employees = result.data;
      }
      catch(err)
      {
        console.log(err);
      }
    },
  },
};
</script>
<style>
/* Pagination links */
.pagination {
  display: block;
}
.pagination a {
  color: black;
  float: middle;
  background-color: #ddd;
  padding: 8px 16px;
  text-decoration: none;
  transition: background-color 0.3s;
}
.class1 a {
  color: black;
  float: middle;
  background-color: #ddd;
  padding: 8px 16px;
  text-decoration: none;
  transition: background-color 0.3s;
}
#paginationBtn:active {
  background-color: black;
}

/* Style the active/current link */

/* Add a grey background color on mouse-over */

.dynamic {
  background-color: purple;
  color: red;
}
.static {
  color: blue;
}
.pagination a:hover:not(.active) {
  background-color: orange;
  border: 02px solid black;
}
.title td{
   border: 1px solid black;
  border-radius: 10px;
  padding:10px;
}



    .small .ipt{
  width: 100px;
  height:30px;
}
.small .text{
  font-size: 18px;
}

.medium .ipt{
  width: 300px;
  height:50px;
}
.medium .text{
  font-size: 32px;
}

.large .ipt{
  width: 600px;
  height:100px;
}
.large .text{
  font-size: 64px;
}

</style>
