import React , {Component} from 'react';
import './DisplayerItm.css'


class Item extends Component{
    render(){
        return(
            <div>
                <p className = "title">
                    {this.props.item.title}
                </p> 
                <p className = "utitle">
                    -{this.props.item.author}
                </p> 
                <img src={this.props.item.urlToImage} />
                <p className = 'text t1'>
                    {this.props.item.description}
                </p>
                <p className = 'text'>
                    {this.props.item.content}
                </p>
            </div>
        )
    }
}

export default Item;