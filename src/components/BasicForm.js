import { useReducer, useEffect } from "react";

let getvalue=(value, action)=>{
  switch(action.type){
    case 'NAME': return {
      ...value,
      value1: action.value,
      value1_1: action.value.length>3
    }
    case 'LASTNAME': return{
      ...value,
     value2: action.value,
     value2_2: action.value.length>3
    }
    case 'EMAIL': return{
      ...value,
      value3: action.value,
      value3_3: action.value.includes('@.')
    }
    case 'BTN': return{
      ...value,
      button: action.value
    }
    case 'BLUR': return{
      ...value,
     proverka1: action.value,
     proverka2: action.value,
     proverka3: action.value,
    }
    case 'BLUR1': return{
      ...value,
      proverka1: action.value,
      proverka1_1: !value.value1_1 && action.value
    }
    case 'BLUR2': return{
      ...value,
      proverka2: action.value,
      proverka2_2: !value.value2_2 && action.value
    }
    case 'BLUR3': return{
      ...value,
      proverka3: action.value,
      proverka3_3: !value.value3_3 && action.value
    }
    default: return action.value
  }
}
const BasicForm = () => {
  let[allvalue, setallvalue]=useReducer(getvalue, 
    {
      value1: '',
      value2: '',
      value3: '',
      value1_1: false,
      value2_2: false,
      value3_3: false,
      button: false,
      proverka1: false,
      proverka2: false,
      proverka3: false,
      proverka1_1: false,
      proverka2_2: false,
      proverka3_3: false,
    },
    )
   
    function value(type, event){
      setallvalue({type: type, value: event.target.value})
    }
    
    useEffect(() => { 
        if(allvalue.value1_1 && allvalue.value2_2 && allvalue.value3_3) {
        setallvalue({type: 'BTN', value: true})
      } else {
        setallvalue({type: 'BTN', value: false})
      }
    }, [allvalue.value1_1, allvalue.value2_2, allvalue.value3_3])

    const Blur = (type) => {
      setallvalue({type: `${type}`, value: true})
    }

    function submit(event){
      event.preventDefault();
      setallvalue({type: 'BLUR', value: true})
      if(!allvalue.value1_1 && !allvalue.value2_2 && !allvalue.value3_3) {
        return
      }
      setallvalue({type: 'BLUR', value: false})
    }

  const nameInputClasses =  allvalue.proverka1_1 ? 'form-control invalid' : 'form-control'
  const lastnameInputClasses =  allvalue.proverka2_2 ? 'form-control invalid' : 'form-control'
  const emailInputClasses =  allvalue.proverka3_3 ? 'form-control invalid' : 'form-control'

  return (
    <form onSubmit={submit}>
      <div className='control-group' >
        <div className={nameInputClasses}>
          <label htmlFor='name'>First Name</label>
          <input type='text' id='name' onChange={(e)=>value('NAME',e)} value={allvalue.value1} onBlur={()=>Blur('BLUR1')}/>
          {allvalue.proverka1_1 && <p>Name must not be empty</p>}
        </div>
        <div className={lastnameInputClasses}>
          <label htmlFor='name'>Last Name</label>
          <input type='text' id='name' onChange={(e)=>value('LASTNAME',e)} value={allvalue.value2} onBlur={()=>Blur('BLUR2')}/>
          {allvalue.proverka2_2 && <p>Lastname must not be empty</p>}
        </div>
      </div>
      <div className={emailInputClasses}>
        <label htmlFor='name'>E-Mail Address</label>
        <input type='text' id='name' onChange={(e)=>value('EMAIL',e)} value={allvalue.value3} onBlur={()=>Blur('BLUR3')}/>
        {allvalue.proverka3_3 && <p>Email must not be empty</p>}
      </div>
      <div className='form-actions'>
        <button type="submit" disabled={!allvalue.button}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
