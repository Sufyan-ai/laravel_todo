import axios from "axios";
import {
    GET_ALL_TASKS_SUCCESS,
} from "./mutation-types";
export default {
    async saveTask({ commit }, payload) {
     try {
      debugger
       const response = await axios.post("/api/task/tasks",payload);
       if (response.data) {
        debugger
        commit(GET_ALL_TASKS_SUCCESS, response.data.data);
      }
       return response.data;
     } catch (error) {
        return error.response.data;
     }
    },
    async getTasks({commit}){ // promise which return type of array of objects 
      try {
        debugger
         return   await axios.get('/api/task/tasks').then(res=>{
          commit(GET_ALL_TASKS_SUCCESS, res.data.data)
          return res.data.data
         });
      } catch (error) {
        return error.response;
      }
    },
    async updateTask({ commit }, payload) {
      try {
        debugger
          const response = await axios.patch(`'/api/task/tasks'/${payload.id}`, payload);
          return response.data;
      } catch (error) {
          return error.response.data;
      }
  },
   
   
  
    

  
   
   
    

}
