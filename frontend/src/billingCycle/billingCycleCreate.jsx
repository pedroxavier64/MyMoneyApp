import React, {Component} from 'react'
import {Field, reduxForm} from 'redux-form'
import Input from '../common/form/labelAndInput'

class billingCycleForm extends Component{
    render() {
        const { handleSubmit } = this.props
        return (
            <form role="form" onSubmit={handleSubmit}>
                <div className="box-body">
                    <Field name="name" component={Input} cols="12 4" label="Nome:" placeholder="Nome do ciclo" type="text"/>
                    <Field name="month" component={Input} cols="12 4" label="Mês:" placeholder="Mês do ciclo" type="number"/>
                    <Field name="year" component={Input} cols="12 4" label="Ano:" placeholder="Ano do ciclo" type="number"/>
                </div>
                <div className="box-footer">
                    <button type="submit" className="btn btn-primary">Enviar</button>
                </div>
            </form>
        )
    }
}


export default reduxForm({form: 'billingCycleForm'}) (billingCycleForm)