import classes from "./Checkout.module.css";
import { useRef, useState } from "react";


const isEmpty = value => value.trim().length === 0;
const isFiveNumbersLength = value => value.length === 5;

const Checkout = (props) => {
  
  const [formInputsValidity,setFormInputsValidity] = useState({
      name: true,
      street: true,
      city: true,
      postalcode: true,
  });

  const nameInputRef = useRef();
  const streetInputRef = useRef();
  const postalnputRef = useRef();
  const cityInputRef = useRef();

  const confirmHandler = (event) => {
    event.preventDefault();

    const enteredName = nameInputRef.current.value;
    const enteredStreet = streetInputRef.current.value;
    const enteredPostal = postalnputRef.current.value;
    const enteredCity = cityInputRef.current.value;

    const enteredNameIsValid = !isEmpty(enteredName);
    const enteredStreetIsValid = !isEmpty(enteredStreet);
    const enteredPostalIsValid = isFiveNumbersLength(enteredPostal);
    const enteredCityIsValid = !isEmpty(enteredCity);

    setFormInputsValidity({
        name: enteredCityIsValid,
        street: enteredStreetIsValid,
        city: enteredCityIsValid,
        postalcode: enteredPostalIsValid
    });

    const fromIsValid = enteredNameIsValid && enteredStreetIsValid && enteredCityIsValid && enteredPostalIsValid;

    if (!fromIsValid) {
        return;
    }

    props.onConfirm({
        name: enteredName,
        street: enteredStreet,
        city: enteredCity,
        postalcode: enteredPostal
    })
  };

  return (
    <form className={classes.form} onSubmit={confirmHandler}>
      <div className={`${classes.control} ${formInputsValidity.name ? '' : classes.invalid}`}>
        <label htmlFor="name">Your Name</label>
        <input type="text" id="name" ref={nameInputRef}/>
        {!formInputsValidity.name && <p>Please enter a valid name</p>}
      </div>
      <div className={`${classes.control} ${formInputsValidity.street ? '' : classes.invalid}`}>
        <label htmlFor="street">Street</label>
        <input type="text" id="street" ref={streetInputRef}/>
        {!formInputsValidity.street && <p>Please enter a valid street</p>}
      </div>
      <div className={`${classes.control} ${formInputsValidity.postalcode ? '' : classes.invalid}`}>
        <label htmlFor="postal">Postal Code</label>
        <input type="text" id="postal" ref={postalnputRef}/>
        {!formInputsValidity.postalcode && <p>Please enter a valid postal code (5 digits)</p>}
      </div>
      <div className={`${classes.control} ${formInputsValidity.city ? '' : classes.invalid}`}>
        <label htmlFor="city">City</label>
        <input type="text" id="city" ref={cityInputRef}/>
        {!formInputsValidity.city && <p>Please enter a valid city</p>}
      </div>
      <div className={classes.control}>
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button className={classes.control}>Confirm</button>
      </div>
    </form>
  );
};

export default Checkout;
