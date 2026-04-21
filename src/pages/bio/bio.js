// ---- CONFIGURATIONS ----
const LOG = console.log
const D = document

// ---- DOM Manipulation ----
// ---bio.html---
const BIO_PAGE_HEADING = `About me, just a little bit ... from a assembly line worker to now a full stack web developer.`
const BIO_PARA_ONE = `Hello and नमस्ते, I'm Vivek and I make web based software also known as WebApps. I'm from India, born and raised in Saharanpur.`
const BIO_PARA_TWO = `I'm a college dropout, started doing jobs in manufacturing sector as a assembly line worker, later on as a SAP Operator, saved money and bought MacBook Pro 13 Inch (Mid-2012) Model. I was very passionate about developing apps and started taking freelance work.`
const BIO_PARA_THREE = `Later in the mid of 2021, I also started learning web development and realized that web development offers way much FREEDOM<span class="underline">(will write on this freedom aspect later)</span> than native app development.`
const BIO_PARA_FOUR = `My web development tech stack majorly includes (but not limited to), <a href="https://www.angular.dev" target="_blank">Angular</a> (12 and above) for Frontend, <a href="https://www.nestjs.com" target="_blank">NestJS</a> for Backend and <a href="https://www.postgresql.org" target="_blank">PostgreSQL</a> for Database.`
const BIO_PARA_FIVE = `Currently, I'm learning <a href="https://www.angular.io" target="_blank">Angular</a> 19, Data visualization in JavaScript using <a href="https://d3js.org" target="_blank">D3JS</a> & web animation using <a href="https://threejs.org" target="_blank">ThreeJS</a>.`
const BIO_PARA_SIX = `Plus I write on <a href="https://dev.to/vvj" target="_blank">dev.to/vvj</a>, I welcome emails to <a href="mailto:vivekjadhav09@gmail.com">vivekjadhav09@gmail.com</a>. You can also find me on <a href="https://x.com/vickiitter" target="_blank">X/Twitter</a>, and on <a href="https:www.linkedin.com/in/vivekjadhav09" target="_blank">LinkedIn</a>.`
LOG(D.getElementById('BIO__PAGE__HEADING'))

D.getElementById('BIO__PAGE__HEADING').textContent = BIO_PAGE_HEADING
D.getElementById('BIO__PARA__ONE').textContent = BIO_PARA_ONE
D.getElementById('BIO__PARA__TWO').textContent = BIO_PARA_TWO
D.getElementById('BIO__PARA__THREE').textContent = BIO_PARA_THREE
D.getElementById('BIO__PARA__FOUR').innerHTML = BIO_PARA_FOUR
D.getElementById('BIO__PARA__FIVE').innerHTML = BIO_PARA_FIVE
D.getElementById('BIO__PARA__SIX').innerHTML = BIO_PARA_SIX
