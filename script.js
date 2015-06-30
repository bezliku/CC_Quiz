$.getJSON("/questions.json", function( data ) {
  console.log(data);
  var allQuestions = data;

  var questionArea = $("#question"),
      questionContent = $("#question > h2"),
      currentChoices = $("#choices"),
      nextButton = $("#next"),
      submitButton,
      prevButton = $("#prev"),
      questionNumber = 0,
      currentQuestion,
      allChoices,
      correctAnswer,
      userAnswer,
      score = 0,
      progressbar = $("#progressbar");

  var loadQuestion = function() {

  	currentQuestion = allQuestions[questionNumber].question;
  	questionContent.html(currentQuestion);

  	allChoices = allQuestions[questionNumber].choices;
  	for (var i in allChoices) {
  		currentChoices.append("<input type='radio' name='answer' value='" + i + "'>" + allChoices[i] + "<br/>");
  	}

  	correctAnswer = allQuestions[questionNumber].correctAnswer;

    progressbar.progressbar({
      max: allQuestions.length,
      value: questionNumber
      
    });
  }

  loadQuestion();

  var allUserAnswers = [];

  var checkAnswer = function(){
        if (userAnswer == correctAnswer) {
          return true;
      }
    };


  var checkPreviousAnswer = function(){
      $('input[name=answer]').each(function(){
         if ( $(this).attr("value") == allUserAnswers[questionNumber] ) {
             this.setAttribute("checked", "checked");
          }
      });
  };

  nextButton.click(function(){
    userAnswer = $("input[name=answer]:checked").val();
    allUserAnswers[questionNumber] = userAnswer;
    if(userAnswer){
      if(questionNumber == 0 ) {
        prevButton.show();
      }

      if (checkAnswer() == true) {
      score +=1;
      } 

      questionNumber +=1;

      if (questionNumber >= allQuestions.length) {
        $("#question").empty();
        $("#question").append("<input id='submit' type='button' value='Submit'></input>");
        
        submitButton = $("#submit");

        $(submitButton).click(function () {
          $("#question").empty();
          $("#question").append("<h2>Score: " + score + "</h2>"); 
          console.log(score);
          console.log("Submituje"); 
          progressbar.progressbar( "destroy" );
        });

        progressbar.progressbar({
          max: allQuestions.length,
          value: allQuestions.length
        });
        return 0;
      }

      currentChoices.empty();
      loadQuestion();
      checkPreviousAnswer();
    }
  });

  prevButton.click(function(){
  allUserAnswers[questionNumber] = userAnswer;
    if(questionNumber>0) {
      questionNumber -=1;
      currentChoices.empty();
      loadQuestion();
      checkPreviousAnswer();
     }
     if (questionNumber == 0) {
      prevButton.hide();
     }
  });

});


