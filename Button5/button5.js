function createButtons() {
  for(let i=1; i<=5;i++){
    const body = document.querySelector('body')
    const button = document.createElement('Button')
    button.innerHTML = 'Button '+i;
    addClickFunctionality(button,i)
    body.appendChild(button)
  }
}

// function createButtons() {
//   for(let i=1; i<=5;i++){
//     const body = document.querySelector('body')
//     const button = document.createElement('Button')
//     button.innerHTML = 'Button '+i;
//     (function (num) {
//       button.onclick = function (){
//         alert('This is button ' + i)
//       }
//     })(i)
//     body.appendChild(button)
//   }
// }

function addClickFunctionality(button,num) {
  button.onclick = function (){
    alert('This is button ' + num)
  }
}

createButtons()