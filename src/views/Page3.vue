<template>
  <div>
    <button type="button" class="btn btn-success" @click="fnc1">Success</button>
    {{ addtask }}
    <div class="bg-gray-200 p-4">
    <h1 class="text-3xl font-bold">Hello Tailwind CSS!</h1>
    
  </div>
  </div>
  
</template>

<script>
import axios from 'axios';

export default {
  data(){
    return {
      addtask: []
    };
  },
  mounted(){
    /* this.fetchData(); */
  }, 
  methods: {
    /* fetchData(){
      axios.get('http://localhost:8080/api/addtask')
      .then(response =>{
        this.addtask = response.data;
      })
      .catch(err =>{
        console.log('เกิดข้อผิดพลาดในการดึง API', err);
      });
    },
    fnc1(){
      alert(`${this.addtask} api`);
    } */
  }

}
</script>

<style>

</style>