import React, { useState } from 'react'

const SingleItem = ({ item, removeItem, editItem }) => {
  const [isChecked, setIsChecked] = useState(item.completed)

  return (
    <div className='single-item'>
      <input
        type='checkbox'
        value={item.completed}
        onChange={() => editItem(item.id)}
      />
      <p style={{ textDecoration: item.completed && 'line-through' }}>
        {item.name}
      </p>
      <button className='btn remove-btn' onClick={() => removeItem(item.id)}>
        delete
      </button>
    </div>
  )
}

export default SingleItem
