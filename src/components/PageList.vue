<template>
<Header/>
<h1>Home</h1>
<div class="pagination">
  <a href="#">&laquo;</a>
  <a href="#">1</a>
  <a class="active" href="#">2</a>
  <a href="#">3</a>
  <a href="#">4</a>
  <a href="#">5</a>
  <a href="#">6</a>
  <a href="#">&raquo;</a>
</div>
<br>
 <div class="col-md-8">
      <div class="input-group mb-3">
        <input
          type="text"
          class="form-control"
          placeholder="Search by title"
          v-model="searchTitle"
        />
        <div class="input-group-append">
          <button
            class="btn btn-outline-secondary"
            type="button"
            @click="page = 1; retrieveTutorials();"
          >
            Search
          </button>
        </div>
      </div>
    </div>
<br>
   <div class="col-md-12">
      <div class="mb-3">
        Items per Page:
        <select v-model="pageSize" @change="handlePageSizeChange($event)">
          <option v-for="size in pageSizes" :key="size" :value="size">
            {{ size }}
          </option>
        </select>
      </div>

      <b-pagination
        v-model="page"
        :total-rows="count"
        :per-page="pageSize"
        prev-text="Prev"
        next-text="Next"
        @change="handlePageChange"
      ></b-pagination>
    </div>
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
export default{
    name:'PageList',
    components:{
        Header
    }
};
</script>
<style>
.information td{
    color:black;
    background-color:white;
}
#deletebtn{
    background-color:red;
    color:black;
}
#updatebtn{
    background-color:#ddd;
}
/* Pagination links */
.pagination a {
  color: black;
  float: left;
  padding: 8px 16px;
  text-decoration: none;
  transition: background-color .3s;
}

/* Style the active/current link */
.pagination a.active {
  background-color: orange;
  color: white;
}

/* Add a grey background color on mouse-over */
.pagination a:hover:not(.active) {background-color: #ddd;}

</style>