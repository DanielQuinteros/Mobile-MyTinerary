import axios from "axios";



const citiesActions ={

    getCities:()=>{
        return async(dispatch,getstate)=>{
            const res = await axios.get('https://my-tinerary-quinteros-back.herokuapp.com/api/cities')
            dispatch({type: 'GETCITIES', payload:res.data.response.cities})
        }
    },
    getOneCities:(id)=>{

        return async(dispatch,getState)=>{

            const res = await axios.get(`https://my-tinerary-quinteros-back.herokuapp.com/api/cities/${id}`)
           
            dispatch({type: 'GETONECITIES', payload:res.data.response})
        }
    },
    filterCities: (input)=>{
        return async(dispatch,getState) =>{
            dispatch({type:"FILTERCITIES",payload:input})
        }
    }
}
export default citiesActions