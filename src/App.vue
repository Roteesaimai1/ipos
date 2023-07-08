<template>
  <div class="grid-container">
    <div class="header" style="text-align: right;" > <strong>หน้า : {{ currentPage }}</strong> </div>
    <div class="sidebar"> <navbar/> </div>
    <div class="content"> <router-view></router-view> </div> 
    <div class="footer">BACKOFFICE: ลิงปีนมะพร้าว | Developer JDev </div>
    
  </div>

    
  
</template>


<script>
import navbar from './components/navbar.vue';
import maincontent from './components/maincontent.vue';
export default {
  name:"App",
  components:{
    navbar,
    maincontent
  },
  computed: {
    currentPage(){
      const path = this.$route.path;
      if (path === '/'){
        return 'Home';
      }else{
        return path.substring(1);
      }
      
    }
  }
}
</script>

<style>
/* font Mitr */
body {
  font-family: 'Mitr', sans-serif;
}


.grid-container {
  display: grid;
  height: 100vh;
  grid-template: 
  'sidebar header' 1fr
  'sidebar content' 10fr
  'sidebar footer' 0.5fr
  / 1fr 7fr;
}

.header{
  grid-area: header;
  background-color: #FF6347;
  padding: 30px;
  /* margin-bottom: 0.2%; */
  box-shadow: 0px 0px 5px rgb(41, 41, 41);
  color: aliceblue;
}
.sidebar{
  grid-area: sidebar;
  justify-self: center;
  width: 100%;
  text-align: center;
  background-color: rgb(41, 41, 41);
  
 
}

.content {
  grid-area: content;
  background-color: rgb(26, 26, 26);
  padding: 30px;
  
}

.footer {
  border-top: 0.5px solid rgb(41, 41, 41);
  grid-area: footer;
  background-color: rgb(41, 41, 41);
  color:rgb(0, 0, 0);
  padding-left: 30px;
  padding-top: 5px;
  box-shadow: 0px 0px 3px rgb(41, 41, 41);
}







</style>
