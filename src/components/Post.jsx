import classes from './Post.module.css';


// eslint-disable-next-line react/prop-types
function Post ({author,body})  {


  return (
    <div className={classes.post}>
        <p className={classes.author}> {author} </p>
        <p className={classes.write}> {body} </p>
    </div>
  )
}

export default Post;
