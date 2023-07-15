<template>
  <div :class="{ maincontentclose: maincontent }">
    <div class="orderpage">
      <div v-for="item in menulist" :key="item._id" class="grid-order">
        <div class="img-order">
          <img src="../assets/teapic.png" alt="" style="width: 80px; height: 50; ">
        </div>      
        <div class="name-order">
          <h4>{{ item.menuname }}</h4>
        </div>
        <div class="detail-order">
          <p>ราคา <b> {{ item.menuprice }}</b> บาท</p>
        </div>       
        <div class="btnorder">
          <button class="btn-order" @click="openPopup(item._id)" v-if="createMenuId !== item._id">เพิ่มรายการ</button>       

      <!-- POPUP MENU -->
        <div v-else >
        <div  v-if="isPopupVisible && createMenuId === item._id" class="popup" :style="{ visibility: isPopupVisible ? 'visible' : 'hidden' }">
          <div class="img-bill" style="text-align: center">
            <img src="../assets/billpic.png" width="120" height="120" />
          </div>
          <h3>{{ selectedMenu.menuname }} {{ selectedMenu.menuprice }}</h3>       
          <p>บิลที่ 14 | ผู้สร้างรายการ Joe</p>
          <hr>
          <div>
            <h5>น้ำแข็ง</h5>
            <div class="options" v-for="item in ices" :key="item.id" >              
              <label>
                <input type="radio" v-model="selectedIce" name="ice" :value="{name:item.name, price:item.price}" /> {{ item.name }} 
              </label>             
            </div>
            <hr>
           
            <h5>ระดับความหวาน</h5>
             <div class="options" v-for="itemsw in sweets" :key="itemsw.id" >  
              <label>
                <input type="radio" name="sugar" v-model="selectedSweet" :value="{name:itemsw.name, price:itemsw.price}" /> {{ itemsw.name }}
              </label>               
            </div>
            <hr>
            <h5>ท็อปปิ้ง</h5>
            <div class="options" v-for="topitem in toppings" :key="topitem.id" >               
              <label>
                <input type="radio" name="topping" v-model="selectedTopping" :value="{ name:topitem.name, price:topitem.price }" /> {{ topitem.name }}
              </label>               
            </div>
            <hr>
          </div>
          <button type="button" @click="addToBill()">เปิดรายการ</button>
          <button type="button" style="background-color: yellowgreen;" @click="Savesilp">บันทึกรูปใบเสร็จ</button>
          <button type="button" style="background-color: red;" @click="openPopup()">ยกเลิกรายการ</button>                      
        </div>   
      <!-- ------------------------------------------------ -->
    </div> 
      <!-- POPUP-BILL MENU -->
        <div v-if="billItems.length > 0" class="popup-bill" >
          <div class="ppbill">
            <div class="head-bill" style="text-align: center" >
              <h5>ร้าน ลิงปีนมะพร้าว</h5>
              <b>สาขา ตลาดใหญ่มาก มาร์เก็ต</b>
              <p>บิลที่ 14 ผู้สร้างรายการ Joe</p>
            </div>
            <hr />
            <div v-for="item in billItems" :key="item.id" >
              <p><b>เมนู: {{ item.menu.menuname }}</b> ราคา {{ item.menu.menuprice }} </p>
              <ul>
                <li style="display: flex; justify-content: space-between; text-align: left;" >
                  <span>น้ำแข็ง: {{ item.ice.name }} </span>                       
                  <span style="text-align: right;" > ราคา {{ item.ice.price }} บาท</span>                       
                </li>                                                                                       
              </ul>  
              <ul>
                  <li style="display: flex; justify-content: space-between; text-align: left;"  >
                      <span>ความหวาน: {{ item.sweet.name }} </span>  
                      <span style="text-align: right;"  >ราคา {{ item.sweet.price }} บาท </span>                       
                  </li>
              </ul>  
              <ul>
                  <li style="display: flex; justify-content: space-between; text-align: left;"  >
                      <span>ท็อปปิ้ง: {{ item.topping.name }} </span>  
                      <span style="text-align: right;"  >ราคา {{ item.topping.price }} บาท </span>                       
                  </li>
              </ul>           
            </div>              
            <div class="footer-bill">
              <hr />
              <div class="total">
                <h6>Total :</h6>
              </div>
              <div class="total-price" style="text-align: right; font-size: 18px">
                <b> {{ calculateTotalPrice() }} บาท</b>
              </div>
              <div style="text-align: center">Thank you</div>
              <div style="display: inline; " >
                <button style="width: 50%; margin: 10px; background: orangered; border: none; border-radius: 2px; color: #fff;" >ยืนยัน</button>
                <button style="width: 30%; margin: 10px; background: orangered; border: none; border-radius: 2px; color: #fff;" @click="CCbtn()" >ยกเลิก</button>
              </div>
              
            </div>
          </div>         
        </div>
      <!-- ------------------------------------------------ -->
      
    </div>
  </div>
</div>
</div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      isPopupVisible: false,
      maincontent: false,           
      menulist: [],
      createMenuId: null,    
      billItems: [],
      selectedMenu: null,
      selectedIce: null,
      selectedSweet: null,
      selectedTopping: null,
      ices: [
        { id: 1, name: 'ปั่น' , price: 5},
        { id: 2, name: 'ไม่ปั่น', price: 0},
        { id: 3, name: 'ไม่เลือก', price: 0}
      ],
      sweets: [
        { id: 1, name: 'ปกติ' , price: 0},
        { id: 2, name: 'หวานน้อย', price: 0},
        { id: 3, name: 'เพิ่มหวาน', price: 0},
        { id: 4, name: 'ไม่เลือก', price: 0}
      ],
      toppings: [
        { id: 1, name: 'คาราเมล' , price: 10},
        { id: 2, name: 'นมข้นหวาน', price: 5},
        { id: 3, name: 'เนื้อมะพร้าว', price: 10},
        { id: 4, name: 'สตอเบอรรี่', price: 10},
        { id: 5, name: 'ช็อกโกแล็ต', price: 10},
        { id: 6, name: 'ไม่เลือก', price: 0}
      ]

    };
  },
  mounted() {
    this.showMenu();
  },
  methods: {
    openPopup(menuId) {
      this.isPopupVisible = !this.isPopupVisible;
      this.maincontent = !this.maincontent;
      this.createMenuId = menuId
      this.selectedMenu = this.menulist.find((item) => item._id === menuId);
      
    },
    Savesilp() {
      alert("บันทึกเรียบร้อยแล้ว");
    },
    showMenu() {
      axios
        .get("http://localhost:3000/menu")
        .then((response) => {
          this.menulist = response.data;
        })
        .catch((err) => {
          console.log("เกิดข้อผิดพลาดในการเรียก API:", err);
        });
    },
    addToBill() {
      const billItem = {
      id: Date.now(),
      menu: this.selectedMenu,
      ice: this.selectedIce,
      sweet: this.selectedSweet,
      topping: this.selectedTopping
      
      // เพิ่มรายละเอียดอื่น ๆ ของรายการในบิล
      };
      this.billItems.push(billItem);
      this.isPopupVisible = false;
      this.maincontent = false;
      this.createMenuId = null;
      this.selectedMenu = null;
      this.selectedIce = null;
      this.selectedSweet = null;
      this.selectedTopping = null;
    },
    calculateTotalPrice() {
      let total = 0;
      for (const item of this.billItems) {
        total += item.menu.menuprice + item.ice.price + item.sweet.price + item.topping.price;
      }
      return total;
    },
    CCbtn() {
      if (confirm('ต้องการเคลียบิลใช่ไหม?')) {
        window.location.reload()
      }       
    }

  },    
  computed: {
    
  }
}

</script>

<style>
.options label {
  padding: 10px;
  display: inline;
}

.maincontentclose {
  position: fixed;
  visibility: hidden;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.4);
}

.ppbill {
  text-align: left;
  padding: 30px;
}
.ppbill ul{
  list-style-type: none;
  margin: 0px;   
}
.ppbill li{ 
  margin: -12px;   
} 

.popup {
  width: 400px;
  background: #fff;
  border-radius: 6px;
  position: absolute;
  top: 50%;
  left: 45%;
  transform: translate(-50%, -50%);
  text-align: left;
  padding: 0 30px 30px;
  color: #000000;
  visibility: hidden;
  z-index: 1;
  font-size: 15px;
  
}

.popup-bill {
  /* width: 400px; */
  width: 20%;
  height: 790px;
  background: #fff;
  border-radius: 6px;
  position: absolute;
  top: 50%;
  left: 88%;
  transform: translate(-50%, -50%);
  text-align: center;
  padding: 0 30px 30px;
  color: #000000;
  visibility: visible;
  z-index: 1;
  padding: 30px 10px 20px 10px;
  display: grid;
  font-size: 13px;
  
  
}
.popup-bill span {
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
.popup button {
  width: 40%;
  margin: 10px;
  margin-top: 10%;
  padding: 10px 0;
  background: orangered;
  color: #fff;
  border: 0;
  outline: none;
  font-size: 18px;
  border-radius: 4px;
  cursor: pointer;
  box-shadow: 0 7px 5px rgba(0, 0, 0, 0.2);
}

.btnorder {
  justify-content: center;
  display: flex;
}

.btn-order {
  width: 60%;
  margin: 2px;
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
  margin-bottom: 2%;
}

.orderpage {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 25px;
  width: 70%;
}


.grid-order {
  background-color: #ffffff;
  border-radius: 5%;
  border: none;
  padding: 5px;
  margin-bottom: 0.2%;
}
</style>
