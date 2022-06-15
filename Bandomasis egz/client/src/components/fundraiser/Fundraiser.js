import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Fundraiser.css";
import Container from "react-bootstrap/Container";
import { useNavigate, useParams } from "react-router-dom";
import logo2 from "../../assets/img/Help.jpg";
import ProgressBar from "../utils/Progress_Bar";
import Button from "react-bootstrap/Button";
import Alert from 'react-bootstrap/Alert';

export default () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [donation, setDonation] = useState({
    name: "",
    comment: "",
    donation: 5,
  });

  const [crowdFund, setCrowdFund] = useState({});
  const [donations, setDonations] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [messages, setMessages] = useState({ message: "", status: "" });

  useEffect(() => {
    axios
      .get("/api/crowdfunder/single/" + id)
      .then((resp) => {
        setIsLoading(false);
        if (resp.data.status === "success") {
          setCrowdFund(resp.data.message);
        } else {
          navigate("/fundraisers");
        }
      })
      .catch(() => {
        setIsLoading(false);
        setMessages({ message: "Server side error", status: "danger" });
      });
  }, []);

  const handleValidation = () => {
    for(let index of Object.keys(donation)) {
        if(index === 'donation' && donation[index] < 1 ) {
            return false
        }
        if(donation[index] === '') {
            return false
        }
    }

    return true
}

  const handleInputChange = (e) => {
    setDonation({
      ...donation,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(donation)
    if(!handleValidation()) {
        setMessages({message: 'Donation form was filled incorrectly', status: 'danger'})
        return false
    }

    // cfForm.UserId = UserId

    axios.post('/api/donations/donate', donation)
    .then(resp => {
        setMessages({message: resp.data.message, status: resp.data.status})
        if(resp.data.status === 'success') {
            setMessages({message: resp.data.message, status: resp.data.status})
        }
    })
    .catch(() => {
        setMessages({message: 'Server error', status: 'danger'})
    })
}


  console.log(crowdFund);
  return (
    <Container>
         {messages.message && (
                <Alert variation={messages.status}>{messages.message}</Alert>
            )}
      {isLoading ? (
        "Loading...."
      ) : (
        <>
          <div className="crowfunder">
            <h1>{crowdFund.headline}</h1>
            <div className="crowdfunderPBar">
              <h5>Fundraiser has raised NEED! out of {crowdFund.cf_goal}$</h5>
              <ProgressBar value={55555} max={crowdFund.cf_goal} />
            </div>
            <div>
              <img className="crowdfunderPicture" src={logo2} alt="goFundMe" />
            </div>
            <div>
              <p className="crowdfundDescription">{crowdFund.description}</p>
            </div>
          </div>
          <div className="donationForm">
            <h2>Leave a Donation!</h2>
            <form className="ui form" onSubmit={handleSubmit}>
              <div className="field">
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  placeholder="Your name"
                  value={donation.name}
                  onChange={handleInputChange}
                  maxlength="10"
                />
                <input
                  type="number"
                  name="donation"
                  className="form-control"
                  placeholder="Amount"
                  value={donation.donation}
                  onChange={handleInputChange}
                  minlength="1"
                  maxlength="4"
                  size="4"
                ></input>
                <div className="dollarSign">$</div>
                <textarea
                  name="comment"
                  rows="3"
                  className="form-control"
                  placeholder="Comment (100 letters)"
                  value={donation.comment}
                  onChange={handleInputChange}
                  maxlength="100"
                />
              </div>
              <Button type="submit" variant="primary">
                Donate
              </Button>
            </form>
          </div>
        </>
      )}
    </Container>
  );
};
