import React, {Component} from 'react'
import {Field, reduxForm} from 'redux-form'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {init} from './billingCycleActions'
import Input from '../common/form/labelAndInput'

class BillingCycleForm extends Component{
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
                    <button type="button" className="btn btn-default" onClick={this.props.init}>Cancelar</button>
                </div>
            </form>
        )
    }
}

BillingCycleForm = reduxForm({form: 'billingCycleForm', destroyOnUnmount: false}) (BillingCycleForm)
const mapDispatchtoProps = dispatch => bindActionCreators({init}, dispatch)
export default  connect(null, mapDispatchtoProps) (BillingCycleForm)