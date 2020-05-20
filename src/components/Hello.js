import React from 'react'

const Hello = () => {
//    return (
//        <div classNmae='dummyClass'>
//      <h1>Hello Preeti</h1>
//      </div>
//  )
return React.createElement(
    'div', 
    {id: 'hello', className: 'dummyClass'}, 
React.createElement('h1', null, 'Hello Preeti')
)    
}

export default Hello