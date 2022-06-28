import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { compose } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../../actions';

import './SigninStyle.css';

class Signin extends Component {
  onSubmit = formProps => {
    this.props.signin(formProps, () => {
      this.props.history.push('/feature');
    });
  };

  render() {
    const { handleSubmit } = this.props;
    return (
      <div className='container'>
        <main className="form-signin w-100 m-auto">
        <form>
          
          <h1 className="h3 mb-3 fw-normal">Please sign in</h1>

          <div className="form-floating">
            <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
            <label htmlFor="floatingInput">Email address</label>
          </div>
          <div className="form-floating">
            <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
            <label htmlFor="floatingPassword">Password</label>
          </div>

          <div className="checkbox mb-3">
            <label>
              <input type="checkbox" value="remember-me" /> Remember me
            </label>
          </div>
          <button className="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
          <p className="mt-5 mb-3 text-muted">&copy; 2017–2022</p>
        </form>
      </main>
      </div>
    );
    // return (
    //   <form onSubmit={handleSubmit(this.onSubmit)}>
    //     <fieldset>
    //       <label>Email</label>
    //       <Field
    //         name="email"
    //         type="text"
    //         component="input"
    //         autoComplete="none"
    //       />
    //     </fieldset>
    //     <fieldset>
    //       <label>Password</label>
    //       <Field
    //         name="password"
    //         type="password"
    //         component="input"
    //         autoComplete="none"
    //       />
    //     </fieldset>
    //     <div>{this.props.errorMessage}</div>
    //     <button>Sign In!</button>
    //   </form>
    // );
  }
}

function mapStateToProps(state) {
  return { errorMessage: state.auth.errorMessage };
}

export default compose(
  connect(mapStateToProps, actions),
  reduxForm({ form: 'signin' })
)(Signin);
