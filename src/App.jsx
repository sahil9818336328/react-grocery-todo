import { nanoid } from 'nanoid'
import Form from './Form'
import { useState } from 'react'
import Items from './Items'
import { ToastContainer, toast } from 'react-toastify'

const setLocaleStorage = (items) => {
  localStorage.setItem('list', JSON.stringify(items))
}

const getLocalStorage = () => {
  let list = localStorage.getItem('list')
  if (list) {
    list = JSON.parse(list)
  } else {
    list = []
  }

  return list
}

const App = () => {
  const [items, setItems] = useState(getLocalStorage())

  const addItem = (itemName) => {
    const newItem = {
      name: itemName,
      completed: false,
      id: nanoid(),
    }

    const newItems = [...items, newItem]
    setItems(newItems)
    setLocaleStorage(newItems)
    toast.success(`${itemName} added to the list`)
  }

  const removeItem = (itemId) => {
    const newItems = items.filter((item) => item.id !== itemId)
    setItems(newItems)
    setLocaleStorage(newItems)
    toast.success('Item removed from the list')
  }

  const editItem = (itemId) => {
    const newItems = items.map((item) => {
      if (item.id === itemId) {
        const newItem = { ...item, completed: !item.completed }

        return newItem
      }

      return item
    })

    setItems(newItems)
    setLocaleStorage(newItems)
  }

  return (
    <section className='section-center'>
      <Form addItem={addItem} />
      <Items items={items} removeItem={removeItem} editItem={editItem} />
      <ToastContainer />
    </section>
  )
}

export default App
