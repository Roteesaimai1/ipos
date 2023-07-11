<template>
  <div class="Frame1" >
    <button class="BtnCreatemenu" @click="showPopup()" style="left: 280px; top: 140px; position: absolute;  ">เพิ่มเมนู</button>
    <div class="grid-menu">
      <div class="menulist" v-for="item in showmenu" :key="item.id" >
        <p style="justify-content: center; display: flex; margin-top: 3%;" ><b>{{ item.menuname }}</b></p>
        <p style="justify-content: center; display: flex;" >ราคา: {{ item.menuprice }}</p>
      <div style="justify-content: center; display: flex;" class="menuedit">
        <button class="btn-editmenu" >แก้ไข</button>
      </div>
      </div>
      
    </div>
       

    <!-- ---------------------------------------------Popup Create  Menu-------------------------------------------------- -->
    <div v-if="isCreatemenu" class="GridCreatemenu" :style="{ visibility: isCreatemenu ? 'visible' : 'hidden' }" > 
        <form @submit.prevent="saveMenu">
        <div class="header-newmenu" style="justify-content: center; display: flex; margin-bottom: 5%;">
            <h2 style="color: orangered;" >สร้างเมนูใหม่</h2>
        </div>    
        <div class="Box">
            <label for="img" style="margin-bottom: 5%;" ><b>อัพโหลดภาพเมนู:</b></label>
            <input type="file" style="margin-bottom: 10%;" id="img" name="img" accept="image/*" > 
            <div class="inputBox">
                <input type="text" placeholder="ชื่อเมนู" style="margin-bottom: 10%;" v-model="menu.menuname" required>
                <span>ชื่อเมนู</span>
            </div> 
            <div class="inputBox">
                <input type="number" style="margin-bottom: 10%;" placeholder="ราคา" v-model="menu.menuprice" required>
                <span>ราคา</span>
            </div>                    
        </div>      
        <div class="createbtn">
          <button class="btnsubmit"  type="submit">บันทึกเมนู</button>
          <button class="btnsubmit" @click="showPopup()" type="submit">ยกเลิก</button>  
        </div>        
        </form>
    </div>
    <!-- ---------------------------------------------Popup Create  Menu-------------------------------------------------- -->


</div>
</template>

<script>
import axios from 'axios';
export default {
data() {
    return {
      menu: {
        menuname: '',
        menuprice: ''
      },
      isCreatemenu: false,
      showmenu: []
    };
  },
mounted(){
  this.showMenu()
} , 
methods: {
    saveMenu() {       
        axios.post('http://localhost:3000/menu', this.menu)
        .then((response) => {
          console.log('เมนูถูกบันทึกแล้ว', response.data);
          alert('บันทึกเมนูเรียบร้อยแล้ว')
          
        })
        .catch((error) => {
          console.error('เกิดข้อผิดพลาดในการบันทึกเมนู', error);
          alert('เกิดข้อผิดพลาดในการบันทึกเมนู')
          
        });
        
      
    },
    showPopup() {
      this.isCreatemenu = !this.isCreatemenu
    },
    showMenu() {
      axios.get('http://localhost:3000/menu')
      .then((response) => {
        this.showmenu = response.data;
      })
      .catch(err => {
        console.log('เกิดข้อผิดพลาด', err)
      })
    }
  },
computed: {

  }
};

</script>

<style>

.btn-editmenu {
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
  box-shadow: 0 5px 5px rgba(0, 0, 0, 0.3);
  margin: 5%;
}
.grid-menu {
  margin-top: 5%;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 10px;
}
.menulist {
  background-color: #fff;
  margin: 2%;
  border-radius: 5px;
  width: 250px;
  height: 150px;
  position: static;
}
.createbtn {
    justify-content: center;
    display: flex;
    margin-top: 5%;
    
}
.btnsubmit {
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
    margin: 5%;
    
}
.BtnCreatemenu { 
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
    border-left: 5px solid orangered;
    visibility: hidden;
}


.inputBox {
    position: relative;
    width: 250px;
   
}
.inputBox input {
    width: 100%;
    padding: 10px;
    border: 1px solid rgba(8, 8, 8, 0.45);
    background: #fff;
    border-radius: 5px;
    outline: none;
    color: #000000;
    font-size: 1em;
    transition: 0.5s;
}
.inputBox span {
    position: absolute;
    left: 0;
    padding: 10px;
    pointer-events: none;
    font-size: 1em;
    color: rgba(255, 255, 255, 0.25);
    text-transform: uppercase; 
    transition: 0.5s;
}
.inputBox input:valid ~ span,
.inputBox input:focus ~ span {
    color: rgb(255, 255, 255);
    transform: translateX(10px) translateY(-7px);
    font-size: 0.75em;
    padding: 0 10px;
    background: orangered;
    border-left: 1px solid orangered;
    border-right: 1px solid orangered;
    letter-spacing: 0.2em;
    border-radius: 2px;
    
}
.inputBox input:valid,
.inputBox input:focus  {
    border: 1px solid orangered;
}

</style>