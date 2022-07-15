import axios from "axios";



const itinerariesActions ={

    getItineraries:()=>{
        return async(dispatch,getstate)=>{
            const res = await axios.get('https://my-tinerary-quinteros-back.herokuapp.com/api/itineraries')
            //console.log(res)
            dispatch({type: 'GETITINERARIES', payload:res.data.response})
        }
    },
    getOneItinerary:(id)=>{

        return async(dispatch,getState)=>{ 

            const res = await axios.get(`https://my-tinerary-quinteros-back.herokuapp.com/api/itineraries/${id}`)
            //console.log(res)
            return res.data.response
            //dispatch({type: 'GETONEITINERARY', payload:res.data.response})
        }
    },
    getItineraryByCity:(id)=>{
        return async(dispatch,getState)=>{

            const res = await axios.get(`https://my-tinerary-quinteros-back.herokuapp.com/api/itinerarybycity/${id}`)
            //console.log(res)
            dispatch({type: 'GETITINERARIESBYCITY', payload:res.data.response})
        }
    },
    likeDislike: (id) => {
        const token = localStorage.getItem('token')//levantamos el token que va necesitar passport
        //console.log(token)
        return async () => {
            try {
                let response = await axios.put(`https://my-tinerary-quinteros-back.herokuapp.com/api/like/${id}`, {}, // ponemos un objeto vacio para pasarlo como primer parametro
                {headers: {
                    Authorization: 'Bearer '+token
                    }
                })
                //console.log(response)
                return response
                
            }catch (error) {
                console.log(error)
            }
        }
    }
}
export default itinerariesActions