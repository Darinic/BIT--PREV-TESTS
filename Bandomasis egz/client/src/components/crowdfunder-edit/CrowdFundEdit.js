import Container from 'react-bootstrap/Container';
import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Alert from 'react-bootstrap/Alert';
import { useNavigate, useParams } from 'react-router-dom';
import Button from 'react-bootstrap/Button'
import './crowdfundEdit.css'

// const UserId = 3 //Statinsi userio ID kuri veliau keisime


export default CrowdFundEdit => {
    const { id } = useParams()
    const navigate = useNavigate()

    const [cfForm, setcfForm] = useState({})
    const [isLoading, setIsLoading] = useState(true);
    const [messages, setMessages] = useState({message: '', status: ''})

    useEffect(() => {
        axios
          .get("/api/crowdfunder/single/" + id)
          .then((resp) => {
              console.log(resp)
            setIsLoading(false);
    
            if (resp.data.status === "success") {
              setcfForm(resp.data.message);
            }else {
                navigate('/mycrowdfunders')  
            }

          })
          .catch(() => {
            setIsLoading(false);
            setMessages({message: 'Server side error', status: 'danger'})
          });
      }, []);


    const handleInputChange = (e) => {
        setcfForm({
            ...cfForm, [e.target.name]:e.target.value
        })
    }

    const handleValidation = () => {
        for(let index of Object.keys(cfForm)) {
            if(index === 'cf_goal' && cfForm[index] < 50 ) {
                return false
            }
            if(cfForm[index] === '') {
                return false
            }
        }

        return true
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(cfForm)
        if(!handleValidation()) {
            setMessages({message: 'Crowdfunder form was filled in incorrectly', status: 'danger'})
            return false
        }

        // cfForm.UserId = UserId

        axios.put(`/api/crowdfunder/update/${id}`, cfForm)
        .then(resp => {
            setMessages({message: resp.data.message, status: resp.data.status})
            if(resp.data.status === 'success') {
                setTimeout(() => {
                navigate('/mycrowdfunders')  
                }, 2000)
            }
        })
        .catch(() => {
            setMessages({message: 'Server error', status: 'danger'})
        })
    }

    const statusHandler = () => {
        if(cfForm.approved === 0) {
            return <span style={{color:'red'}}>Pending</span>
        }else {
            return <span style={{color:'green'}}>Approved</span>
        }
    }

    const successHandler = () => {
        if(cfForm.success === 0) {
            return <span style={{color:'red'}}>Still not completed</span>
        }else {
            return  <span style={{color:'green'}}>Fundraiser completed</span>
        }
    }


    return(

        <Container>
                 {isLoading ? (
        "Loading...."
      ) : (
        <div className="crowdFundEdit">
   
        {messages.message && (
                <Alert variation={messages.status}>{messages.message}</Alert>
            )}
            <div className='statuscf' >
            <h2 style={{color:'black'}}>Current Status of your crowdfunder</h2>
            <h5>Status: <strong>{statusHandler()}</strong></h5>
            <h5>Finished: <strong>{successHandler()}</strong></h5>
            <h5>Completion: <strong>out of {cfForm.cf_goal}$ was gathered: WILL NEED PROPS HERE</strong></h5>
        </div>
        <h1>Edit your crowdfunder</h1> 
        <form className='ui form' onSubmit={handleSubmit}>
        <div className="field mb-3">
            <label className="form-label">Headline</label>
            <input type="text" name="headline" className="form-control" placeholder="Enter your Headline" value={cfForm.headline} onChange={handleInputChange} />
        </div>
        {/* <div className="field mb-3">
            <label className="form-label">Crowdfunding Image</label>
            <input type="file" name="cf_image" className="form-control" placeholder="upload your image" value={cfForm.cf_image} onChange={(e) => setcfForm({
            ...cfForm, [e.target.name]:e.target.files[0] }) } />
        </div> */}
        <div className="field mb-3">
            <label className="form-label">Description</label>
            <textarea className="form-control" rows="3" name="description" value={cfForm.description} onChange={handleInputChange}></textarea>
        </div>
        <div className="field mb-3">
            <label className="form-label">Crowdfunding goal(in dollars $) </label>
            <input type="number" name="cf_goal" className="form-control" value={cfForm.cf_goal} min="0" onChange={handleInputChange}/>
        </div>

        <Button type='submit' variant='primary'>Update a crowdfunder</Button>
        </form>
    </div>
      )}
    </Container>
    )
}