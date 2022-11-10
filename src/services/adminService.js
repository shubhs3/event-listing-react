const axios = require("axios");
const API_URL = "http://localhost:8080";

const header1= {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin":"*"
  };

  const header2= {
    "Content-Type": "multipart/form-data",
    "Access-Control-Allow-Origin":"*"
  };



  export async function fetchAllEventsService(data) {
    const config ={
      headers: {
          ...header1,
      },
      params: {
        sortBy: data.sortBy,
        limit : data.limit,
        page : data.page
      }
    } 
  
    try{
    const res = await axios.get(API_URL + "/v1/event/all", config);
    return res;
    }
    catch(error) {
        console.log("error" , error)

      return error.response
    }
  }

  

