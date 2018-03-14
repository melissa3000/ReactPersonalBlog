import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class PostsNew extends Component {
  renderField(field) {
    return (
      <div className="form-group">
        <label>{field.label}</label>
        <input
          className="form-control"
          type="text"
          {...field.input}
        />
      </div>
    );
  }



  render() {
    return (
      <form>
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
}) (PostsNew);



