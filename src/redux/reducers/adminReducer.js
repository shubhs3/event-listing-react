import { SET_ALL_EVENTS } from "../actionTypes";

const initialState = {
    allEvents: []
};

export default function (state = initialState, action) {

  switch (action.type) {


    case SET_ALL_EVENTS: {
        const payload = action.payload;
console.log(payload);
        if(payload.status === 200){
            return {
                ...state , 
                allEvents : payload.data.results,
                totalPages : payload.data.totalPages
            }
        }
    }




    




    default:
      return state;
  }
}
