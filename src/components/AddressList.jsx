import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'

class AddressList extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
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
            
        
        )
    }
}

export default AddressList;
