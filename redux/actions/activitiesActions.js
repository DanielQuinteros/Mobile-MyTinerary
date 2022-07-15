import axios from "axios";



const activitiesActions ={

    getActivities:()=>{
        return async(dispatch,getstate)=>{
            const res = await axios.get('https://my-tinerary-quinteros-back.herokuapp.com/api/activities')
           
            dispatch({type: 'GETACTIVITIES', payload:res.data.response})
        }
    },
    getOneActivity:(id)=>{

        return async(dispatch,getState)=>{ 

            const res = await axios.get(`https://my-tinerary-quinteros-back.herokuapp.com/api/activities/${id}`)
            
            dispatch({type: 'GETONEACTIVITY', payload:res.data.response})
        }
    },
    getActivityByItinerary:(id)=>{
        return async(dispatch,getState)=>{

            const res = await axios.get(`https://my-tinerary-quinteros-back.herokuapp.com/api/activitiesbyitinerary/${id}`)
           
            dispatch({type: 'GETACTIVITIESBYITINERARY', payload:res.data.response})
        }
    }
}
export default activitiesActions