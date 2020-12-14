import axios from 'axios';
import {Config} from './Config';
export class userService {

    static  getAllUsers(){
        return new Promise((resolve , reject)=> {
                axios.get(Config.BASE_URL() )
                    .then(response => {
                        console.log(response.data.data)
                         resolve(response.data.data);
                    }).catch(err=>{
                        console.log(err);
                        reject(err);
                })
        });
    }

    static addNewUser(user){
        return new Promise((resolve , reject)=>{
            axios.post(Config.BASE_URL() , {
                id : user.id,
                firstName : user.firstName ,
                lastName : user.lastName ,
                email : user.email
            }).then(response=>{

                 resolve(response);
            }).catch(err =>{
                reject(err);
            })
        });
    }

    static deleteUser(id){
        return new Promise((resolve,reject)=>{
           axios.delete(Config.BASE_URL()+`/${id}`)
               .then(response=>{
                   resolve(response);
               }) .catch(err=>{
                   reject(err);
           })
        });
    }

    static updateUser(user){
        return new Promise((resolve ,reject)=>{
           axios.put(Config.BASE_URL()+`/${user.id}` , {
               id : user.id,
               firstName : user.firstName,
               lastName : user.lastName,
               email : user.email
           }).then(response=>{
               resolve(response);
           }).catch(err=>{
               console.log(err);
               reject(err);
           })
        });
    }



}