import logo from './logo.svg';
import './App.css';
import React from 'react';
// <h1>
//document.body.innerHTML = ''
var div= document.createElement('div');
var h1 =  document.createElement('h1');
h1.title = 'Hello'
h1.class = 'heading'
h1.innerHTML = 'Hello guys!'
div.appendChild(h1)
// <ul>
var ul = document.createElement('ul')
var li = [document.createElement('li'), document.createElement('li')]
li[0].innerHTML = 'Javacript'  
li[1].innerHTML = 'ReactJS'
ul.appendChild(li[0])
ul.appendChild(li[1])
// div post-item
var h2 = document.createElement('h2')
h2.innerHTML = 'Hoc ReactJS'
h2.title = 'Hoc React tại F8'
var p = document.createElement('p')
p.innerHTML = 'Học React từ cơ bản đến nâng cao'
var divPostItem = document.createElement('div')
divPostItem.class='post-item'
divPostItem.append(h2, p)
// append to body
document.body.appendChild(div)
document.body.appendChild(ul)
document.body.appendChild(divPostItem)

// react
//document.body.innerHTML = ''
const h1React = React.createElement('h1',{
  title: 'Hello',
  class: 'heading',
  children : 'Hello guys!'
})
const divReact = React.createElement('div',{
 
},h1React)
// <ul>
const liReact = [
  React.createElement('li',{
    children: 'Javascript'
  }),
  React.createElement('li',{
    children: 'ReactJS'
  })
]
const ulReact = React.createElement('ul',null, liReact[0], liReact[1])
// div post-item
var h2React= React.createElement('h2',{
  title:'Học React tại f8'
}, 'Học ReactJS')
var pReact = React.createElement('p',null,
'Học React từ cơ bản đến nâng cao')
var divPostItemReact= React.createElement('div' ,null , h2React, pReact)
// dom render
function App() {
  return (
    <div className="App">
    </div>

  );
}

export default App;
