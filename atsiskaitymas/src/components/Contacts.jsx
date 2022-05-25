import { Button } from "react-bootstrap";
import React, { useState, useEffect } from "react";
import AddContact from "./AddContact";
import TableList from "./TableList";
import { Card } from "react-bootstrap";
import Demo from "./Demo";

const Contacts = () => {
  const [addContact, setAddContact] = useState(false);
  const [contacts, setContacts] = useState([]);

  const saveContactHandler = (data) => {
    setContacts((prevData) => {
      //svarbu!!!! prevData naujas elementas, kuris kaupia senus duomenis
      return [data, ...prevData];
    });
    setAddContact(false);
  };

  console.log(contacts);
  return (
    <>
      {addContact && <AddContact onSave={saveContactHandler} />}
      <h1 style={{ textAlign: "center", marginTop: "5rem" }}>
        Add new Contact
      </h1>
      <div style={{ textAlign: "center" }}>
        <Button
          className="btn btn-primary m-2"
          onClick={() => setAddContact(true)}
        >
          {" "}
          Add{" "}
        </Button>
        <Button
          className="btn btn-danger"
          onClick={() => {
            setAddContact(false);
          }}
        >
          {" "}
          Cancel{" "}
        </Button>
      </div>
      <Card>
        <Card.Header>
          <h3>Contacts</h3>
        </Card.Header>
        <Card.Body>
          <Demo/>
          <div className="container">
            <div className="row">
              {contacts.length ? contacts.map((c) => 
                <TableList
                  fName={c.fName}
                  lName={c.lName}
                  email={c.email}
                  phone={c.phone}
                />):
                <p>Nera duomenų</p>
                }              
            </div>
          </div>
        </Card.Body>
      </Card>
    </>
  );
};

export default Contacts;
