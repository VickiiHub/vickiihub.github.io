// ---- CONFIGURATIONS ----
const print = console.log
const D = document

// ---- DOM Manipulation ----
const angular = `<a href="https://www.angular.io" style="color:lightcoral;"><b>Angular</b></a>`
const nestJS = `<a href="https://www.nestjs.com" style="color:lightcoral;"><b>NestJS</b></a>`
const postgreSQL = `<a href="https://www.nestjs.com" style="color:lightcoral;"><b>PostgeSQL</b></a>`
const about = `Hello, I'm <b>Vivek</b>, I've been making web based software using out of the shelf technologies i.e., ${angular}, ${nestJS} & ${postgreSQL}. Earlier I was a <i>Freelance</i> <b>iOS Developer</b> but later switched to web developement for <b>FREEDOM</b>.`

D.getElementById("ABOUT").innerHTML = about
