import React, {Component} from 'react'
import {Field, reduxForm} from 'redux-form'

class billingCycleForm extends Component{
    render() {
        const { handleSubmit } = this.props
        return (
            <form role="form" onSubmit={handleSubmit}>
                <div className="box-body">
                    <label>Nome:</label>
                    <div>
                        <Field name="name" component="input" type="text" placeholder="Nome"/>
                    </div>
                    <label>Mês:</label>
                    <div>
                        <Field name="month" component="input" type="text" placeholder="Mês"/>
                    </div>
                    <label>Ano:</label>
                    <div>
                        <Field name="year" component="input" type="text" placeholder="Ano"/>
                    </div>
                </div>
                <div className="box-footer">
                    <button type="submit" className="btn btn-primary">Enviar</button>
                </div>
            </form>
        )
    }
}


export default reduxForm({form: 'billingCycleForm'}) (billingCycleForm)