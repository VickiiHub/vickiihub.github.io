// ---- CONFIGURATIONS ----
const print = console.log
const D = document

// ---- DOM Manipulation ----
// ---bio.html---
const bioPageHeading = `About me, just a little bit ... `
const bioParaOne = `Hello and नमस्ते, I'm Vivek and I make web based software, from Sahranpur and living in Pune.`
const bioParaTwo = `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque, eos vel. Eligendi qui tempore sint dicta et repellat impedit eum sunt, cumque porro fugiat illum earum reprehenderit soluta distinctio ullam.`
const bioParaThree = `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque, eos vel. Eligendi qui tempore sint dicta et repellat impedit eum sunt, cumque porro fugiat illum earum reprehenderit soluta distinctio ullam.`
const bioParaFour = `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque, eos vel. Eligendi qui tempore sint dicta et repellat impedit eum sunt, cumque porro fugiat illum earum reprehenderit soluta distinctio ullam.`
print(D.getElementById("BIO__PAGE__HEADING"))

D.getElementById("BIO__PAGE__HEADING").innerHTML = bioPageHeading
D.getElementById("BIO__PARA__ONE").innerHTML = bioParaOne
D.getElementById("BIO__PARA__TWO").innerHTML = bioParaTwo
D.getElementById("BIO__PARA__THREE").innerHTML = bioParaThree
D.getElementById("BIO__PARA__FOUR").innerHTML = bioParaFour
