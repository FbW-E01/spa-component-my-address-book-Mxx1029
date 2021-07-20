import React from "react";
import AddressList from "./components/AddressList.jsx";
import CreateAddress from "./components/CreateAddress.jsx";
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
            addresses: defaultAddresses
        }
    }

    createAddress = (address)  => {
        
        this.setState({
            addresses: [...this.state.addresses, address]
        });
        const json = JSON.stringify(this.state.addresses);
        localStorage.setItem("addressList", json);
    }

    

    render() {
        return (
            <div className="w-75 m-auto">
                <h1 className="mt-5 mb-5">
                    Maxie's address book
                </h1>
                <CreateAddress createAddressCallback={this.createAddress}/>

                {this.state.addresses.length > 3 ? 
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