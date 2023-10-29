import React from 'react'
import ReactDOM from 'react-dom/client';
const courses = [
    {
        name :'HTML, CSS',
    },
    {
        name :'Responsive web design',
    },
    {
        name :'ReactJS',
    },
]

function getLiEle(input){
    return input.map(element =>{
        return React.createElement(
                                'li',
                                null,
                                element.name
                                )
    })
}

function UlRender(){
    return React.createElement(
                                'ul', 
                                null, 
                                getLiEle(courses)
                                )

}

export default function RenderCourse() {
  return (
    <UlRender/> 
  )
}
