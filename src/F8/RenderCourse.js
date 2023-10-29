import React from 'react'
import ReactDOM from 'react-dom/client';
const courses = [
    {
        key : 1,
        name :'HTML, CSS',
    },
    {
        key : 2,
        name :'Responsive web design',
    },
    {
        key : 3,
        name :'ReactJS',
    },
]

function getLiEle(input){
    return input.map((element, index) =>{
        return React.createElement(
                                'li',
                                {
                                    key: index
                                },
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
    <React.Fragment>
        <p>heheh</p>
        <UlRender/> 
    </React.Fragment>
    
  )
}
