const TableList = (props) => {
    return(
        <>
        {/* <Table striped bordered hover>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Last Name</th>
                    <th>Email Address</th>
                    <th>Phone number</th>
                </tr>
            </thead>
            <tbody>
                {props.Contacts.map((contact, i) => {
                    return(
                  <Contact 
                  key={i}
                  fName={contact.fName}
                  lName={contact.lName}
                  email={contact.email}
                  phone={contact.phone}
                  />  
                )})}
            </tbody>
        </Table> */}


        <div className='card' style={{width:'20rem'}}>
            <div className='card-body'>
                <h5 className='card-title'>{props.fName} {props.lName}</h5>
                <p className="card-text"></p>
                <ul>
                    <li>Email: {props.email}</li>
                    <li>Phone number: {props.phone}</li>
                </ul>
            </div>
        </div>
        </>
    )
}

export default TableList