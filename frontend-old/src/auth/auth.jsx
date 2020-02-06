import './auth.css'
import React, {Component} from 'react'
import {reduxForm, Field} from 'redux-form'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

import {login, signup} from './authActions'
import Row from '../common/layout/row'
import Grid from '../common/layout/grid'
import If from '../common/operator/if'
import Messages from '../common/msg/messages'
import Input from '../common/form/inputAuth'

class Auth extends Component {
    constructor(props) {
        super(props)
        this.state = {loginMode: true}
    }
    changeMode() {
        this.setState({ loginMode: !this.state.loginMode})
    }
    onSubmit(values) {
        const {login, signup} = this.props
        this.state.loginMode ? login(values) : signup(values)
    }
    render() {
        const {loginMode} = this.state
        const {handleSubmit} = this.props
        return (
            <div className="login-box">
                <div className="login-logo"><b>My</b> Money</div>
                <div className="login-box-body">
                    <p className="login-box-msg">Bem Vindo!</p>
                    <form onSubmit={handleSubmit(v => this.onSubmit(v))}>
                        <Field name="name" component={Input} placeholder="Nome" icon="user" type="input" hide={loginMode}/>
                        <Field name="email" component={Input} placeholder="E-mail" icon="envelope" type="email"/>
                        <Field name="senha" component={Input} placeholder="Senha" icon="lock" type="password"/>
                        <Field name="confirm_senha" component={Input} placeholder="Confirmar Senha" icon="lock" type="password" hide={loginMode}/>
                        <Row>
                            <Grid cols="4">
                                <button type="submit" className="btn btn-primary btn-block btn-flat">
                                    {loginMode ? 'Entrar' : 'Registrar'}
                                </button>
                            </Grid>
                        </Row>
                    </form>
                    <br/>
                    <a onClick={() => this.changeMode()}>
                        {loginMode ? 'Novo usuário? Registre-se aqui' : 'Já é cadastrado? Faça login!'}
                    </a>
                </div>
                <Messages/>
            </div> 
        )
    }
}

Auth = reduxForm({form: 'authForm'}) (Auth)
const mapDispatchToProps = dispatch => bindActionCreators({login, signup}, dispatch)
export default connect(null, mapDispatchToProps) (Auth) 