import React, {Component} from 'react'
import {Field, reduxForm, formValueSelector } from 'redux-form'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {init} from './billingCycleActions'
import Input from '../common/form/labelAndInput'
import ItemList from './itemList'
import Summary from '../billingCycle/summary'

class BillingCycleForm extends Component{

    calculateSummary() {
        const sum = (t, v) => t + v
        return {
            sumOfCredits: this.props.credits.map(c => +c.value || 0 ).reduce(sum),
            sumOfDebts: this.props.debts.map(d => +d.value || 0 ).reduce(sum)
        }
    }

    render() {
        const { handleSubmit, readOnly , credits, debts} = this.props
        const { sumOfCredits, sumOfDebts} = this.calculateSummary()
        return (
            <form role="form" onSubmit={handleSubmit}>
                <div className="box-body">
                    <Field name="name" component={Input} readOnly={readOnly} cols="12 4" label="Nome:" placeholder="Nome do ciclo" type="text"/>
                    <Field name="month" component={Input} readOnly={readOnly} cols="12 4" label="Mês:" placeholder="Mês do ciclo" type="number"/>
                    <Field name="year" component={Input} readOnly={readOnly} cols="12 4" label="Ano:" placeholder="Ano do ciclo" type="number"/>
                    <Summary credit={sumOfCredits} debts={sumOfDebts}/>
                    <ItemList cols='12 6' list={credits} readOnly={readOnly} field="credits" legend="Créditos"/>
                    <ItemList cols='12 6' list={debts} readOnly={readOnly} field="debts" legend="Débitos" showStatus={true}/>
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
mapStateToProps = state => ({
    credits: selector(state, 'credits'),
    debts: selector(state, 'debts')
})
const mapDispatchtoProps = dispatch => bindActionCreators({init}, dispatch)
export default  connect(mapStateToProps , mapDispatchtoProps) (BillingCycleForm)