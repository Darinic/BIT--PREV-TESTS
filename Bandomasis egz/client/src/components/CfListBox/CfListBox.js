import React, {useState, useEffect} from "react"
import axios from "axios"
import {Link} from 'react-router-dom'
import './CfListBox.css'
import ProgressBar from "../utils/Progress_Bar"


export default (props) => {
    const date = new Date(props.crowdfunder.createdAt)
    const description = props.crowdfunder.description

    const [donations, setDonations] = useState([]);

    useEffect(() => {
      axios
        .get("/api/crowdfunder/comments/" + props.crowdfunder.id)
        .then((resp) => {
          if (resp.data.status === "success") {
            setDonations(resp.data.message);
          }
        })
        .catch((error) => {
          console.log(error);
        });
    }, [setDonations]);

    const sum = () => {
      let total = 0;
      donations.forEach((e) => {
        total += e.donation;
      });
      return total;
    };

// const checkIfCompleted = async () => {
//   if(sum() > props.crowdfunder.cf_goal) {
//     const form = props.crowdfunder;
//     form.success = 1
//     await axios.put(`/api/crowdfunder/update/${props.crowdfunder.id}`, form)
// .then((resp) => {
// if(resp.data.status === 'success') {
//     props.setMessages({message: resp.data.message, status: resp.data.status})
// }
// })
// .catch(() => {
//     props.setMessages({message:'Could not accept the crowdfunder', status:'danger'})
// })
// }
//       }

    const descriptionhandler = () => {
        if (description.length >= 120) {
            return description.slice(0,120) + '...'
        }else {
            return description
        }
    }

    return (
        <div className="col-sm-4 col-md-offset-1">
            <div className="card shadow-sm">
                <Link to={`${props.link}` + props.crowdfunder.id}>

                <div className="card-body">
             {/* NEED TO ADD PICTURE */}
                <div className=" justify-content-between align-items-center">
                <h4 className="card-text">{props.crowdfunder.headline}</h4>
                <p className="description">{descriptionhandler()}</p>
                <div style={{textAlign:"center"}}><ProgressBar value={sum()} max={props.crowdfunder.cf_goal} /></div>
                <p className="goal">
                    <strong>{sum()}$ raised</strong> of ${props.crowdfunder.cf_goal}</p>
                    <div className="btn-group">
                    <small className="text-muted">Created: {date.toLocaleDateString('lt-LT')}</small>
                    </div>
                </div>
                </div>
                </Link>
            </div>
        </div>
    )
}