<template>
<Header/>
<h1>Logout</h1>

<hr>
</template>
<script>
import axios from 'axios';
import Header from './Header.vue'
export default{
      name: "PaginationComponent",
      components:{
        Header
    },
  data() {
    return {
      
    };
  },
    methods: {
      logout()
      {
        localStorage.clear();
        this.$router.push({name:'Login'});
      }
    }
}
    </script>