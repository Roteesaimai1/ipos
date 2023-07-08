<template>
  <div :class="{'maincontentclose': maincontent}">
  <div class="orderpage">
    <div class="grid-order1">
      <div class="img-order">
        <img src="../assets/menu-meeoreo.png" alt="mee-caramel" width="120" height="120">
      </div>
      <div class="name-order">
        <h4>มะพร้าวปั่นนมสด</h4>
      </div>
      <div class="detail-order">
        <p>40 บาท</p>
      </div>
      <div class="btnorder">
        <button class="btn-order" @click="openPopup()" >ขายเลย</button>
      </div>
       
    </div>
    <div class="grid-order2">
      <div class="img-order">
        <img src="../assets/menu-meeoreo.png" alt="mee-caramel" width="120" height="120">
      </div>
      <div class="name-order">
        <h4>มะพร้าวปั่นนมสด</h4>
      </div>
      <div class="detail-order">
        <p>40 บาท</p>
      </div>
      <div class="btnorder">
        <button type="submit" class="btn-order" @click="openPopup()" >ขายเลย2</button>
      </div>
      <!-- POPUP MENU -->
      
      <div v-if="isPopupVisible" class="popup" :style="{ visibility: isPopupVisible ? 'visible' : 'hidden' }" >
        <div class="img-bill" style="text-align: center;" >
          <img src="../assets/billpic.png" width="120" height="120" >
        </div>
        
        <h2>มะพร้าวปั่นนมสด 40</h2> <!-- ชื่อรายการ+ราคา -->
        
        <p>บิลที่ 1 | ผู้สร้างรายการ Joe</p>
        <hr>
        <div>
    <div class="options">
      <h3>น้ำแข็ง</h3>
      <label>
        <input type="radio" v-model="iceoptions" value="ปั่น"> ปั่น
      </label>
      <label>
        <input type="radio" v-model="iceoptions" value="ไม่ปั่น"> ไม่ปั่น
      </label>     
    </div>

    <div class="options" >
      <h3>ระดับความหวาน</h3>
      <label>
        <input type="radio" v-model="sweetoptions" value="ปกติ"> ปกติ
      </label>
      <label>
        <input type="radio" v-model="sweetoptions" value="หวานน้อย"> หวานน้อย
      </label>
      <label>
        <input type="radio" v-model="sweetoptions" value="เพิ่มหวาน"> เพิ่มหวาน
      </label>
    </div>

    <div class="options" >
      <h3>ท็อปปิ้ง (เพิ่ม 10 บาท)</h3>
      <label>
        <input type="radio" v-model="toppingoptions" value="คาราเมล"> คาราเมล
      </label>
      <label>
        <input type="radio" v-model="toppingoptions" value="ช็อกโกแล็ต"> ช็อกโกแล็ต
      </label>
      <label>
        <input type="radio" v-model="toppingoptions" value="สตรอเบอร์รี่"> สตรอเบอร์รี่
      </label>
      <label>
        <input type="radio" v-model="toppingoptions" value="เนื้อมะพร้าวอ่อน"> เนื้อมะพร้าวอ่อน
      </label>
    </div>   
  </div>
        
        <button type="button" @click="openPopup()" >สร้างรายการ</button>
        <button type="button" @click="openPopup()" >ยกเลิก</button>
      </div>

      <!-- ------------------------------------------------ -->

      <!-- POPUP-BILL MENU -->

      <div v-if="isPopupVisible" class="popup-bill" :style="{ visibility: isPopupVisible ? 'visible' : 'hidden' }" >        
          <div class="ppbill">
            <div class="head-bill" style="text-align: center;" >
              <h2>ร้าน ลิงปีนมะพร้าว</h2>
              <b>สาขา ตลาดใหญ่มาก มาร์เก็ต</b>
              <p>บิลที่ 1  ผู้สร้างรายการ Joe</p>
            </div>
            
            <hr>
            <div>
              <p><b>เมนู มะพร้าวปั่นนมสด</b></p> <!-- ชื่อรายการ -->              
            </div>  
            <div style="text-align: right;" >40</div>    
            <div>
              
              <p>น้ำแข็ง: {{ iceoptions }}</p>
              <div style="text-align: right;" >0</div> 
              <p>ระดับความหวาน: {{ sweetoptions }}</p>
              <div style="text-align: right;" >0</div> 
              <p>ท็อปปิ้ง: {{ toppingoptions }}</p>
              <div style="text-align: right;" >10</div> 
               <!-- price-topping -->
            </div>
            <div class="footer-bill">
              <hr>
              <div class="total"><h4>Total :</h4></div>
              <div class="total-price" style="text-align: right;" ><b>50 บาท</b></div>
              <div style="text-align: center;" >Thank you</div> 
            </div>
          </div>  
        
        
        
      </div>

      <!-- ------------------------------------------------ -->
    </div>
    <div class="grid-order3">
      <div class="img-order">
        <img src="../assets/menu-meeoreo.png" alt="mee-caramel" width="120" height="120">
      </div>
      <div class="name-order">
        <h4>นมหมีปั่นนมสด</h4>
      </div>
      <div class="detail-order">
        <p>40 บาท</p>
      </div>
      <div class="btnorder">
        <button class="btn-order" @click="menuclick" >ขายเลย</button>
      </div>
    </div>
    <div class="grid-order4">
      <div class="img-order">
        <img src="../assets/menu-meeoreo.png" alt="mee-caramel" width="120" height="120">
      </div>
      <div class="name-order">
        <h4>นมหมีปั่นสตอเบอรี่</h4>
      </div>
      <div class="detail-order">
        <p>40 บาท</p>
      </div>
      <div class="btnorder">
        <button class="btn-order" @click="menuclick" >ขายเลย</button>
      </div>
    </div>
    <div class="grid-order5">
      <div class="img-order">
        <img src="../assets/menu-meeoreo.png" alt="mee-caramel" width="120" height="120">
      </div>
      <div class="name-order">
        <h4>นมหมีภูเขาไฟ</h4>
      </div>
      <div class="detail-order">
        <p>40 บาท</p>
      </div>
      <div class="btnorder">
        <button class="btn-order" @click="menuclick" >ขายเลย</button>
      </div>
    </div>
    <div class="grid-order6">
      <div class="img-order">
        <img src="../assets/menu-meeoreo.png" alt="mee-caramel" width="120" height="120">
      </div>
      <div class="name-order">
        <h4>นมหมีปีโป้</h4>
      </div>
      <div class="detail-order">
        <p>40 บาท</p>
      </div>
      <div class="btnorder">
        <button class="btn-order" @click="menuclick" >ขายเลย</button>
      </div>
    </div>    
  </div>
</div>
</template>

<script>
export default {
  data(){
    return{
     isPopupVisible: false,
     maincontent: false,
     iceoptions: '',
     sweetoptions: '',
     toppingoptions: '' 
    };
    
  },
  methods: {
    openPopup(){
      this.isPopupVisible = !this.isPopupVisible;
      this.maincontent = !this.maincontent;
    }
  }
}
</script>

<style>

/* .options{
  padding: 10px;
} */
.options label{
  padding: 10px;
}

.maincontentclose{
  
  position: fixed;
  visibility: hidden;
  left: 0;
  top: 0; 
  width: 100%; 
  height: 100%; 
  overflow: auto; 
  background-color: rgb(0,0,0);
  background-color: rgba(0,0,0,0.4);  
}

.ppbill{
  text-align: left;
  padding: 30px;
}

.popup {
  width: 400px;
  background: #fff;
  border-radius: 6px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) ;
  text-align: left;
  padding: 0 30px 30px;
  color: #000000;
  visibility: hidden;
  z-index: 1; 
  
  
}

.popup-bill {
  width: 400px;
  height: 690px;
  background: #fff;
  border-radius: 6px;
  position: absolute;
  top: 50%;
  left: 75%;
  transform: translate(-50%, -50%) ;
  text-align: center;
  padding: 0 30px 30px;
  color: #000000;
  visibility: hidden;
  z-index: 1; 
  padding: 30px 10px 20px 10px;
   
}
.popup-bill span{
  padding: 10px;
}

.popup img {
  width: 120px;
  margin-top: -50px;
  border-radius: 50%;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  
}
.popup h2 {
  font-size: 38px;
  font-weight: 500;
  margin: 30px 0 10px;
}
.popup button{
  width: 40%;
  margin: 10px;
  margin-top: 50%;
  padding: 10px 0;
  background: orangered;
  color: #fff;
  border: 0;
  outline: none;
  font-size: 18px;
  border-radius: 4px;
  cursor: pointer;
  box-shadow: 0 5px 5px rgba(0, 0, 0, 0.2);
}


.btnorder {
  justify-content: center;
  display: flex;
}

.btn-order {
  width: 40%;
  margin: 10px;
  
  padding: 10px 0;
  background: orangered;
  color: #fff;
  border: 0;
  outline: none;
  font-size: 18px;
  border-radius: 4px;
  cursor: pointer;
  box-shadow: 0 5px 5px rgba(0, 0, 0, 0.2);
}

.detail-order {
  justify-content: center;
  display: flex;
}

.name-order {
  justify-content: center;
  display: flex;
}

.img-order {
  justify-content: center;
  display: flex;
}

.orderpage {
  display: grid;
  height: 500px;
  width: 800px;
  gap: 25px;
  margin: 20px;
  
  grid-template: 
  'order1 order2 order3 ' 1fr
  'order4 order5 order6' 1fr
  
  / 1fr 1fr 1fr;
}

.grid-order1{
  grid-area: order1;
  background-color: #ffffff;
  border-radius: 5%;
  border: none;
  padding: 5px;
  margin-bottom: 0.2%;
  
}


.grid-order2{
  grid-area: order2;
  background-color: #ffffff;
  border-radius: 5%;
  border: none;
  padding: 5px;
  margin-bottom: 0.2%;
  
}
.grid-order3{
  grid-area: order3;
  background-color: #ffffff;
  border-radius: 5%;
  border: none;
  padding: 5px;
  margin-bottom: 0.2%;
  
}
.grid-order4{
  grid-area: order4;
  background-color: #ffffff;
  border-radius: 5%;
  border: none;
  padding: 5px;
  margin-bottom: 0.2%;
  
}
.grid-order5{
  grid-area: order5;
  background-color: #ffffff;
  border-radius: 5%;
  border: none;
  padding: 5px;
  margin-bottom: 0.2%;
  
}
.grid-order6{
  grid-area: order6;
  background-color: #ffffff;
  border-radius: 5%;
  border: none;
  padding: 5px;
  margin-bottom: 0.2%;
  
}


</style>
