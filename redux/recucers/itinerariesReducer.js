const initialState ={
    itinerary:[],
    auxiliar:[],
    oneItinerary:{},
    getItinerariesByCity:[]

}

const itinerariesReducer = (state = initialState, action)=>{

    switch(action.type){

        case "GETITINERARY":
            return{
              ...state,
              itinerary: action.payload,
              auxiliar: action.payload,
              
            }
        case "GETONEITINERARY":
        return {
            ...state,
            oneItinerary: action.payload,
            auxiliar: action.payload
            
          }
          case"GETITINERARIESBYCITY":
          return {
            ...state,
            getItinerariesByCity: action.payload
        }
            default:
                return state
    }

}
export default itinerariesReducer
