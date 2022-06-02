import { useInputReducer } from "./useInputReducer";

export const BasicFormReducer=()=>{

    const {
        value: value1,
        proverka: allproverka1,
        proverka2: proverka1,
        valueChangeHandler: valueChangeHandler1,
        inputBlurHandler: inputBlurHandler1,
        btn: btn1
    } = useInputReducer((value)=>value.trim() !== '');

    const {
        value: value2,
        proverka: allproverka2,
        proverka2: proverka2,
        valueChangeHandler: valueChangeHandler2,
        inputBlurHandler: inputBlurHandler2,
        btn: btn2
    } = useInputReducer((value)=>value.trim() !== '');

    const {
        value: value3,
        proverka: allproverka3,
        proverka2: proverka3,
        valueChangeHandler: valueChangeHandler3,
        inputBlurHandler: inputBlurHandler3,
        btn: btn3
    } = useInputReducer((value)=>value.includes('@'));
  

    let formIsValid = false;

        if (allproverka3 && allproverka2 && allproverka1) {
          formIsValid = true;
        }

    const formSubmissionHandler = (event) => {
        event.preventDefault();
        btn1(); btn2(); btn3()
    };
      const nameInputClasses = proverka1
        ? "form-control invalid"
        : "form-control ";
      const lastnameInputClasses = proverka2
        ? "form-control invalid"
        : "form-control ";
      const emailInputClasses = proverka3
        ? "form-control invalid"
        : "form-control ";
  
    return (
        <form onSubmit={formSubmissionHandler} className='box'>
          <div className='control-group' >
            <div className={nameInputClasses}>
              <label htmlFor='name'>First Name</label>
              <input type='text' id='name' onChange={valueChangeHandler1} value={value1} onBlur={inputBlurHandler1}/>
              {proverka1 && <p>Name must not be empty</p>}
            </div>
            <div className={lastnameInputClasses}>
              <label htmlFor='name'>Last Name</label>
              <input type='text' id='name' onChange={valueChangeHandler2} value={value2} onBlur={inputBlurHandler2}/>
              {proverka2 && <p>Lastname must not be empty</p>}
            </div>
          </div>
          <div className={emailInputClasses}>
            <label htmlFor='name'>E-Mail Address</label>
            <input type='text' id='name' onChange={valueChangeHandler3} value={value3} onBlur={inputBlurHandler3}/>
             {proverka3 && <p>Email must not be empty</p>}
          </div>
          <div className='form-actions'>
            <button type="submit" disabled={!formIsValid}>Submit</button>
          </div>
        </form>
      );
}