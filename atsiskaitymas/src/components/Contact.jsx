import React from "react";

export default function Contact(props) {
  
  return (
    <>
      <tr>
          <td>{props.fName}</td>
          <td>{props.lName}</td>
          <td>{props.email}</td>
          <td>{props.phone}</td>
      </tr>
    </>
  );
}