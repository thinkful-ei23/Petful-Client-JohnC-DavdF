const API_BASE_URL = 'http://localhost:8080/api'



export const FETCH_DOG_SUCCESS = 'FETCH_DOG_SUCCESS'
export const FETCH_DOG_FAILURE = 'FETCH_DOG_FAILURE'
export const fetchDog =()=>dispatch =>{
    return fetch(`${API_BASE_URL}/dog`,{
        method:'GET',
        headers:{
            'content-type': 'application/json'
        }
    })
    .then(res =>res.json())
    .then(dispatch({
        type:FETCH_DOG_SUCCESS
    }))
    .catch(dispatch({
        type:FETCH_DOG_FAILURE
    }))
}

export const ADOPT_DOG_FAILURE = 'ADOPT_DOG_FAILURE'
export const deleteDog =()=>dispatch =>{
    return fetch(`${API_BASE_URL}/dog`,{
        method:'DELETE',
        headers:{
            'content-type': 'application/json'
        }
    })
    .then(dispatch(fetchDog()))
    .catch(dispatch({
        type:ADOPT_DOG_FAILURE
    }))
}