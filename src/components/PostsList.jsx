
import Post from './Post';
import classes from './PostsList.module.css';
import NewPost from './NewPost';
import Modal from './Modal';
import { useState , useEffect } from 'react';


// eslint-disable-next-line react/prop-types
function PostsList ({isPosting,onStopPosting}) {



const [posts, setPosts] = useState([]);

useEffect(() => {
  async function fetchPosts() {
    const response = await fetch("http://localhost:8080/posts")
    const resData = await response.json();
    setPosts(resData.posts);
  }

  fetchPosts();
}, []);

function addPostHandler(postData) {

    fetch('http://localhost:8080/posts',{
      method: 'POST',
      body: JSON.stringify(postData),
      headers:{
        'Content-Type': 'application/json'
      }
    });

    setPosts((existingPosts)=>[postData, ...existingPosts]);
}



  return (
    <div>

        { 
        isPosting ?  (<Modal onClosed = {onStopPosting}>
        <NewPost 
        onCancel={onStopPosting}
        onAddPost= {addPostHandler}
        />
        </Modal> ) : null }

           
        {posts.length > 0 && (
            <ul className={classes.posts}>
            {posts.map((post) => 
            <Post key={post} author={post.author} body={post.body} /> ) }
            </ul>
        )}

        {posts.length === 0 && (<div style={{textAlign:'center',color:'white'}}>
            <h2>There is No Post</h2>
            <p>Start adding some!</p>
            </div>)}

    </div>
  )
}

export default PostsList