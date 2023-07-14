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
            <p>บิลที่ 1 | ผู้สร้างรายการ Joe</p>
            <hr>
            <div>
              <h5>น้ำแข็ง</h5>
              <div class="options" v-for="item in ices" :key="item.id" >              
                <label>
                  <input type="radio" v-model="selectedIce" name="ice" :value="item.id" />{{ item.name }} 
                </label>             
              </div>
              <hr>
              <div class="options">
                <h5>ระดับความหวาน</h5>
                <label>
                  <input type="radio" v-model="sweetoptions" value="ปกติ" /> ปกติ
                </label>
                <label>
                  <input type="radio" v-model="sweetoptions" value="หวานน้อย" /> หวานน้อย
                </label>
                <label>
                  <input type="radio" v-model="sweetoptions" value="เพิ่มหวาน" /> เพิ่มหวาน
                </label>
                <label>
                  <input type="radio" v-model="sweetoptions" value="" /> ไม่เลือก
                </label>
              </div>
              <hr>
              <div class="options">
                <h5>ท็อปปิ้ง (เพิ่ม 10 บาท)</h5>
                <label>
                  <input type="radio" v-model="toppingoptions" value="คาราเมล" /> คาราเมล
                </label>
                <label>
                  <input type="radio" v-model="toppingoptions" value="ช็อกโกแล็ต" /> ช็อกโกแล็ต
                </label>
                <label>
                  <input type="radio" v-model="toppingoptions" value="สตรอเบอร์รี่"/> สตรอเบอร์รี่
                </label>
                <label>
                  <input type="radio" v-model="toppingoptions" value="เนื้อมะพร้าวอ่อน"/> เนื้อมะพร้าวอ่อน
                </label>
                <label>
                  <input type="radio" v-model="toppingoptions" value="" /> ไม่เลือก
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
              <div class="head-bill" style="text-align: center">
                <h2>ร้าน ลิงปีนมะพร้าว</h2>
                <b>สาขา ตลาดใหญ่มาก มาร์เก็ต</b>
                <p>บิลที่ 1 ผู้สร้างรายการ Joe</p>
              </div>
              <hr />
              <div v-for="item in billItems" :key="item.id" >
                <p><b>เมนู {{ item.menu.menuname }}</b></p>
                <!-- ชื่อรายการ -->
              </div>
              <div style="text-align: right"></div>
              <div >
                <p>น้ำแข็ง: </p>
                <div style="text-align: right"></div> <!-- ราคา -->
                
                <!-- price-topping -->
              </div>
              <div class="footer-bill">
                <hr />
                <div class="total">
                  <h4>Total :</h4>
                </div>
                <div class="total-price" style="text-align: right; font-size: 23px">
                  <b> บาท</b>
                </div>
                <div style="text-align: center">Thank you</div>
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
        iceoptions: "",
        sweetoptions: "",
        toppingoptions: "",      
        menulist: [],
        createMenuId: null,    
        billItems: [],
        selectedMenu: null,
        selectedIce: null,
        selectedSweet: null,
        selectedTopping: null,
        ices: [
          { id: 1, name: 'ปั่น'},
          { id: 2, name: 'ไม่ปั่น'},
          { id: 3, name: 'ไม่เลือก'}
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
        // เพิ่มรายละเอียดอื่น ๆ ของรายการในบิล
        };
        this.billItems.push(billItem);
        this.isPopupVisible = false;
        this.maincontent = false;
        this.createMenuId = null;
        this.selectedMenu = null;
        },
    },    
    computed: {
      
    }
}

  </script>
  
  <style>
  .options label {
    padding: 10px;
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
    
  }
  
  .popup-bill {
    /* width: 400px; */
    width: 20%;
    height: 690px;
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
  