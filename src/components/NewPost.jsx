import classes from './NewPost.module.css';
import { useState } from 'react';

// eslint-disable-next-line react/prop-types
function NewPost({onCancel,onAddPost}) {

  const [enterBody,setEnterBody] = useState('');
  const [enterAuthor,setEnterAuthor] = useState('');
  

  function bodyChangeHandler(event){
      setEnterBody(event.target.value);
  }

  function authorChangeHandler(event){
      setEnterAuthor(event.target.value);
  }




  function submitHandler(event){
    event.preventDefault();
    const postData = {
      body: enterBody,
      author:enterAuthor
    }

    onAddPost(postData);
    onCancel() ;
  }


    
  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <p>
        <label htmlFor="body">Text</label>
        <textarea id="body" required rows={3} onChange={bodyChangeHandler}/>
      </p>
      <p>
        <label htmlFor="name">Your name</label>
        <input type="text" id="name" required onChange={authorChangeHandler}/>
      </p>

      <p className={classes.actions}>
        <button type='button' onClick={onCancel}>Cancel</button>
        <button >Submit</button>
      </p>
    </form>
  );
}

export default NewPost;