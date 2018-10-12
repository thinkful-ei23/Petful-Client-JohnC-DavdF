const API_BASE_URL = 'http://localhost:8080/api'



export const FETCH_CAT_SUCCESS = 'FETCH_CAT_SUCCESS'
export const FETCH_CAT_FAILURE = 'FETCH_CAT_FAILURE'
export const fetchCat =()=>dispatch =>{
    return fetch(`${API_BASE_URL}/cat`,{
        method:'GET',
        headers:{
            'content-type': 'application/json'
        }
    })
    .then(res =>res.json())
    .then(dispatch({
        type:FETCH_CAT_SUCCESS
    }))
    .catch(dispatch({
        type:FETCH_CAT_FAILURE
    }))
}

export const ADOPT_CAT_FAILURE = 'ADOPT_CAT_FAILURE'
export const deleteCat =()=>dispatch =>{
    return fetch(`${API_BASE_URL}/dog`,{
        method:'DELETE',
        headers:{
            'content-type': 'application/json'
        }
    })
    .then(dispatch(fetchCat()))
    .catch(dispatch({
        type:ADOPT_CAT_FAILURE
    }))
}