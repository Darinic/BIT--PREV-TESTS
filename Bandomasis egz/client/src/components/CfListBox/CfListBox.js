import React from "react"
import {Link} from 'react-router-dom'
import './CfListBox.css'
import ProgressBar from "../utils/Progress_Bar"

export default (props) => {
    const date = new Date(props.crowdfunder.createdAt)
    const description = props.crowdfunder.description

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
                <div style={{textAlign:"center"}}><ProgressBar value={50} max={100} /></div>
                <p className="goal">
                    <strong>$0 raised</strong> of ${props.crowdfunder.cf_goal}</p>
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