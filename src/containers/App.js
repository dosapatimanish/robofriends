import React from 'react';
import './App.css';
import Scroll from '../components/Scroll'
import Cardlist from '../components/Cardlist';
import Searchbox from '../components/Searchbox';
import ErrorBoundry from '../components/ErrorBoundry';

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
       const {robots, searchfield}=this.state;
        const filteredrobots= robots.filter(robot=>{
            return robot.name.toLowerCase().includes(searchfield.toLowerCase())
        })
        return !robots.length ?
        <h1 className='tc'>Loading</h1> :
             (
                <div className='tc'>
                <h1 className='f1'>RoboFriends</h1>
                <Searchbox onsearch={this.onsearchchange}/>
                <Scroll>
                    <ErrorBoundry>
                        <Cardlist robots={filteredrobots}/>
                    </ErrorBoundry>
                </Scroll>
                
            </div>
            )
        }

           
    }


export default App;
