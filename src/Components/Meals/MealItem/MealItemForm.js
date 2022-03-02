import classes from './MealItemForm.module.css'
import { useRef, useState } from 'react'
import Input from '../../UI/Input'
const MealItemForm = (props) => {
  const [amountIsValid, setAmountIsValid] = useState(true)
  const amountInputRef = useRef()
  const submitHandler = (event) => {
    event.preventDefault()
    const enteredAmount = amountInputRef.current.value
    const enteredAmountNumber = +enteredAmount
    if (enteredAmountNumber < 1 || enteredAmountNumber > 5) {
      setAmountIsValid(false)
      return
    }
    props.onAddToCart(enteredAmountNumber)
  }
  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
        ref={amountInputRef}
        label='Amount'
        input={{
          id: 'amount_' + props.id,
          type: 'number',
          min: '1',
          max: '5',
          step: '1',
          defaultValue: '1',
        }}
      />
      <button> + Add</button>
      {!amountIsValid && <p> PLEASE ENTER A VALID AMOUNT</p>}
    </form>
  )
}
export default MealItemForm
