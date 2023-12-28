const initialState = 0;

const chanageTheNumber = (state = initialState, action)=>{
    switch(action.type){
        case "INCREMENT": {
            console.log("jjj")
            return state +1;
        }    
        case "DECREMENT": return state -1;
        default: return state;
    }
}
export default chanageTheNumber;