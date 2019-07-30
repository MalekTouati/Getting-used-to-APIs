import React , {Component} from 'react';
import Item from './DisplayerItem'
import "./App.css"

class Display extends Component{
    render(){
        //console.log('test' , this.props.displayedStuff[0].map(element => element))
        
        if (this.props.displayedStuff.length != 0){
            return(
                <div>
                    {this.props.displayedStuff.map(element => {
                        return <Item item = {element}/>//<h2>{element.author}</h2>
                    })}
                </div>
            )
        }
        else{
            return(
                <center>
                    <h1>
                        Fetching  data from API
                    </h1>
                </center>
            ) 
        }
        
    }
}

export default Display;