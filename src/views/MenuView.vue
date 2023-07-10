<template>
  <div class="Frame1" >
    <button class="BtnCreatemenu" style="left: 280px; top: 140px; position: absolute; ">เพิ่มเมนู</button>
    <div class="GridCreatemenu" style="border-left: 5px solid orangered; " >
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
          <button class="btnsubmit" type="submit">บันทึกเมนู</button>  
        </div>
        
        </form>
    </div>
    
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
      }
    };
  },
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
    }
  }
};

</script>

<style>

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