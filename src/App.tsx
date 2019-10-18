import React, { FC, useState } from 'react';
import Avatar from './components/Avatar';
import axios from 'axios';
import "./App.css";

interface HeaderProps {
  name: string;
  toggleAvatar(): void;
  showAvatar: boolean;
}

interface FooterProps {
  companyName: string;
}

// Main Component
const App: FC = () => {
  const content = "This is content";
  const name = "Mike";


  // No state so this won't work!
  let showAvatar = true;
  function toggle() {
    showAvatar = !showAvatar;
  }

  return (
    <div className="App">
      <Header 
        name={name} 
        toggleAvatar={toggle} 
        showAvatar={showAvatar} 
      />
    </div>
  );
};

// Different type of functional component with explicit props
const Header: React.FC<HeaderProps> = (props) => {
  const avatar = props.showAvatar ? <Avatar /> : null;
  return (
    <div style={{ backgroundColor: 'yellow', height: '10vh'}}>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', paddingTop: '3vh' }}>
        <h1 style={{ margin: '0', marginRight: '4px'}}>Hello {props.name}</h1> 
        {avatar}
        <button onClick={props.toggleAvatar}>Toggle Avatar</button>
      </div>
    </div>
  );
};

// Inline function component.
const Content: React.FC<any> = (props) => <div className="content">{props.content}</div>;

// Pure component or state component
class Footer extends React.Component<FooterProps> {

  // private prop
  private name: string;
  
  // constructor
  constructor(props: FooterProps) {
    // super function
    super(props);
    
    // private prop assignment
    this.name = props.companyName;
  }

  // state property
  state = {
    counter: 0
  };

  // component is ready
  componentDidMount = async () => {
    // api calls here
  }

  // api call
  private fetchTodo = () => {
    const url = 'https://jsonplaceholder.typicode.com/todos/15';
    try {
    } catch (error) {
    }
  }

  // increment function
  increment = () => {
    this.setState({
      counter: this.state.counter + 1
    })
  }

  // decrement function
  decrement = () => {
    this.setState({
      counter: this.state.counter - 1
    })
  }

  // render function
  // ONLY needed function
  render() {
    let decrementButton;
    if (this.state.counter > 0) {
      decrementButton = <button onClick={this.decrement}>Decrement</button>;
    }
    return (
      <div className="App-footer">
        <h1>Counter: {this.state.counter}</h1>
        <button onClick={this.increment}>Increment</button>
        {decrementButton}
        <h6>{this.name}</h6>
      </div>
    );
  }
}

export default App;
