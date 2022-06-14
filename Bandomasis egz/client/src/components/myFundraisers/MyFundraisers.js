import React, { useState, useEffect } from "react";
import axios from "axios";
import Container from "react-bootstrap/Container";
import CfListBox from "../CfListBox/CfListBox";
import Alert  from 'react-bootstrap/Alert';
import './MyFundraisers.css';


export default (props) => {
    const [crowdFund, setCrowdFund] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [messages, setMessages] = useState({ message: "", status: "" });
  
    useEffect(() => {
      axios
        .get(`/api/crowdfunder/user/${props.UserId}`)
        .then((resp) => {
            console.log(resp)
          setIsLoading(false);
  
          if (resp.data.status === "success") {
            setCrowdFund(resp.data.message);
            console.log(resp.data.message)
          }
        })
        .catch(() => {
          setIsLoading(false);
          setMessages({message: 'Server error', status: 'danger'})
        });
    }, []);

    const List = () => {
        return crowdFund.map((value, index) => {
            return (
              <CfListBox
                key={index}
                setMessages={setMessages}
                crowdfunder={value}
                link='/mycrowdfunder/'
              />
            );
          }
        );
      };


    return (
        <Container>
          <h1 className="h1header">My Fundraisers</h1>
          {messages.message && (
                <Alert variation={messages.status}>{messages.message}</Alert>
            )}
          {isLoading ? (
            "Loading"
          ) : (
              <>
            <div className="row">
                <List />
            </div>
            </>
          )}
        </Container>
      );
    };