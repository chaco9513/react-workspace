const initalState = {
  login: { id: "", pwd: "" },
  register: { id: "", pwd: "", name: "", addr: "" },
  data: null,
  loadding : false,
  error : null
};
export const initalLogin = {
    login : {id:"", pwd:""}
}
export const initalReg = {id :"",pwd:"", name:"",addr:""}

export const initalData = {data : null}


// {type:"Change_Input", value:e.target.value, name: e.target.name, form:"login"}
const reducer = (state, action) => {
    console.log(action);
    switch(action.type){
        case "Login_Input" : 
            return {...state, [action.name] : action.value};

        case "Reg_Input" :
            return { ...state, [action.name]: action.value };

        case "LIST" : 
            return {...state, data : action.data };
            /*
            state = {
                login: { id: "", pwd: "" },
                register: { id: "", pwd: "", name: "", addr: "" },
                data: null,
            };
            */

        case "Change_Input" : return { ...state, 
            [action.form] : { ...state[action.form], [action.name] : action.value} };
        case "LOADING" : return { ...state , loadding :true,error:null};
        case "FINISHED" : return { ...state, loadding: false, error: null };
        case "ERROR" : return { ...state, loadding: false, error: action.msg };
        
        default : return state;
    }
    // return state;
}
export {reducer, initalState}