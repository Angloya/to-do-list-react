import React, {Component} from 'react'
import Header from './components/Header'
import Home from './components/Home'
import ToDoList from './components/ToDoList'
import About from './components/About'
import {BrowserRouter, Route, Switch} from 'react-router-dom'

class App extends Component {
  constructor(props) {
    super(props)
    var value = JSON.parse(localStorage.getItem('items'))
    if (value) {
      this.state = {
        items: value
      }
    } else {
      this.state = {
        items: []
      }
    }
  }
  prevItemId = -1
  saveStateWithLocalStorage(value) {
    localStorage.setItem('items', JSON.stringify(value))
  }
  handleAddItem = (name, text) => {
    this.setState( prevState => {
      return {
        items: [
          ...prevState.items,
          {
            name,
            text,
            id: this.prevItemId += 1,
            isItemDone: false
          }
        ]
      }
    })
    this.saveStateWithLocalStorage(this.state.items)
  }
  handleDoneItem = (id) => {
    const newItems = [...this.state.items]
    newItems[id].isItemDone = !newItems[id].isItemDone
    this.setState({
      items: newItems
    })
    this.saveStateWithLocalStorage(this.state.items)
  }
  handleRemoveItem = (id) => {
    this.setState( prevState => {
      return {
        items: prevState.items.filter(p => p.id !== id)
      }
    })
    this.saveStateWithLocalStorage(this.state.items)
  }
  handleEditItem = (name, text, id) => {
    const prevState = [...this.state.items]
    prevState[id].name =  name
    prevState[id].text =  text
    this.setState({
        items: prevState
    })
    this.saveStateWithLocalStorage(this.state.items)
  }
  render () {
    return (
      <BrowserRouter>
        <div className="App">
          <Header/>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/list"
              render={()=>
              <ToDoList
                items={this.state.items}
                doneItem={this.handleDoneItem}
                removeItem={this.handleRemoveItem}
                addItem={this.handleAddItem}
                editItem={this.handleEditItem}/>}/>
            <Route path="/about" component={About}/>
            </Switch>
        </div>
      </BrowserRouter>
    )
  }
};

export default App;