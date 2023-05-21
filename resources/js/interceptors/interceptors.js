import Axios from 'axios'

export default function setup(store){
  Axios.interceptors.request.use(function (config) {
    let token = store['getters']['auth/apiAccessToken']
    if (token) {
        debugger
      config.headers['Authorization'] = `Bearer ${token}`
    }
    return config;
  }, function (error) {
    return Promise.reject(error);
  });
}