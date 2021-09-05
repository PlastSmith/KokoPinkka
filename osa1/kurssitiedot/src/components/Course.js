import React from 'react'

const Course = (props) => {

    const { courses } = props
  
    return (
      <>
        {courses.map(course =>
        <div key={'main_'.concat(course.id)}>
            <Header key={'header_'.concat(course.id)} course={course}/>
            <Content key={'content_'.concat(course.id)} parts={course.parts}/>
            <Total key={'total_'.concat(course.id)} parts={course.parts}/>
        </div>
        )}
      </>
    )
  }
  
  const Header = (props) => {
    return (
      <>
        <h1>{props.course['name']}</h1>
      </>
    )
  }
  
  
  const Content = (props) => {
  
    const { parts } = props
    return (
      <>
        <ul>
          {parts.map(part =>
            <Part key={part.id} part={part} />
          )}
        </ul>
      </>
    )
  }

  const Part = ( {part} ) => {  

        return (
        <>
            <li>{part['name']} {part['excercises']}</li>
        </>
    )

}
  
  // parts in {} because WANTED AS OBJECT !!!!
  const Total = ( {parts} ) => {
    let initialValue = 0
    const tot = parts.reduce((acc, curr) => {
      return acc + curr.exercises
    }, initialValue)
  
    return (
      <>
        <p>Number of exercises {tot}</p>
      </>
    )
  }

export default Course