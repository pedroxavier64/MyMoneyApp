import React from 'react'

export default props => (
    <section className="content-header">
        <h1>{props.title}<small>{props.small}</small></h1>
        <ol className="breadcrumb">
            <li>
                <a href="#">
                    <i className="fa fa-dashboard"></i> Home
                </a>
            </li>
            <li className="active">
                {props.component}
            </li>
        </ol>
    </section>
)