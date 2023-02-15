<template>
  
  <router-view/>
</template>

<script>

export default {
  name: 'App',
  
 
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  
}
body{
  padding:0;
  margin:0;
}

.register input,.update input,.add input{
    width :300px ;
    height: 40px;
    padding-left:20px;
    display:block;
    margin-bottom:30px;
    margin-left:auto;
    margin-right:auto;
    border:1px solid black;

}
.title td{
   width :300px ;
    height: 40px;
    padding-left:20px;
     color:black;
    background-color:orange;
    margin-bottom:30px;
    margin-left:auto;
    margin-right:auto;
    border:1px solid black;
}

.register button,.update button,.add button{
 width :320px ;
    height: 40px;
    padding-left:20px;
    display:block;
    margin-bottom:30px;
    margin-left:auto;
    margin-right:auto;
    color:black;
    background-color:orange;
    border:1px solid black;
}

</style>