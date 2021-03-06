import * as types from './ActionTypes'
import * as Services from '../../microservices/services';

export const getAllServices = () => async (dispatch) => {
    dispatch({
        type: types.SERVICES_REQUEST
    })

    let request = await Services.getAllServices()
    if (request.status === 200){
        dispatch({
            type: types.SERVICES_SUCCESS,
            data: request.result
        })
    } else {
        dispatch({
            type: types.SERVICES_FAILURE
        })
    }
}