import { FETCH_ALL_EVENTS, SET_ALL_EVENTS } from "../actionTypes";


    

        export const fetchAllEventsAction = (data) => {
          let payload = {
              onSuccess : allEventsSuccess,
              data : data
          };
      return {
          type : FETCH_ALL_EVENTS,
          payload : payload
      }
      }
      
      export const allEventsSuccess = (data) =>{
          console.log(data);
            return ({
              type: SET_ALL_EVENTS,
              payload: data,
            });
          }
    