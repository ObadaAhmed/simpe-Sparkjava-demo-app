<template>
    <div class="container">
      <h1> Simple Demo</h1>

        <div class="center" align="center">
          <template>
            <div class="center">

              <vs-button border @click="changeVal()">
                add user
              </vs-button>
              <vs-dialog width="550px" not-center v-model="active">
                <template #header>
                  <h4 class="not-margin">
                    Welcome to <b>Vuesax</b>
                  </h4>
                </template>


                <div class="con-content">
                  <p>
                    Vuesax is a relatively new framework with a refreshing design and in the latest trends, vuesax based on vuejs which means that we go hand in hand with one of the most popular javascript frameworks in the world and with a huge community with which you will have all the help and documentation to create and make your project
                  </p>
                </div>

                <template #footer>
                  <div class="con-footer">
                    <vs-button @click="active=false" transparent>
                      Ok
                    </vs-button>
                  </div>
                </template>
              </vs-dialog>
              <vs-dialog width="550px" not-center v-model="active2">
                <template #header>
                  <h4 class="not-margin">
                   Alert Manger
                  </h4>
                </template>


                <div class="con-content">
                  <p>{{ message}}</p>
                </div>

                <template #footer>
                  <div class="con-footer">
                    <vs-button @click="active2=false" transparent>
                      Ok
                    </vs-button>
                    <vs-button @click="active2=false" dark transparent>
                      Cancel
                    </vs-button>
                  </div>
                </template>
              </vs-dialog>
              <vs-dialog width="300px" not-center v-model="active3">
                <template #header>
                  <h4 class="not-margin">
                    <div class="center">

                      <vs-alert dark :progress="progress" v-model="active12" color="danger">
                        <template #title>
                          Alert Maneger
                        </template>
                          {{message}}
                      </vs-alert>
                    </div>
                  </h4>
                </template>


                <div class="con-content">
                  <vs-input v-model="user.id" style="width: 30%" placeholder="id"></vs-input>
                  <vs-input v-model="user.firstName" style="width: 30%" placeholder="first name"></vs-input>
                  <vs-input v-model="user.lastName" style="width: 30%" placeholder="last name"></vs-input>
                  <vs-input v-model="user.email" style="width: 30%" placeholder="email"></vs-input>
                </div>

                <template #footer>
                  <div class="con-footer">
                    <vs-button v-if="!update"  @click="addNewUser()" transparent>
                      Ok
                    </vs-button>
                    <vs-button v-if="update"  @click="updateUser()" transparent>
                      update
                    </vs-button>

                    <vs-button @click="active3=false" dark transparent>
                      Cancel
                    </vs-button>
                  </div>
                </template>
              </vs-dialog>
            </div>
          </template>
        </div>

      <div class="grid">
        <vs-row justify="center">
          <vs-col :key="user.id" v-for="(user , index) in Users" w="2">
            <vs-card type="2">
            <template #title>
              <h3>{{ user.firstName }} {{user.lastName}}</h3>
            </template>
            <template #img>
              <img :src="images[index]" alt=""  >
            </template>
            <template #text>
              <p>
                {{user.email }}
              </p>
            </template>
            <template #interactions>
              <vs-button @click="deleteUser(user.id)" danger icon>
                <i class='bx bx-heart'></i>
              </vs-button>
              <vs-button @click="openUpdateDialog(index)" class="btn-chat" shadow primary>
                <i class='bx bx-delete' ></i>
                <span class="span">
          {{ user.id }}
        </span>
              </vs-button>
            </template>
          </vs-card>

          </vs-col>
        </vs-row>
      </div>



      <!--  view all users -->



    </div>
</template>

<script>
import {userService} from '../Services/userService'
export default {
name: "Users" ,
  data(){
  return {
    time: 6000,
    message : '',
    progress: 0,
    Users : [],
    user  : {
      id : '',
      firstName : '',
      lastName : '',
      email : ''
    },
    images : [
        "https://images.unsplash.com/photo-1542384701-c0e46e0eda04?ixid=MXwxMjA3fDB8MHxzZWFyY2h8OXx8YXZhdGFyfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60",
        "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60",
        "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8YXZhdGFyfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60",
        "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NHx8YXZhdGFyfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60",
        "https://images.unsplash.com/photo-1543610892-0b1f7e6d8ac1?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60",
        "https://images.unsplash.com/photo-1520283818086-3f6dffb019c0?ixid=MXwxMjA3fDB8MHxzZWFyY2h8N3x8YXZhdGFyfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60",
        "https://images.unsplash.com/photo-1549820610-ec7475b33969?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjN8fGF2YXRhcnxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60",
        "https://images.unsplash.com/photo-1586297135537-94bc9ba060aa?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mjd8fGF2YXRhcnxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60",
        "https://images.unsplash.com/photo-1601455763557-db1bea8a9a5a?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MzF8fGF2YXRhcnxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60",
        "https://images.unsplash.com/photo-1601455763557-db1bea8a9a5a?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MzF8fGF2YXRhcnxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60",
        "https://images.unsplash.com/photo-1544723495-432537d12f6c?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MzZ8fGF2YXRhcnxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60",
        "https://images.unsplash.com/photo-1569913486515-b74bf7751574?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mzh8fGF2YXRhcnxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60",
        "",
    ],
    active: false,
    email: '',
    password: '',
    remember: false,
    active2: false,
    active12: false,
    active3: false,
    input1: '',
    update : false
  }
  },
  methods : {
      changeVal(){
        this.active3=!this.active3
        this.update = false

      },
     addNewUser (){
       userService.addNewUser(this.user)
          .then(response =>{
            if (response.data.message){
                console.log(response.data.message)
              this.message = response.data.message;
                this.active12 = true;
            }else {
            this.active3=false;
            this.user = '';
            this.refresh();
            }
          });
     } ,
    openUpdateDialog(index){
         this.user = this.Users[index];
         this.active3 = true;
         this.update = true
    },
    updateUser(){
        userService.updateUser(this.user)
          .then(response =>{
            if (response.data.message){
              this.active2 = true;
              this.message = response.data.message;
              this.active3 = false
              this.refresh();
            }
          });
    },
    deleteUser(userid){
      userService.deleteUser(userid)
        .then(response=>{
          if (response.data.message){
            this.active2 = true;
              this.message = response.data.message;
            this.refresh();
          }
        });
    },
    refresh(){
      userService.getAllUsers()
          .then(response =>{
            this.Users = response;
          });
    }
  },
  watch: {
    active(val) {
      if(val) {
        var interval = setInterval(() => {
          this.progress++
        }, this.time / 100);

        setTimeout(() => {
          this.active = false
          clearInterval(interval)
          this.progress = 0
        }, this.time);
      }
    }
  },
  created(){
    userService.getAllUsers()
    .then(response =>{
        this.Users = response;
    });
    console.log(this.Users)
  }
}
</script>



<style scoped lang="css">
.con-footer {
  display: flex;
  align-items: center;
  justify-content: flex-end;
}
.con-footer .vs-button {
  margin: 0px;
}
.con-footer .vs-button .vs-button__content {
  padding: 10px 30px;
}
.con-footer .vs-button ~ .vs-button {
  margin-left: 10px;
}
.not-margin {
  margin: 0px;
  font-weight: normal;
  padding: 10px;
  padding-bottom: 0px;
}
.con-content {
  width: 100%;
}
.con-content p {
  font-size: 0.8rem;
  padding: 0px 10px;
}
.con-content .vs-checkbox-label {
  font-size: 0.8rem;
}
.con-content .vs-input-parent {
  width: 100%;
}
.con-content .vs-input-content {
  margin: 10px 0px;
  width: calc(100%);
}
.con-content .vs-input-content .vs-input {
  width: 100%;
}
.footer-dialog {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: calc(100%);
}
.footer-dialog .new {
  margin: 0px;
  margin-top: 20px;
  padding: 0px;
  font-size: 0.7rem;
}
.footer-dialog .new a {
  color: rgba(var(--vs-primary), 1) !important;
  margin-left: 6px;
}
.footer-dialog .new a:hover {
  text-decoration: underline;
}
.footer-dialog .vs-button {
  margin: 0px;
}

</style>