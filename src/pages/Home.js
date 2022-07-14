import React, { useEffect, useState } from "react";
import {getDocs, collection, doc, deleteDoc} from "firebase/firestore"
import {auth, db} from "../firebase-config"
import { async } from "@firebase/util";

function Home({isAuth}) {
const [postsLists, setPostsLists] = useState([])
const postCollectionRef = collection(db, "posts")


useEffect(()=>{
  const getPosts = async ()=>{
    const data = await getDocs(postCollectionRef);
    setPostsLists(data.docs.map((doc)=> ({...doc.data(), id: doc.id})));
  };
  getPosts();
},[]);

console.log(postsLists)
const deletePost = async (id, event)=>{
  const postDoc =  doc(db, "posts", id)
  await deleteDoc(postDoc)
}

  return (
    <div className="homePage">
      {postsLists.map((post)=>{
        return <div key={post.id} className="post">
          <div className="postHeader">
            <div className="title">
              <h1>{post.title}</h1>
            </div>
            <div className="deletePost">

            {isAuth && post.author.id ===auth.currentUser.uid &&
             <button onClick={()=>{deletePost(post.id)}}>&#128465;
             </button>}

            </div>  
          </div>
          <div className="postTextContainer">{post.postText}</div>
          <h3>@{post.author.name}</h3>
        </div>
      })}
    </div>
  );
}

export default Home;
