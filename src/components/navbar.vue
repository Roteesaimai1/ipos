<template>
    <div class="nav">
      <div class="logo">
        <img src="../assets/logococo.png" alt="vuejsimg" width="120" height="120" >       
        <h4>ลิงปีนมะพร้าว</h4>                      
      </div>
      <div class="username">
        <hr>
        <p> <strong>Username:</strong>  Joe</p>
        <p> <strong>Role:</strong>  Admin</p>
        <hr>
      </div>
      
      <router-link style="text-decoration: none;" to="/">
        <div class="navlink">
          <div style="margin-right: 10%; margin-left: 10%;">
            <i class="fa-solid fa-house fa-xl" style="color: orangered;"></i>
          </div>
          
          <span class="rlink" style="margin-left: 0%;" ><strong>Home</strong></span>
        </div>
      </router-link>
      <router-link style="text-decoration: none;" to="/order">
        <div class="navlink">
          <div style="margin-right: 10%; margin-left: 10%;">
            <i class="fa-solid fa-dollar-sign fa-xl" style="color: orangered;"></i>
          </div>          
          <span class="rlink" style="margin-left: 5%;"><strong>จัดการออเดอร์</strong> </span>
        </div>
      </router-link>
      <router-link style="text-decoration: none;" to="/page3">
        <div class="navlink">
          <div style="margin-right: 10%; margin-left: 10%;">
            <i class="fa-solid fa-receipt fa-xl" style="color: orangered;"></i>
          </div>         
          <span class="rlink" style="margin-left: 4%;" ><strong>จัดการบิล</strong>  </span>
        </div>
      </router-link>
      <router-link style="text-decoration: none;" to="/page3">
        <div class="navlink">
          <div style="margin-right: 10%; margin-left: 10%;">
            <i class="fa-solid fa-file-pen fa-xl" style="color: orangered;"></i>
          </div>
          
          <span class="rlink" style="margin-left: 1%;" > <strong>แก้ไขเมนู</strong> </span>
        </div>
      </router-link>
      <router-link style="text-decoration: none;" to="/page3">
        <div class="navlink">
          <div style="margin-right: 10%; margin-left: 10%;">
            <i class="fa-solid fa-user-pen fa-xl" style="color: orangered;"></i>
          </div>
          
          <span class="rlink" style="margin-left: -1%;" > <strong>จัดการพนักงาน</strong> </span>
        </div>
      </router-link>
      <router-link style="text-decoration: none;" to="/page3">
        <div class="navlink-logout">
          <div style="margin-right: 10%; margin-left: 10%;">
            <i class="fa-solid fa-right-from-bracket fa-xl" style="color: rgb(252, 65, 65)"></i>
          </div>
          
          <span class="rlink" style="margin-left: 3%;" ><strong>ออกจากระบบ</strong>  </span>
        </div>
      </router-link>
        
        
        
        
      
    </div> 
    
    
</template>

<script>

export default {
    name:'navbar',
    data(){
        return{

        }
    }
    
}
</script>

<style>

@media  (max-width: 860px) {
  .rlink  {
    display: none;
  }
  .logo {
    display: none;
  }
 
}

.username {
  /* padding-top:1%; */
  padding-left:7%;
  padding-right:7%;
  color: aliceblue;
  text-align: left;
  font-size: 80%;
  
}

.logo {
  padding-top:8%;
  color: aliceblue;
}
.nav {
  display: block; 
  position: sticky;
}

/* Navbar menu */
.navlink {
  padding: 10%;
  display: flex;
  align-items: center;
}
.navlink i {
  margin-left: 5% ;
  margin-right: 5% ; 
}
.navlink span {
  margin-right: 1% ;
  
}
.navlink:hover {
  background-color: orangered;
  font-size: 120%; 
  
}
.rlink{ 
  color: rgb(255, 255, 255);
}

/* Navbar Menu logout */
.navlink-logout {
  padding: 10%;
  display: flex;
  align-items: center;
  
}
.navlink-logout:hover {
  background-color: rgb(252, 65, 65);
  font-size: 130%;
  
}
.navlink-logout i {
  margin-left: 5% ;
  margin-right: 5% ;
}
</style>