import Header from './Header';
import Footer from './Footer';
import Content3 from './Content3';
import { useState, useEffect } from 'react';
import Additem from './Additem';
import SearchItem from './SearchItem';
import apiRequest from './apiRequest';
function App() {
  const API_URL = "  http://localhost:3500/items"

  const [items, setItems] = useState([])

  const [setItem, setNewItems] = useState('')

  const [search, setSearch] = useState('')

  const [fetchError, setFetchError] = useState(null)

  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchItems = async () => {

      try {
        const response = await fetch(API_URL)
        if (!response.ok) throw Error("data not recieved")
        const listItems = await response.json()
        setItems(listItems)
      } catch (error) {
        setFetchError(error.message)
      } finally {
        setIsLoading(false)
      }

    }
    setTimeout(() => {
      (async () => await fetchItems())()

    }, 2000);
  }, [])

  const addItem = async (item) => {
    const id = items.length ? items[items.length - 1].id + 1 : 1
    const addNewItem = { id, checked: false, item }
    const itemsList = [...items, addNewItem]
    setItems(itemsList)

    const postOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(addNewItem)
    }

    const result = await apiRequest(API_URL, postOptions)
    if (result) setFetchError(result)
  }



  const handleCheck = async (id) => {
    const itemslist = items.map((item) => item.id === id ? { ...item, checked: !item.checked } : item)
    setItems(itemslist)

    const myItem = itemslist.filter((item) => item.id === id)

    const UpdaeOptions = {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ checked: myItem[0].checked })
    }
    const reqUrl = `${API_URL}/${id}`
    const result = await apiRequest(reqUrl, UpdaeOptions)
    if (result) setFetchError(result)



  }
  const handleDelete = async (id) => {
    const deleteitems = items.filter((item) => item.id !== id)
    setItems(deleteitems)
    const myItemmes = items.filter((item) => item.id === id)
    const UpdateOptions = {
      method: 'DELETE'
    }
    const reqUrl = `${API_URL}/${id}`
    const result = await apiRequest(reqUrl, UpdateOptions)
    if (result) setFetchError(result)
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    if (!setItem) return;
    addItem(setItem)
    setNewItems('')
  }
  return (
    <>
      <div className="App">
        <Header title={"To Do List"} />
        <Additem
          setItem={setItem}
          setNewItems={setNewItems}
          handleSubmit={handleSubmit}

        />
        <SearchItem
          search={search}
          setSearch={setSearch}
        />


        <main>
          {isLoading && <p>Loading items...</p>}
          {fetchError && <p>{`ERROR:${fetchError}`}</p>}
          {!isLoading && !fetchError &&
            <Content3
              items={items.filter((item) => ((item.item).toLowerCase()).includes(search.toLowerCase()))}
              handleCheck={handleCheck}
              handleDelete={handleDelete}
            />}
        </main>
        <Footer
          lists={items.length}
        />
      </div>
    </>
  );
}

export default App;
