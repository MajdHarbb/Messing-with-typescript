import React from 'react'
type GreetProps = {
    name: string
}
function Greet(props: GreetProps) {
  return (
    <div>Welcome {props.name}! You have 10 unreaed messages. </div>
  )
}

export default Greet