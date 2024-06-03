let  initialState = {
    count : 0
}

const counterReducer = (state, actions) =>{
    switch(action.type) {
        case 'INC':
            return{
                ...state,
                count : state.count + action.value

            }
            case 'DEC':
                return{
                    count : state.count - action.value
                }
                default :
                return state
    }
}

export default counterReducer;