// create initial state
//--------------------------------------------------------
const initState = {
    login: false,
    new: false,
    profile: {}
}

export default (state = initState, action) => {
    switch(action.type){
        case "LOGIN":
            return {...state, new: false, login: true, profile: action.payload}
        case "LOGOUT":
            console.log(initState)
            return {...initState}
        case "NEW_USER":
            return{...state, login: true, new: action.payload.new}     
        default:
            return {...state}
    }
};
