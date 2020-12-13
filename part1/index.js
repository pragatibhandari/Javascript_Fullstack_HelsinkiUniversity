import React from 'react';
import ReactDOM from 'react-dom';


const part1 = "fundamentals of React"
const part2 = "Using props to pass data"
const part3 = "State of a component"
const exercises1 = 10
const exercises2 = 7
const exercises3 = 14

const Header = (props) => {
  return(
    <div>
      <p> {props.course} </p>
    </div>
  )
}

const Part = (props) => {
  return(
    <div>
      <p> {props.part1} {props.exercises1} </p>
      <p> {props.part2} {props.exercises2}</p>
      <p> {props.part3} {props.exercises3}</p>
    </div>
  )
}

const Content = () => {
  return(
    <div>
      <Part part1 = {part1} exercises1 = {exercises1}/>
      <Part part2 = {part2} exercises2 = {exercises2}/>
      <Part part3 = {part3} exercises3 = {exercises3}/> 
    </div>
  )
}

const Total = (props) => {
  
  return(
    <div>
      <p>{exercises1 + exercises2 + exercises3} </p>
    </div>
  )
}


const App = () => {
  const course = "Half Stack application development"
  
  
  
  return (
    <div>
      <Header course = {course}/>
      <Content/>
      <Total/>
    </div>
  )
  }

ReactDOM.render(<App />, document.getElementById('root'));
