import { fetchAllEventsService } from "../../services/adminService";
import { FETCH_ALL_EVENTS} from "../actionTypes";

const middleware =
  ({ getState, dispatch }) =>
  (next) =>
  async (action) => {
    next(action);

    const { data, onSuccess } = action.payload || {};



  if(action.type === FETCH_ALL_EVENTS){
    const response = await fetchAllEventsService(data);
    dispatch(onSuccess(response))
  }







};

export default middleware;
