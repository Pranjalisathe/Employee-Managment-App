<template>
  <Header />
 
  <h1>Update Page</h1>
   <div class="testbox">
  <form @submit="sub" class="update">
  <h1> Update Employee Form</h1>
    <input
      type="text"
      name="name"
      placeholder="Enter Name"
      v-model="employee.name"
    />
    <input type="text" v-model="employee.email" placeholder="Enter Email" />
    <input type="text" v-model="employee.role" placeholder="Enter Role" />
    <input
      type="password"
      v-model="employee.password"
      placeholder="Enter password"
    />

    <button type="submit" v-on:click="updateEmployee">Update Emplaoyee</button>
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
      error: [],
    };
  },
  methods: {
    async updateEmployee() {
      console.warn( this.employee)
      const result = await axios.put(
        "http://localhost:3000/usersById/" + this.$route.params.id,
        {
          name: this.employee.name,
          email: this.employee.email,
          role: this.employee.role,
          password: this.employee.password,
        }
      );
      if (result.status == 200 && this.error.length == 0) {
        this.$router.push({ name: "Home" });
        alert("Employee updated successfully!");
      }
    },
    sub(e) {
      this.error = [];

      if (
        !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(
          this.employee.email
        )
      ) {
        this.error.push("valid email format");
      }

      if (!this.employee.email) {
        this.error.push("Email");
      }
      if (!this.employee.role) {
        this.error.push("Role");
      }
      if (!this.employee.password) {
        this.error.push("Password");
      }
      if (this.error.length != 0) {
        alert("Please enter  " + this.error);
      }
      e.preventDefault();
    },
  },

  async mounted() {
    let user = localStorage.getItem("user-info");
    // console.warn(user);
    console.warn(this.$route.params.id);
    const result = await axios.get(
      "http://localhost:3000/usersById/" + this.$route.params.id
    );
    // console.warn(this.$params.id);
    this.employee = result.data;
  },
};
</script>
