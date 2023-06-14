import MainHeader from "./components/MainHeader"
import PostsList from "./components/PostsList"
import { useState } from "react";

function App() {

  const [modalIsVisiable, setModalVisiable] = useState(false);

  function hideModalHandler(){
    setModalVisiable(false);
 }

 function showModalHandler(){
  setModalVisiable(true);
 }

  return (
    <>
    <MainHeader onCreatePost={showModalHandler}/>
        <main> 
           <PostsList isPosting={modalIsVisiable} onStopPosting={hideModalHandler}/>
        </main>
    </>
  )
}

export default App
