import { useReducer } from "react"

let getvalue = (state, action) =>{
    switch(action.type){
        case 'VALUE': return{
            ...state,
            value: action.value,
            
        }
        case 'PROVERKA': return{
            ...state,
            proverka: action.value,
        }
        case 'BTN': return{
            value: '',
        }
        default: return state;
    }
}
export const useInputReducer=(value)=>{
    const[allvalue, setallvalue]=useReducer(getvalue,{
        value: '',
        proverka: false,
    })
    let allproverka=value(allvalue.value)
    const hasError = !allproverka && allvalue.proverka
    const valueChangeHandler = (event) => {
        setallvalue({type: 'VALUE', value: event.target.value})
    }
    const inputBlurHandler = () => {
        setallvalue({type: 'PROVERKA', value: true})
    }
    const btn=()=>{
        setallvalue({type: 'BTN'})
    }
    return{
        value: allvalue.value,
        proverka: allproverka,
        proverka2: hasError,
        valueChangeHandler,
        inputBlurHandler,
        btn,
    }
}