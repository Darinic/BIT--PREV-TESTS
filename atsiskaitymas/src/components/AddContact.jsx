import React, { useState } from "react";
import { Card, Form, Button, FloatingLabel } from "react-bootstrap";

function AddContact(props) {
    const [items, setItems] = useState({
      fName: "",
      lName: "",
      email: "",
      phone: "",
    })

    const handleChange = (e) => {
        setItems({
          ...items,
          [e.target.name]: e.target.value,
        });
      };

      const submitHandler = (event) => {
        event.preventDefault()
        props.onSave(items)
      }
      // const updateHandler = () => {
      //   services.updateExpense(id, items)
      //   navigate("/")
      // }
    return (
        <>
        <div className="container">
          <Card>
            <Card.Header>Add a new Contact</Card.Header>
            <Card.Body style={{textAlign:'center'}}>
            {/* {errors && Object.keys(errors).map(keyName=>(<Error error={errors[keyName]} />))} */}
              <Form style={{width:'20rem'}} onSubmit={submitHandler}>
                <Form.Group className="mb-3">
                  <Form.Control
                    as="textarea"
                    placeholder="Name"
                    name="fName"
                    value={items.fName}
                    onChange={handleChange}
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <FloatingLabel></FloatingLabel>
                  <Form.Control
                       as="textarea"
                       placeholder="Last Name"
                       name="lName"
                       value={items.lName}
                       onChange={handleChange}
                       />                  
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Control
                    as="textarea"
                    placeholder="Email"
                    name="email"
                    value={items.email}
                    onChange={handleChange}
                    />                  
                </Form.Group>
                <Form.Group>
                  <Form.Control
                      as="textarea"
                      placeholder="Phone Number"
                      name="phone"
                      value={items.phone}
                      onChange={handleChange}
                  ></Form.Control>
                </Form.Group>
                <Button type="submit" className="mt-3">Save</Button>
              </Form>
            </Card.Body>
          </Card>
          </div>
        </>
      );
    }
    export default AddContact