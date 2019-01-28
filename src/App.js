import React, {Component} from 'react'
import Header from './components/Header'
import Home from './components/Home'
import ToDoList from './components/ToDoList'
import About from './components/About'
import {BrowserRouter, Route, Switch} from 'react-router-dom'

class App extends Component {
  state = {
    items: [
    ]
  }
  prevItemId = 0
  handleAddItem = (name, text) => {
    this.setState( prevState => {
      return {
        items: [
          ...prevState.items,
          {
            name,
            text,
            id: this.prevItemId += 1
          }
        ]
      };
    });
  }

  handleRemoveItem = (id) => {
    this.setState( prevState => {
      return {
        items: prevState.items.filter(p => p.id !== id)
      }
    })
  }
  render () {
    return (
      <BrowserRouter>
        <div className="App">
          <Header/>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/list"   render={()=><ToDoList items={this.state.items} removeItem={this.handleRemoveItem} addItem={this.handleAddItem}/>}/>
            <Route path="/about" component={About}/>
            </Switch>
        </div>
      </BrowserRouter>
    )
  }
};

export default App;