const initialState ={
    activity:[],
    oneActivity:{},
    getActivityByItinerary:[]

}

const activityReducer = (state = initialState, action)=>{

    switch(action.type){

        case "GETACTIVITIES":
            return{
              ...state,
              activity: action.payload,
             
              
            }
        case "GETONEACTIVITY":
        return {
            ...state,
            oneActivity: action.payload,
            auxiliar: action.payload
            
          }
          case"GETACTIVITIESBYITINERARY":
          return {
            ...state,
            getActivityByItinerary: action.payload
        }
            default:
                return state
    }

}
export default activityReducer
