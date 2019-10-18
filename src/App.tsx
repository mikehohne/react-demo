import React, { FC } from 'react';
import Avatar from './components/Avatar';
import axios from 'axios';
import "./App.css";

interface HeaderProps {
  name: string;
}

interface FooterProps {
  companyName: string;
}

interface AppProps {
  content: string;
  name: string;
}

const App: FC = () => {
  const content = "This is content";
  const name = "Mike";
  return (
    <div className="App">
      <Header name={name} />
      <Content content={content} />
      <Footer companyName={'Schedulicity'} />
    </div>
  );
};

const Header: React.FC<HeaderProps> = (props) => {
  return (
    <div style={{ backgroundColor: 'yellow', height: '10vh'}}>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', paddingTop: '3vh' }}>
        <h1 style={{ margin: '0', marginRight: '4px'}}>Hello {props.name}</h1> 
        <Avatar />
      </div>
    </div>
  );
};

const Content: React.FC<any> = (props: any) => <div className="content">{props.content}</div>;

class Footer extends React.Component<FooterProps> {

  private name: string;
  
  constructor(props: FooterProps) {
    super(props);
    this.name = props.companyName;
  }

  state = {
    counter: 0
  };

  componentDidMount = async () => {
    const result = await this.fetchTodo();
    console.log(result.data);
  }


  fetchTodo = () => {
    try {
      return axios.get('https://jsonplaceholder.typicode.com/todos/15');
    } catch (error) {
      throw error;
    }
  }

  increment = () => {
    this.setState({
      counter: this.state.counter + 1
    })
  }

  decrement = () => {
    this.setState({
      counter: this.state.counter - 1
    })
  }

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
