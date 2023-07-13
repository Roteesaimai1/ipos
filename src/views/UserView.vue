<template>
  <div class="grid-user">
    <button class="btn-newuser" @click="TogContent()" >New User</button>
    <div class="createuse" v-if="visContent" :style="{ visibility: visContent ? 'visible' : 'hidden' }" style="align-items: center; display: flex; justify-content: center;">        
        <table class="userlist" style="width: 60%; ">
            <tr>
                <th style="width: 40%;">Username</th>
                <th style="width: 20%;">Role</th>
                <th style="width: 30%;">Edit</th>
            </tr>  
            <tr>
                <td>Joe</td>
                <td>Admin</td>
                <td>
                    <button class="btn-edit">แก้ไข</button>
                    <button class="btn-dis">ปิดใช้งาน</button>
                    <button class="btn-del">ลบ</button>
                </td>
            </tr> 
            <tr>
                <td>Joe</td>
                <td>Admin</td>
                <td>
                    <button class="btn-edit">แก้ไข</button>
                    <button class="btn-dis">ปิดใช้งาน</button>
                    <button class="btn-del">ลบ</button>
                </td>
            </tr>
            <tr>
                <td>Joe</td>
                <td>Admin</td>
                <td>
                    <button class="btn-edit">แก้ไข</button>
                    <button class="btn-dis">ปิดใช้งาน</button>
                    <button class="btn-del">ลบ</button>
                </td>
            </tr>
        </table>
    </div>
    <!-- Popup Create New Users -->
    <div class="popup-create" v-if="visNewuser" :style="{ visibility: visNewuser ? 'visible' : 'hidden' }" style="align-items: center; display: flex; justify-content: center;">
        <div class="create-user" style="align-items: center; display: grid; justify-content: center;">
            <h3 style="align-items: center; display: grid; justify-content: center; margin-top: 10px; color: orangered; ">New Users</h3>
            <div class="inputBox">
                <input type="text" placeholder="Username" style="margin-bottom: 10%;"  required>
                <span>Username</span>
            </div> 
            <div class="inputBox">
                <input type="password" style="margin-bottom: 10%;" placeholder="Password"  required>
                <span>Password</span>
            </div>    
            <div class="inputBox">
                <input type="text" style="margin-bottom: 10%;" placeholder="Display Name"  required>
                <span>Display Name</span>
            </div> 
            <div>
                <select id="role" name="role">
                    <option value="Admin">Admin</option>
                    <option value="Owner">Owner</option>
                    <option value="Developer">Developer</option>
                    <option value="Test">Test</option>
                </select>
            </div>
            <div class="btn-popup-createuser" style="margin-top: 10px; margin-bottom: 10px;" >
                <button class="btn-edit" >สร้าง</button>
                <button class="btn-edit" @click="TogContent()" >ยกเลิก</button>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            visContent: true,
            visNewuser: false   
        }
        
    },
    methods: {
        TogContent() {
            this.visContent = !this.visContent
            this.visNewuser = !this.visNewuser
        }
    }
}
</script>

<style scoped>
.grid-user {

}
.createuse {
   visibility: visible;
}
th, td {
  padding: 10px;
  justify-content: center;
  text-align: center;
  border: 1px dotted black;
  background: #fff;
  
}
th, td:hover {
    background: rgb(223, 222, 222);
}
th {  
    background: salmon;
}
.btn-edit {
    background: orangered;
    border: none;
    border-radius: 3px;
    width: 30%;
    margin: 2px;
    color: #fff;
    box-shadow: 0 5px 5px rgba(0, 0, 0, 0.2);
}
.btn-del {
    background: red;
    border: none;
    border-radius: 3px;
    width: 30%;
    margin: 2px;
    color: #fff;
    box-shadow: 0 5px 5px rgba(0, 0, 0, 0.2);
}
.btn-dis {
    background: green;
    border: none;
    border-radius: 3px;
    width: 30%;
    margin: 2px;
    color: #fff;
    box-shadow: 0 5px 5px rgba(0, 0, 0, 0.2);
}
.btn-newuser {
    background: orangered;
    border: none;
    border-radius: 3px;
    width: 150px;
    height: 30px;
    margin: 2px;
    color: #fff;
    box-shadow: 0 5px 5px rgba(0, 0, 0, 0.2);
}
.create-user {
    background: #fff;
    width: 30%;
    height: 70%;
    border-radius: 2%;
}

@media (max-width: 860px) {
    .create-user {
        width: 100%;
        height: 70%;
          
    }
    .btn-edit{
        width: 30px;
        height: 20px;
        font-size: 2px; 
    }
    .btn-del{
        width: 30px;
        height: 20px;
        font-size: 2px; 
    }
    .btn-dis{
        width: 30px;
        height: 20px;
        font-size: 2px; 
    }
    
}  

</style>