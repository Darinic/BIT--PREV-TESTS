import React from "react";
import axios from "axios";

export default (props) => {
    const date = new Date(props.crowdfunder.createdAt)

const acceptHandler = async () => {
const form = props.crowdfunder
form.approved = 1
await axios.put(`/api/crowdfunder/update/${props.crowdfunder.id}`, form)
.then((resp) => {
if(resp.data.status === 'success') {
    props.setMessages({message: resp.data.message, status: resp.data.status})
}
})
.catch(() => {
    props.setMessages({message:'Could not accept the crowdfunder', status:'danger'})
})
}

const rejectHandler = async () => {
await axios.delete(`/api/crowdfunder/delete/${props.crowdfunder.id}`)
.then((resp) => {
    if(resp.data.status === 'success') {
        props.setMessages({message: resp.data.message, status: resp.data.status})
        setTimeout(() => {
            window.location.reload()
        }, 2000)
    }
    })
    .catch(() => {
        props.setMessages({message:'Could not delete the crowdfunder', status:'danger'})
    })
}


    return (
        <div className="col">
            <div className="card shadow-sm">
                {/* <Link to={'/profiles/' + props.profile.id}>
                <img className="bd-placeholder-img card-img-top" 
                     src={props.profile.profile_image}
                     /> */}

                <div className="card-body">
                <p className="card-text h5">{props.crowdfunder.headline}</p>
                <p className="card-text h6">Description:{props.crowdfunder.description}</p>
                <p className="card-text float-right">Goal: {props.crowdfunder.cf_goal}$</p>
                <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                    <button type="button" onClick={acceptHandler} className="btn btn-sm btn-outline-secondary">Accept</button>
                    <button type="button" onClick={rejectHandler} className="btn btn-sm btn-outline-secondary">Reject</button>
                    </div>
                    <small className="text-muted">{date.toLocaleDateString('lt-LT')}</small>
                </div>
                </div>
                {/* </Link> */}
            </div>
        </div>
    )
}