import {useState} from 'react';

const State = () => {
    const [message, setMessage]=useState('');
    const [color, setColor]= useState('black')
    const onClickEvent=()=>setMessage('안녕하세요 입장하셨습니다.');
    return (
        <div>
            <button onClick={onClickEvent}>입장</button>
            <button onClick={()=>{setMessage('안녕히 가세요')}}>퇴장</button>
            <h1 style={{color}}>{message}</h1>
       

            <button style={{color:'red'}} onClick={()=>{setColor('red')}}>빨간색</button>
            <button style={{color:'blue'}} onClick={()=>{setColor('blue')}}>파란색</button>
            <button style={{color:'green'}} onClick={()=>{setColor('green')}}>초록색</button>
        </div>
    );
};

export default State;