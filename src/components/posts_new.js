import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createPost } from '../actions';

class PostsNew extends Component {
  // The field object indicates a single piece of input (or state) that we are
  // attempting to communicate with the user.
  // The meta.error is automatically added to the field object by the validate
  // function below. The text will be taken from the validate function below.

  // Only show the error message if the field has been touched by the user.
  renderField(field) {
    // Destructure so that it cleans up code and you don't have to type out
    // field.meta.whatever every time. Pulls off properties touched and error
    // from the meta object. Destructuring to access properties on nested objects.
    // Once destructured, you can replace field.meta.touched with simply touched.
    const { meta: { touched, error } } = field;
    const className = `form-group ${touched && error ? 'has-danger' : ''}`;

    return (
      <div className={className}>
        <label>{field.label}</label>
        <input
          className="form-control"
          type="text"
          {...field.input}
        />
        <div className="text-help">
          {touched ? error : ''}
        </div>
      </div>
    );
  }

  // wire up action creator
  onSubmit(values) {
    // When this.props.history.push('/') is called, we will automatically navigate back to index page of posts. Route needs to match
    // one of the Routes defined in src/index.js. Only want to do this after a new post has been created, so 
    // need to create as a callback function.
    
    this.props.createPost(values, () => {
      this.props.history.push('/');
    });
  }


  // Name property should match validate errors below, so that any errors are displayed
  // with the correct field.
  render() {
    // reduxForm adds more properties to our component when it's wired up (at the
    // bottom of the file). handleSubmit is a property is being passed to the
    // componenet on behalf of reduxForm.
    const { handleSubmit } = this.props;

    // reduxForm does the validation and decides if the form should be submitted.
    // This side takes the data and submits it to a backend server. handleSubmit
    // handles the reduxForm side of things to validate and if everything looks
    // good, it calls the callback this.onSubmit.
    return (
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <Field
          label="Title"
          name="title"
          component={this.renderField}
        />
        <Field
          label="Categories"
          name="categories"
          component={this.renderField}
        />
        <Field
          label="Post Content"
          name="content"
          component={this.renderField}
        />
        <button type="submit" className="btn btn-primary">Submit</button>
        <Link to="/" className="btn btn-danger">Cancel</Link>
      </form>
    );
  }
}


// Called automatically when user tries to submit the form.
// Values is an object that contains all the different values that a user has
// entered into a form.
function validate(values) {
  const errors = {}

  // Validate inputs from 'values' object
  if (!values.title || values.title.length < 3) {
    errors.title = "Enter a title with length of at least three characters";
  }

  if (!values.categories) {
    errors.categories = "Enter some categories";
  }

  if (!values.content) {
    errors.content = "Enter some content";
  }

  // If errors is empty, the form is fine to submit
  // If errors has any properties, redux form assumes form is invalid and will not
  // submit the form
  return errors;

}

// Redux form has built in validation that you can wire in with validate.

// validate: validate becomes just validate because of ES6
export default reduxForm({
  validate,
  form: 'PostsNewForm'
}) (
  connect(null,{ createPost }) (PostsNew)
);



