import axios from "axios"


const userActions ={

 signUpUser: (userData) => {
    //console.log(userData)
    return async (dispatch, getState) => {
        const res = await axios.post('https://my-tinerary-quinteros-back.herokuapp.com/api/auth/signUp', {...userData})
        console.log(res)
        dispatch({
            type: 'message',
            payload: {
                view: true,
                message: res.data.message,
                success: res.data.success
            }
        })
    }
},
signInUser: (userLogin) => {
    //console.log(userLogin)
    return async (dispatch, getState) => {
        const res = await axios.post('https://my-tinerary-quinteros-back.herokuapp.com/api/auth/signIn', {...userLogin})
        console.log(res)
        
        if(res.data.success) {
            localStorage.setItem('token',res.data.response.token)
            dispatch({
                type: 'user',
                payload: res.data.response.userData
            })
            dispatch({
                type: 'message',
                payload: {
                    view: true,
                    message: res.data.message,
                    success: res.data.success
                }
            })
        } else {
            dispatch({
                type: 'message',
                payload: {
                    view: true,
                    message: res.data.message,
                    success: res.data.success
                }
            })
        }
    } 
  },
signOut: (userData) => {
    console.log(userData)
    return async (dispatch, getState) => {
        await axios.post('https://my-tinerary-quinteros-back.herokuapp.com/api/auth/signOut',{...userData})
       
        localStorage.removeItem('token')

        dispatch({
            type:'user',
            payload:null
        })
    }   
},
verifyToken: (token) => {
    return async (dispatch, getState) => {
        //console.log(token)
        const user = await axios.get('https://my-tinerary-quinteros-back.herokuapp.com/api/auth/loginToken', {headers: {'Authorization': 'Bearer '+token}} )
        //console.log(userData)
        if (user.data.success) {
            dispatch({
                type: 'user',
                payload: user.data.response
            })
            dispatch({
                type: 'message',
                payload: {
                    view: true,
                    message: user.data.message,
                    success: user.data.success
                }
            })
        } else {
            localStorage.removeItem('token')
        }
    }
},

}

export default userActions