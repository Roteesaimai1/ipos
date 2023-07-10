<template>
  <div class="Frame1" >
    <button class="BtnCreatemenu" style="left: 280px; top: 140px; position: absolute; ">เพิ่มเมนู</button>
    <div class="GridCreatemenu" >
        <form @submit.prevent="saveMenu">
        <div>
            <label for="name">Name:</label>
            <input type="text" id="name" placeholder="ชื่อเมนู" v-model="menu.name" required>
        </div>
        <div>
            <label for="description">ราคา:</label>
            <input id="description" placeholder="ราคา" v-model="menu.price" required>
        </div>
        <button type="submit">บันทึกเมนู</button>
        </form>
    </div>
    
</div>
</template>

<script>
import axios from 'axios';
export default {
    data(){
        return{
            menu:{
                name: '',
                price: '',
            },
        }
    },
    methods:{
        saveMenu(){
            axios.post('/api/menu', this.menu)
                .then(() =>{
                    console.log('Menu saved successfully!');
                    location.reload();
                } )
                .catch((error) => {
                    console.error('Error saving menu:', error);
                
                })
        }
    }
}
</script>

<style>
.BtnCreatemenu{ 
    width: 102px;
    height: 40px;
    flex-shrink: 0;
    background: orangered;
    color: #fff;
    border: 0;
    outline: none;
    font-size: 18px;
    border-radius: 4px;
    cursor: pointer;
    box-shadow: 0 5px 5px rgba(0, 0, 0, 0.2);
}
.GridCreatemenu{
    width: 566px;
    height: 550px;
    border-radius: 10px;
    background: #ffffff;
    flex-shrink: 0;
    margin-left: 30%;
    margin-top: 5%;
    padding: 5%;
}
input {
    
    margin: 2%;
}
</style>