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

var questionArea = $("#question"),
    questionContent = $("#question > h2"),
    pytania = $("#pytania"),
    nextButton = $("#next"),
    questionNumber = 0,
    currentQuestion,
    allChoices,
    correctAnswer,
    userAnswer,
    score = 0;

var loadQuestion = function() {

	currentQuestion = allQuestions[questionNumber].question;
	questionContent.html(currentQuestion);

	allChoices = allQuestions[questionNumber].choices;
	for (var i in allChoices) {
		pytania.append("<input type='radio' name='answer' value='" + i + "'>" + allChoices[i] + "<br/>");
	}

	correctAnswer = allQuestions[questionNumber].correctAnswer;
}

loadQuestion();

var checkAnswer = function(){
      if (userAnswer == correctAnswer) {
        return true;
    }
 };

nextButton.click(function(){

  userAnswer = $("input[name=answer]:checked").val();
  if (checkAnswer() == true) {
    score +=1;
  }
  questionNumber +=1;

  if(questionNumber == allQuestions.length) {
    alert("koniec!");
  }

  pytania.empty();
  loadQuestion();

});


/*
1. po ostatnim pytaniu zamienić Next na Submit - po kliknięciu wyświetl wynik
2. 

*/