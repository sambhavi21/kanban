import { FETCH_FAILED_TICKETS, FETCH_REQUIST_TICKETS, FETCH_SUCCESS_TICKETS } from "./kanbanType"

const initialState={
 Tickets:[],
 loading_tickets:false,
 Tickets_error:'',
}
const kanban_reducer=(state=initialState,action)=>{
 switch(action.type){
    case FETCH_REQUIST_TICKETS:{
        return{...state,loading_tickets:true}
    }
    case FETCH_SUCCESS_TICKETS:{
        return{...state,loading_tickets:false,Tickets:action.payload}
    }
    case FETCH_FAILED_TICKETS:{
        return {...state,loading_tickets:false,Tickets_error:action.payload}
    }
    default:
        return state;
    
 }
}
 export default kanban_reducer;