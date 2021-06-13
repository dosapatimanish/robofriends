import React from 'react';
import './App.css';
import Scroll from './Scroll'
import Cardlist from './Cardlist';
import Searchbox from './Searchbox';

import 'tachyons';

class App extends React.Component{
    constructor(){
        super()
    this.state={
    robots: [],
    searchfield:''
        }
    }
    onsearchchange=(event)=>{
        this.setState({searchfield: event.target.value})
        
        
    }
    componentDidMount()
    {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then( response => response.json())
        .then(users =>this.setState({robots:users}))
    }
    render(){
        const filteredrobots= this.state.robots.filter(robots=>{
            return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
        })
        if(this.state.robots.length===0)
        return <h1 className='tc'>Loading</h1>
        else{
            return (
                <div className='tc'>
                <h1 className='f1'>RoboFriends</h1>
                <Searchbox onsearch={this.onsearchchange}/>
                <Scroll>
                <Cardlist robots={filteredrobots}/>
                </Scroll>
                
            </div>
            );
        }

           
    }
}

export default App;
