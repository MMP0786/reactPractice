const initialState =0;

const Inc_dec = (state = initialState, action)=>{

    switch(action.type){
        case "INCREAMENT":
            return state +1
        case "DECREAMENT":
            return  state-1;
        default: return initialState;
    }
}

export default Inc_dec;