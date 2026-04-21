// ---- CONFIGURATIONS ----
const LOG = console.log
const D = document

// ---- DOM Manipulation ----
const ANGULAR = `<a href="https://www.angular.io" style="color:lightcoral;"><b>Angular</b></a>`
const NESTJS = `<a href="https://www.nestjs.com" style="color:lightcoral;"><b>NestJS</b></a>`
const POSTGRESQL = `<a href="https://www.nestjs.com" style="color:lightcoral;"><b>PostgeSQL</b></a>`
const ABOUT = `Hello, I'm <b>Vivek</b>, I've been making web based software using out of the shelf technologies i.e., ${ANGULAR}, ${NESTJS} & ${POSTGRESQL}.`

D.getElementById('ABOUT').innerHTML = ABOUT
