import React, {Component} from 'react';
import { connect } from 'react-redux';
import { signIn } from '../../store/actions/authActions';

class SignIn extends Component {

    state = {
        email: '',
        password: ''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        // console.log(this.state);
        this.props.signIn(this.state);
    }

    render() {
        return (
            <div>
                <form autoComplete="off" className="form-wrapper" onSubmit={this.handleSubmit}>
                    <h1 className="headline">Sign in</h1>
                    <div className="input-field">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" onChange={this.handleChange} />
                    </div>
                    <div className="input-field">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" onChange={this.handleChange} />
                    </div>
                    <div>
                        <button>Login</button>
                    </div>
                </form>
            </div>
        );
    }

}

const mapStateToProps = (state) => {
    return {
        authError: state.auth.authError
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        signIn: (creds) => {
            dispatch(signIn(creds))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);