import React, {useState} from 'react'
import './App.css'
import { ImCamera } from "react-icons/im";

function App() {
    let [blog, setBlog]=useState(['명품가방추천','명품신발추천','명품시계추천'])
   let [modal, setModal]=useState(false)
   let [title, setTitle]=useState(0)
   let [likes, setLikes]=useState(Array(blog.length).fill(0))
   let [input, setInput] =useState('')

   const setBlogLikes=(index, newLikes)=>{
      setLikes(prevLikes =>{
         const newLikesArray=[...prevLikes]
         newLikesArray[index]=newLikes;
         return newLikesArray;

      })
   }
    
    return (
      <div className="App">
      <div className="black-nav">
         <h4><ImCamera /> 블로그 만들기</h4>
      </div>
      
      
      {
         blog.map(function(a, i){
            return (
               <div className="list">
                  <div className='blog'>
                     <h4  onClick={()=>{setModal(!modal); setTitle(i)}}>{blog[i]} </h4>
                     <span  onClick={()=>{setBlogLikes(i, likes[i] +1)}}>❤</span>{likes[i]}
                     <p>2025 12 03 발행</p>
                  </div>
                  <button
                     onClick={()=>{
                        let copy=[...blog];
                        copy.splice(i,1);
                        setBlog(copy)
                     }}
                  >삭제</button>
               </div>
            )
         })
      }
      <input value={input} onChange={(e)=>{setInput(e.target.value); console.log(input)}} placeholder='내용 입력해주세요' />
      <button className='write'
         onClick={()=>{
            if(input.trim() === ''){
               alert('글을 입력해주세요');
               return;
            }
            let copy=[...blog];
            copy.unshift(input);
            setBlog(copy)
            setInput("");
         }}

      >글쓰기</button>
      {
         modal===true ? <Modal blog={blog} title={title}/> : null
      }
      </div>
    )
}

function Modal({blog, title}){
   return (
      <div className="modal">
         <h2>{blog[title]}</h2>
         <p>날짜</p>
         <p>상세내용</p>
      </div>
   )
}

export default App
