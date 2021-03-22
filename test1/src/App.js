import React, { useState } from 'react';
import './App.css';



// function change() {
//   let newArray = [...title]
//   newArray = ["자바", "리덕스", "타입JS"]
//   cha = { newArray }
// }
function APP() {

  let [title, settitle] = useState(["리액트", "자바스크립트", "CSS"])
  let [click, setClick] = useState(0);
  const nav = { color: 'white', fontSize: '30px' };
  let [modal, modalch] = useState(false)



  return (
    <div className='app'>
      <div className="black-nav">
        <div style={nav}>Blog</div>

      </div>
      <div className="list">
        <h2 onClick={() => { modalch(!modal) }}>{title[0]}<span>good</span>0</h2>
        <p>상세정보</p>
        <hr />

        {

          modal === true

            ? <Modal /> //자식 컴포넌트  

            : null

        }
        <h2>{title}<span onClick={() => { setClick(click + 1) }}>❤</span>{click}</h2>
        <p>상세정보</p>
        <hr />
        <h2>{title[2]}<span>good</span>0</h2>
        <p>상세정보</p>
        <hr />

        <button onClick={() => { modalch(!modal) }}>버튼</button>




      </div>
    </div>
  )
}

function Modal(props) {
  return (
    <>
      <div className="modal">
        <h3>{props.title}</h3>
      </div>
    </>
  )
}


export default APP;