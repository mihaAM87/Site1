import {START, SUCCESS, FAIL} from '../constants'

export default store => next => action => {
    const {callAPI, type, ...rest} = action
    if (!callAPI) return next(action)

    next({
        ...rest
    })

   

}