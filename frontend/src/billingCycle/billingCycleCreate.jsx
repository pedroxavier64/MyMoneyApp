import React, {Component} from 'react'
import {Field, reduxForm, formValueSelector } from 'redux-form'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {init} from './billingCycleActions'
import Input from '../common/form/labelAndInput'
import CreditList from './creditList'

class BillingCycleForm extends Component{
    render() {
        const { handleSubmit, readOnly , credits} = this.props
        return (
            <form role="form" onSubmit={handleSubmit}>
                <div className="box-body">
                    <Field name="name" component={Input} readOnly={readOnly} cols="12 4" label="Nome:" placeholder="Nome do ciclo" type="text"/>
                    <Field name="month" component={Input} readOnly={readOnly} cols="12 4" label="Mês:" placeholder="Mês do ciclo" type="number"/>
                    <Field name="year" component={Input} readOnly={readOnly} cols="12 4" label="Ano:" placeholder="Ano do ciclo" type="number"/>
                    <CreditList cols='12 6' list={credits} readOnly={readOnly} />
                </div>
                <div className="box-footer">
                    <button type="submit" className={`btn btn-${this.props.submitClass}`}>{this.props.submitLabel}</button>
                    <button type="button" className="btn btn-default" onClick={this.props.init}>Cancelar</button>
                </div>
            </form>
        )
    }
}

BillingCycleForm = reduxForm({form: 'billingCycleForm', destroyOnUnmount: false}) (BillingCycleForm)
const selector = formValueSelector('billingCycleForm')
mapStateToProps = state => ({credits: selector(state, 'credits')})
const mapDispatchtoProps = dispatch => bindActionCreators({init}, dispatch)
export default  connect(mapStateToProps , mapDispatchtoProps) (BillingCycleForm)