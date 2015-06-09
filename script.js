var allQuestions = [

{
  question: "Who is Prime Minister of the United Kingdom?", 
  choices: ["David Cameron", "Gordon Brown", "Winston Churchill", "Tony Blair"], 
  correctAnswer:0
},

{
  question: "Jakiego koloru jest pies?", 
  choices: ["różowy", "brązowy", "niebieski w kropki", "przezroczysty"], 
  correctAnswer:1
},

{
  question: "Ile jest gruszek na wierzbie?", 
  choices: ["100", "3", "1", "0"], 
  correctAnswer:3
}

];

var questionArea = $("#question");
var questionContent = $("#question > h2");
var pytania = $("#pytania");
var nextButton = $("#next");

var currentQuestion = allQuestions[0].question;
questionContent.html(currentQuestion);

var allChoices = allQuestions[0].choices;
for (var i in allChoices) {
	pytania.append("<input type='radio'>" + allChoices[i] + "<br/>");
}
