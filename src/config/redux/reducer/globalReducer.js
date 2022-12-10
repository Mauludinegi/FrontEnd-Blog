const initialState = {
    name: 'Egi'
}
const globalReducer = (state = initialState, action) => {
    if(action.type === 'UPDATE_NAME') {
        return {
            ...state,
            name: 'Egi'
        }
    }
    return state;
}

export default globalReducer;