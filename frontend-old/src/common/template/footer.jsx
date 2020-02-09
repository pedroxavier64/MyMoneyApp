import React, {Component} from 'react'
import {connect} from 'react-redux'

class Footer extends Component {
    render() {
        const {name} = this.props.user
        return(
            <footer className='main-footer'> 
                {name} | <b>My</b>MoneyApp &nbsp; 
                <strong> 
                    Copyright &copy; 
                </strong>
            </footer>
        )
    }
}

const mapStateToProps = state => ({ user: state.auth.user })
export default connect(mapStateToProps, null)(Footer)