// ---- CONFIGURATIONS ----
const print = console.log
const D = document

// ---- DOM Manipulation ----
// ---bio.html---
const bioPageHeading = `About me, just a little bit ... `
const bioParaOne = `Hello and नमस्ते, I'm Vivek and I make web based software, from Sahranpur and living in Pune.`
const bioParaTwo = `I'm a college dropout, started doing job as in manufacturing sector as assembly line worker, later on as a SAP Operator, saved money and bought MacBook Pro 13 Inch (Mid-2012) Model. Because I was very passionate about developing apps and started taking freelance work.`
const bioParaThree = `Later in the mid of 2021, I also started learning web development and realized that web development offers way much FREEDOM than native app development.`
const bioParaFour = `My web development tech stack majorly includes (but not limited to), <a href="https://www.angular.io" target="_blank">Angular</a> 12 for Frontend, <a href="https://www.nestjs.com" target="_blank">NestJS</a> for Backend and <a href="https://www.postgresql.org" target="_blank">PostgreSQL</a> for Database.`
const bioParaFive = `Currently, I'm learning <a href="https://www.angular.io" target="_blank">Angular</a> 16, Data visualization in JavaScript using <a href="https://d3js.org" target="_blank">D3JS</a> & web animation using <a href="https://greensock.com/gsap/" target="_blank">GSAP</a>.`
print(D.getElementById("BIO__PAGE__HEADING"))

D.getElementById("BIO__PAGE__HEADING").innerHTML = bioPageHeading
D.getElementById("BIO__PARA__ONE").innerHTML = bioParaOne
D.getElementById("BIO__PARA__TWO").innerHTML = bioParaTwo
D.getElementById("BIO__PARA__THREE").innerHTML = bioParaThree
D.getElementById("BIO__PARA__FOUR").innerHTML = bioParaFour
D.getElementById("BIO__PARA__FIVE").innerHTML = bioParaFive
