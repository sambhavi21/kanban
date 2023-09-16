import { FETCH_FAILED_TICKETS, FETCH_REQUIST_TICKETS, FETCH_SUCCESS_TICKETS } from "./kanbanType"

const fetchTickets=()=>{
    return {type:FETCH_REQUIST_TICKETS}
}
const fetchSuccess=(data)=>{
    return {type:FETCH_SUCCESS_TICKETS,payload:data}
}
const fetchFailed=(err)=>{
    return {type:FETCH_FAILED_TICKETS,payload:err}
}
export const fetchSuccessTickets=()=>{
    return (dispatch)=>{
        dispatch(fetchTickets());
        var p=fetch("https://api.quicksell.co/v1/internal/frontend-assignment");
        p.then ((response)=>{
          response.json().then((result)=>{
          dispatch(fetchSuccess(result.tickets))
           
          });
        }).catch((err)=>{
          dispatch(fetchFailed(err));
        })
    }
    
}
export const fetchSuccessUser=()=>{
    return (dispatch)=>{
        dispatch(fetchTickets());
        var p=fetch("https://api.quicksell.co/v1/internal/frontend-assignment");
        p.then ((response)=>{
          response.json().then((result)=>{
          dispatch(fetchSuccess(result))
           
          });
        }).catch((err)=>{
          dispatch(fetchFailed(err));
        })
    }
    
}

