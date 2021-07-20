import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

class CreateAddress extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            email: ""
        }
    }

    // click = () => {
    //     this.props.createAddress({
    //         name: this.state.name,
    //         email: this.state.email
    //     })
    // }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form was submitted");
        this.props.createAddressCallback({
            name: this.state.name,
            email: this.state.email
        })
        

    }


    render() {
        console.log("CreateAddress render function is running")
        return (
            <Form 
            onSubmit={this.handleSubmit}
            >
                <Form.Group as={Row} className="mb-4" controlId="formHorizontalName">
                    <Form.Label column sm={2}>
                        Name
                    </Form.Label>
                    <Col sm={10}>
                        <Form.Control 
                            type="text" 
                            placeholder="Enter full name here"
                            value={this.state.name}
                            onChange={
                                // this.handleChange
                                (e) => this.setState({
                                    name: e.target.value
                                })
                            } 
                        />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-4" controlId="formHorizontalEmail">
                    <Form.Label column sm={2}>
                        Email
                    </Form.Label>
                    <Col sm={10}>
                        <Form.Control 
                            type="email" 
                            placeholder="Enter email here"
                            value={this.state.email}
                            onChange={
                                // this.handleChange
                                (e) => this.setState({
                                    email: e.target.value
                                })
                            } 
                        />
                    </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3">
                    <Col sm={{ span: 10, offset: 2 }}>
                        <Button 
                            // onClick={this.click} 
                            type="submit"
                        >Create Address
                        </Button>
                    </Col>
                </Form.Group>
            </Form>
        )
    }
}

export default CreateAddress;
