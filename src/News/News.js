import {Component} from 'react';  

class News extends Component{
  constructor(props){
    super(props)
  }
  render(){
      return (
        null
    );
  }
  componentWillMount(){
    fetch("https://newsapi.org/v2/top-headlines?country=us&apiKey=8bee69b56ac2453a84dbf56db00afb56")
    .then(res => res.json())
    .then(result => {
      this.props.addNews(result.articles)
    })
    .catch(
      function(err){
        console.log(err)
    })
  }
}

export default News;