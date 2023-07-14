<template>
  <div class="grid-user">
    <button class="btn-newuser" @click="TogContent()" >New User</button>
    <div class="createuse" v-if="visContent" :style="{ visibility: visContent ? 'visible' : 'hidden' }" style="align-items: center; display: flex; justify-content: center;">             
            <table class="userlist" style="width: 60%;">
                <tr>                    
                    <th style="width: 40%;">Username</th>
                    <th style="width: 20%;">Role</th>
                    <th style="width: 20%;">Status</th>
                    <th style="width: 30%;">Options</th>
                </tr>  
                <tr v-for="users in getuser" :key="users._id"  >
                    <td>{{ users.username }}</td>
                    <td>{{ users.userrole }}</td>
                    <td>
                        <button class="btn-dis" @click="disableUser(users._id)" >{{ userStatus(users.status) }}</button>
                    </td>
                    <td>
                        <button class="btn-edit">แก้ไข</button>
                        
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
                <input type="text" placeholder="Username" v-model="user.username" style="margin-bottom: 10%;"  required>
                <span>Username</span>
            </div> 
            <div class="inputBox">
                <input type="password" style="margin-bottom: 10%;" v-model="user.password" placeholder="Password"  required>
                <span>Password</span>
            </div>    
            <div class="inputBox">
                <input type="text" style="margin-bottom: 10%;" v-model="user.displayname" placeholder="Display Name"  required>
                <span>Display Name</span>
            </div> 
            <div>              
                <select id="role" name="role"  v-model="user.userrole" >
                    <option value="Admin">Admin</option>
                    <option value="Owner">Owner</option>
                    <option value="Developer">Developer</option>
                    <option value="Test">Test</option>
                </select>
            </div>
            <br>
            <div>
                <input type="radio" name="status" value=true v-model="user.status" > เปิดใช้งาน 
                <br>
                <input type="radio" name="status" value=false v-model="user.status" > ปิดใช้งาน
            </div>
            <div class="btn-popup-createuser" style="margin-top: 10px; margin-bottom: 10px;" >
                <button class="btn-edit" @click="ConfirmUser()" >สร้าง</button>
                <button class="btn-edit" @click="TogContent()" >ยกเลิก</button>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
    data() {
        return {
            visContent: true,
            visNewuser: false,
            user: {
                username: '',
                password: '',
                displayname: '',
                userrole: '',
                status: ''
            },
            getuser: [],
            getUserId: null   
        }       
    },
    methods: {
        TogContent() {
            this.visContent = !this.visContent
            this.visNewuser = !this.visNewuser
        },                
        ConfirmUser() {
            if (confirm('ยืนยันการสร้างใช่ไหม?'))
            this.SaveNewUser()
        },
        SaveNewUser() {
            axios.post('http://localhost:3000/user', this.user)
            .then((response) => {
                console.log('Userถูกบันทุกแล้ว', response.data);
                alert('สร้าง User เรียบร้อยแล้ว!')
                window.location.reload()
            })
            .catch((error) => {
                console.error('เกิดข้อผิดพลาดในการบันทึกเมนู', error);
                alert('เกิดข้อผิดพลาดในการบันทึกเมนู')
                window.location.reload();
            })
        },
        Userlist() {
            axios.get('http://localhost:3000/user')
            .then((response) => {
                this.getuser = response.data;
            })
            .catch((err) => {
                console.error('error to get userlist', err);
            })
        },
        userStatus(status) {
            return status ? 'ใช้งาน' : 'ปิดใช้งาน'
        },
        disableUser(userId) {
            const user = this.getuser.find(user => user._id === userId);
            const switchUser = {
                status: !user.status
            }
            axios.put(`http://localhost:3000/user/${userId}`, switchUser)
            .then((response) => {
                console.log('สถานะการใช้งานถูกอัปเดตแล้ว', response.data);
                alert(`สถานะการใช้งานถูกอัปเดตแล้ว`)
                this.Userlist();
            })
            .catch((err) => {
                console.error('เกิดข้อผิดพลาดในการอัปเดต', err);
            })
        }
    },
    mounted() {
        this.Userlist()
    }
}
</script>

<style scoped>

.grid-user {
    display: flex;
    flex-direction: column;   
}
.createuse {
    visibility: visible;
    display: flex;
    flex-wrap: wrap;
   
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
    background: rgb(22, 202, 193);
    border: none;
    border-radius: 3px;
    width: 50%;
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
    border-top: 10px solid orangered;
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
        height: 40px;
        font-size: 2px; 
    }
    
}  

</style>