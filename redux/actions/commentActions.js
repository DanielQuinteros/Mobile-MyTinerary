import axios from 'axios';

const commentActions = {
    addComment: (comment, itineraryId) => {

        const token = localStorage.getItem('token')
        return async (dispatch, getState) =>{
            if (comment.comment !== "") { // para que no comente vacio
                const res = await axios.post('https://my-tinerary-quinteros-back.herokuapp.com/api/itineraries/comment', {comment, itineraryId},{
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                })
                dispatch({
                    type: 'message',
                    payload: {
                        view: true,
                        message: res.data.message,
                        success: res.data.success
                    }
                })
                return res
            }
            else {
                dispatch({
                    type: 'message',
                    payload: {
                        view: true,
                        message: 'Enter comment to save',
                        success: false
    
                    }
                })
            }
        }
    },
    
    modifiComment: (commentsMsj) => {
        const {commentId, comment}= commentsMsj
        const token = localStorage.getItem('token')
        return async (dispatch, getState) => {
            try{
                const res = await axios.put(`https://my-tinerary-quinteros-back.herokuapp.com/api/itineraries/comment/${commentId}`, { comment }, {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                })
                //console.log(res)
                dispatch({
                    type: 'message',
                    payload: {
                        view: true,
                        message: res.data.message,
                        success: res.data.success
                    }
                })
    
                return res
            }catch(err){
                console.log(err)
            }
           
        }
    } ,
    deleteComment: (id, commentId) => {

        const token = localStorage.getItem('token')
        //console.log(token)
        return async (dispatch, getState) => {
            const res = await axios.post(`https://my-tinerary-quinteros-back.herokuapp.com/api/itineraries/comment/${id}`,{}, {
                headers: {
                    'Authorization': `Bearer ${token}`
                },
                data:{commentId}

            })
            
            dispatch({
                type: 'message',
                payload: {
                    view: true,
                    message: res.data.message,
                    success: res.data.success
                }
               
            })
            return res
        }
    },

}

export default commentActions;