import React from "react";
import AddressList from "./components/AddressList.jsx";
import CreateAddress from "./components/CreateAddress.jsx";
import './App.css';
// import { useState } from "react";


class App extends React.Component {
    constructor(props) {
        super(props);
        const defaultAddresses = [
            { name: "Arabella Kwame", email: "arabella@home.org" },
            { name: "Pray Tell", email: "pray@work.org" },
            { name: "Clay Hannah", email: "clay@vice.org" },
        ]
        this.state = {
            isLoading: true,
            addresses: defaultAddresses
        }
    }

    createAddress = (address)  => {
        const newAddresses = [ ...this.state.addresses, address ]
        // make it asynchronous
        const json = JSON.stringify(newAddresses);
        localStorage.setItem("addressList", json);
        this.setState({
            addresses: newAddresses
        });
    }

    componentDidMount() {

        setTimeout(() => {
            const json = localStorage.getItem("addressList");
            const currentAddresses = JSON.parse(json);
            console.log(currentAddresses);
            this.setState({ 
                isLoading : false, addresses: currentAddresses });
        }, 3000)

    }

    componentWillUnmount() {
        // not needed, only when you need to clear something that keeps on happening, like a interval or a timer etc
    }

    render() {
        return (
            <div className="w-75 m-auto">
                <h1 className="mt-5 mb-5">
                    Maxie's address book
                </h1>
                <CreateAddress createAddressCallback={this.createAddress}/>

                {!this.state.isLoading ? 
                    <AddressList addresses={this.state.addresses}
                    // currentAddresses={}
                    /> 
                : 
                    <p>Loading <i className="fas fa-spinner spinner"></i></p>  
                } 
                
            </div>
        )
    }
    
}

export default App;