import React from "react";
import CardList from '../components/CardList';
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";
import LoadingBar from "../components/LoadingBar";
import './App.css';
import ErrorBoundry from "../components/ErrorBoundry";

class App extends React.Component {
    constructor(){
        super();
        this.state = {
            "robots": [],
            "searchText": ""
        }
    }

    onSearchChange = (event) => {
        this.setState({searchText: event.target.value});
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users').then(Response => Response.json()).then(users => this.setState({robots: users}));
    }

    render(){
        //destructuring
        const {robots, searchText} = this.state;
        const filteredRobots = robots.filter(robot => {
            return (
                robot.name.toLowerCase().includes(searchText.toLowerCase())
            )
        }
        );

        //ternanry condition
        return !robots.length?
            <LoadingBar />:
            (
                <div className="tc">
                    <h1 className="f1">Robots</h1>
                    <SearchBox searchChange={this.onSearchChange}/>
                    <ErrorBoundry>
                        <Scroll>
                            <CardList robots={filteredRobots} />
                        </Scroll>
                    </ErrorBoundry>
                </div>
            )
        }
        
    }

    //HOW APP WORKS:
    //the input listens to changes in the searchbox
    //once a change is made it calls the "onSearchChange" method
    //by using the "setState" function inside this method, 
    //it notifies react that a change has been made and it needs to re-render the DOM
    //NOTE: it doesn't re-render the entire DOM, only the component that's state has been changed (this is why react is fast)
    //so then render() is called
    //the robots are filtered in a new array and passed to the CardList component


export default App;