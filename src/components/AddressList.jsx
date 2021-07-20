import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'

class AddressList extends React.Component {
    constructor(props) {
        super(props);

        
    }

    componentDidMount() {

        setTimeout(() => {
            const json = localStorage.getItem("addressList");
            const currentAddresses = JSON.parse(json);
            return currentAddresses;
        }, 3000)

    }

    componentWillUnmount() {

    }

    render() {
        return (
            <>
            <table>
                <tbody>
                    <tr>
                        <th>Full name</th>
                        <th>Email</th>
                    </tr>
                    {this.props.addresses.map((address, index) => {
                        return (
                            <tr>
                                <td key={index}>
                                    {address.name}
                                </td>
                                <tr key={index}>
                                    {address.email}
                                </tr>
                            </tr>
                            
                        )
                    })}                    
                </tbody>
            </table>
            <div> 
                <p>{localStorage.getItem("addressList")}</p>
                <p>{JSON.stringify(this.props.addresses)}</p>
                <ul>
                    {this.currentAddresses.map((currAddress) => {
                        <>
                        <li>{currAddress.name}</li>
                        <li>{currAddress.email}</li>
                        </>
                    })}
                </ul>
                
            </div>
            </>
        )
    }
}

export default AddressList;
