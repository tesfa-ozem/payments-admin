import React from 'react'
// import PropTypes from 'prop-types'
import "./cards.scss"
export default function Card(props) {
    return (
        <>
            <div className="card">
                <div className="card-header">
                    <div className="stat-container">
                        <span className="card-title">
                            {props.title}
                        </span>
                        <span className="card-value">{props.value}</span>
                    </div>
                    <div className="icon-container">
                    <i className={props.icon}></i>
                    </div>

                </div>
                <div className="card-footer">
                    <span><i className="las la-caret-up"></i>  40% up from yesterday</span>
                </div>
            </div>
        </>
    )
}

// Card.propTypes = {

// }



