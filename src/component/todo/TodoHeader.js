import React from 'react'

import './scss/TodoHeader.scss';
import { getLoginUserInfo } from '../../util/login-util';
import { Upgrade } from '@mui/icons-material';

const TodoHeader = ({ count  , promote}) => {

  //중간에 { } 여러 변수 가져올 때 
  const {role } = getLoginUserInfo().role;

  const today = new Date();

  const dateString = today.toLocaleDateString('ko-KR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
  });

  const dayName = today.toLocaleDateString('ko-KR', { weekday: 'long' });
  
  const Upgrade= () => {
    if(window.confirm('프리미엄으로 업그레이드 하시겠습니까?')){
      promote();      
    }
  };

// 등급에 따른 조건부 렌더링
const gradeView = () => {
  if (role === 'COMMON') {
    return <span className='promote badge bg-warning' onClick={Upgrade}>일반회원</span>;
  } else if (role === 'PREMIUM') {
      return <span className='promote badge bg-danger' onClick={Upgrade}>프리미엄</span>
  } else if (role === 'ADMIN') {
      return <span className='promote badge bg-danger'>관리자</span>
  }
};
  return (
    <header>
        <h1>{dateString}</h1>
        <div className='day'>{dayName}</div>
        <div className='tasks-left'>할 일 {count()}개 남음</div>
        { gradeView() }
    </header>
  )
}

export default TodoHeader;