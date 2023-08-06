import { company, year } from './configuration.js'


const message = '© ' + company  +  year ; //the brackets was the issue. the string was incorrectly encased

document.querySelector('footer').innerText = message;