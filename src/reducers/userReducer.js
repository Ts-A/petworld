const initState = undefined

const userReducer = (state,action)=>{
    switch(action.type){
        case 'ADD_USER':
            // console.log(state,action)
            return action.value
        case 'REMOVE_USER':
            return initState
        // case 'UPDATE_USER':
        //     return [...state,action.value]
        default : 
            return state        
    }
} 

export default userReducer