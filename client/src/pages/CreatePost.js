import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from 'yup';
import axios from 'axios';

function CreatePost() {

  const initialValues = {
    title: '',
    postText: '',
    username: ''
  }


  const validationSchema = Yup.object().shape({
    title: Yup.string().required("Title is required"),
    postText: Yup.string().required("Post text is required"),
    username: Yup.string()
      .min(3, "Username must be at least 3 characters")
      .max(15, "Username must not exceed 15 characters")
      .required("Username is required")
  });

  const onSubmit = (data) => {
    axios.post("http://localhost:3001/posts", data).then((response) =>  {
      console.log(response)
      console.log('Working')
    })

  }
  return (
    <div className="createPostPage">
      <Formik
      initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}
      >
        <Form className="formContainer">
        
          <label>Title:</label>
          <Field
            id="inputCreatePost"
            name="title"
            autoComplete="off"
            placeholder="(ex. Title...)"
          />
          <ErrorMessage name="title" component="span" />
        
          <label>Post:</label>
          <Field
            id="inputCreatePost"
            autoComplete="off"
            name="postText"
            placeholder="(ex. postText...)"
          />
          <ErrorMessage name="postText" component="span" />
        

          <label>Username:</label>
          <Field
            id="inputCreatePost"
            autoComplete="off"
            name="username"
            placeholder="(ex. mark292...)"
          />
          <ErrorMessage name="username" component="span"/>
        
        <button type="submit">Create Post</button>
        </Form>
      </Formik>
    </div>
  );
}

export default CreatePost;
