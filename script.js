var btn = $('.form-button')
var imageSection = $('.image')
var learnMoreSection = $('.learn-more')
var rosalind = "/rosalindF.jpg"
var grace = "/graceH.jpg"
var ellen = "/ellenO.jpg"
var katherine = "/katherineJ.jpg"
// imageSection.on("click", deleteImage); 
btn.on('click', sendFunFacts)


// //Second Event Handler for Deleting Cards 

// function deleteImage(event) {
//   if (event.target.className === "delete"){
//     event.target.parentNode.remove();
//   }
// }

function sendFunFacts(event) {
  var factType = $('.form-control').val()
  if (factType === "science"){
      imageSection.append(`<img height="400px" src = ${rosalind}>`);
      learnMoreSection.append(`<h3>Learn more about me <a href="https://www.nature.com/scitable/topicpage/rosalind-franklin-a-crucial-contribution-6538012/">here!</a></h3>`);
  } else if (factType === "technology") {
      imageSection.append(`<img height="400px" src = ${grace}>`);
      learnMoreSection.append(`<h3>Learn more about me <a href="https://www.womenshistory.org/education-resources/biographies/grace-hopper">here!</a></h3>`);
  } else if (factType === "engineering") {
      imageSection.append(`<img height="400px" src= ${ellen}>`);
      learnMoreSection.append(`<h3>Learn more about me <a href="https://www.nasa.gov/centers/johnson/about/people/orgs/bios/ochoa.html">here!</a></h3>`);
  } else if (factType === "math") {
      imageSection.append(`<img height="400px" src= ${katherine}>`);
      learnMoreSection.append(`<h3>Learn more about me <a href="https://www.nasa.gov/content/katherine-johnson-biography">here!</a></h3>`);
  }
  event.preventDefault();
}


// For recording list
var cardContainer = $('.card-container'); 
var submit = $('.submit-btn'); 

submit.on("click", writeDown); 

function writeDown(event) {
event.preventDefault(); 

var scholarshipName = $('.name').val(); 

cardContainer.append(
  `<div>
    <p class = "card"> ${scholarshipName} </p> 
      <button class = "delete"> Delete </button>
   </div>`)
}

cardContainer.on("click", deleteCard); 

function deleteCard(event) {

if (event.target.className === "delete"){
  event.target.parentNode.remove();
}
}