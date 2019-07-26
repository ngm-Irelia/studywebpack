import React from 'react';
import ReactDOM from 'react-dom';

console.log('I get called from print.js!1');

ReactDOM.render(
  <div>helloReact</div>,document.getElementById("aa-root")
)

/* function component() {
  var element = document.createElement('div');

  element.innerHTML ="hello html 111";
  element.classList.add('hello');

  return element;
}

document.body.appendChild(component()); */