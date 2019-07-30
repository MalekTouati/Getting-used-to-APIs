import React , {Component} from 'react';
import './App.css';
import News from "./News/News";
import Display from './Displayer';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
        news : []
    }
    this.addNews=this.addNews.bind(this)
  }
  render(){
    return (
      <div>
        <p className = "bigTitle">US Headlines</p>
        <News tstate = {this.state.news} addNews = {this.addNews}></News>
        <Display displayedStuff = {this.state.news}></Display>
      </div>
    );
  }
  addNews(newItem){
    this.setState({news : newItem});
  }
}

export default App;
