import React from 'react'

const Box = ({title, item, result}) => {
  // title === 'computer' 일때는 다른 결과를 줘야함
  // 받아온 result를 가공해서 최종으로 lastResult에 담는것이다
  let lastResult 
  if(title === 'computer' && result !== 'tie' && result !== '') {
    lastResult = result === 'win' ? 'lose' : 'win'
  }
  else {
    lastResult = result
  }
  return (
    <div className={`box ${lastResult}`}>
      <h1>{title}</h1>
      <img className='item-img' src={item && item.img} />
      <h2>{lastResult}</h2>
    </div>
  )
}

export default Box
