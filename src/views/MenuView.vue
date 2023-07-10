<template>
  <div class="Frame1" >
    <button class="BtnCreatemenu" style="left: 280px; top: 140px; position: absolute; ">เพิ่มเมนู</button>
    <div class="GridCreatemenu" >
        <div>
            <input v-model="namemenu" placeholder="ชื่อเมนู" />
            <input v-model="pricemenu" placeholder="ราคา" />  
        </div>
        <button>บันทึก</button>
    </div>
    
</div>
</template>

<script>
export default {

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