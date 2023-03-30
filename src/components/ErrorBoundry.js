import React from "react";

class ErrorBoundry extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            hasError: false
        }
    }

    static getDerivedStateFromError(error) {
        // Update state so the next render will show the fallback UI.
        return { hasError: true };
    }

    //another approach rather than the method above
    // componentDidCatch(error, info) {
    //     this.setState({hasError: true});
    // }
    

    render(){
        if(this.state.hasError){
            return (
                <div className="d-flex justify-content-center align-items-center" style={{height: '450px'}}>
                    <h2>Oops something went wrong</h2>
                </div>
            )
        }else if(this.props.children.props.children.props.robots.length === 0){
            return (
                <div className="d-flex justify-content-center align-items-center" style={{height: '450px'}}>
                    <h2>No robots found</h2>
                </div>
            )
        }else{
            return this.props.children;
        }
    }
}

export default ErrorBoundry;