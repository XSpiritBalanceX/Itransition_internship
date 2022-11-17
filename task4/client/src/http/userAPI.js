import {$host, $authHost} from './index';

 export const registration=async (name,email, password)=>{
  const {data}= await $host.post('api/user/registration', {name, email, password});
   localStorage.setItem('token', data.token);
  return data
};

export const login=async (email, password)=>{
    const {data}= await $host.post('api/user/login', {email, password});
    localStorage.setItem('token', data.token);
    return data
}

export const check=async ()=>{
    const {data}= await $authHost.post('api/user/auth');
    localStorage.setItem('token', data.token);
    return data
} 