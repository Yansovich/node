import { PageAuthorization } from "./components/page-authorization.component.js";
import { Validator } from "./core/validator.js";
// import { Component } from "./core/component.js";

Validator.required ('')

console.log(Validator.isEmailValid('qqqdfhQQQf@mail.ru'));

const component1 = new PageAuthorization('login') 

console.log(component1);


// class CreateComponent extends Component {
//     constructor(container) {
//         super()
//         this.container = document.getElementById(container)
//         this.square = document.createElement('div')
//         console.log(this.square);
//         this.square.style.width = '50px'
//         this.square.style.height = '50px'
//         this.square.style.background = 'red'
//         this.component = this.square

//         this.container.insertAdjacentElement('afterend', this.square)

//         this.square.addEventListener('click', () => {
//             this.hide()
//         })
//     }
// }

// const square = new CreateComponent('sign-up')

// console.log(square);