import {
    GET_ALL_TASKS_SUCCESS,
} from "./mutation-types";
export default {
    [GET_ALL_TASKS_SUCCESS](state, payload) {
        debugger
        payload.map((resp)=>{
          if(resp.status == 0){
              resp.status = false
          }else{
            resp.status = true
          }
      });
        state.allTasks = payload;
    }
};
