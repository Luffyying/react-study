import React,{Component} from 'react';

// import logo from './logo.svg';
import './App.css';
import MyCom from './components/MyCom.js.js'

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

class App extends Component{
  constructor(props){
    super(props)
    this.state = {config:0}
    this.toChange = this.toChange.bind(this)
  }
  toChange(){
    //this表示当前实例
    // console.log(this)
    // this.state.config =9
    this.setState(state =>({
      config:'value'
    }))
    
  }
  render(){
    // return React.createElement('div',{className:"list"},'like')
    return (
      <div className="test">
        <header>hello react{this.state.config}</header>
        <button onClick={this.toChange}>click me to change</button>
        <MyCom config={this.state.config}></MyCom>
      </div>
    )
  }
}

export default App;
