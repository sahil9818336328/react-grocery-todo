import React, { useState } from 'react'
import { toast } from 'react-toastify'

const Form = ({ addItem }) => {
  const [itemName, setItemName] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!itemName) {
      toast.error('please provide a value')
      return
    }
    addItem(itemName)
    setItemName('')
  }

  return (
    <form onSubmit={handleSubmit}>
      <h4>Grocery bud</h4>
      <div className='form-control'>
        <input
          type='text'
          value={itemName}
          onChange={(e) => setItemName(e.target.value)}
          className='form-input'
        />
        <button type='submit' className='btn'>
          add item
        </button>
      </div>
    </form>
  )
}

export default Form
