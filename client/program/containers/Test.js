import React from 'react'
const Test = (props) => {
  const sayHi = (event) => alert('Hello World')
  return (
    <div onClick={sayHi}>Hello World</div>
  )
}
export default Test