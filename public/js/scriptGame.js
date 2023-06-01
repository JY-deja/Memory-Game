// select elemenet
let countSpan = document.querySelector('.count span');
let bulletsSpanContainer = document.querySelector(".bullets .spans");
let quizArea = document.querySelector(".quiz-area");
let answerArea = document.querySelector(".answers-area");
let submitButton = document.querySelector(".submit-button");
let bullets = document.querySelector(".bullets");
let resultsContainer = document.querySelector(".results");
let recorectAnswer ;
let repondStatus = document.querySelector(".repond");
let level;


//Set Options
let currentIndex  ;
let rightAnswers = 0;



window.addEventListener("DOMContentLoaded", function() {
  var urlParams = new URLSearchParams(window.location.search);
  level = urlParams.get("level");

  // Call a function or perform other operations using the `level` variable
  console.log("Received level:", level);

  getQuestions();

});

//create function that تستدعي Data or return data from json
function getQuestions(){
    console.log(level)
    //do XML Http Request
    let myRequest = new XMLHttpRequest();

    //function for check it the status opf repense 
    myRequest.onreadystatechange = function(){
        if(this.readyState === 4 && this.status === 200){
            var questionobject = JSON.parse(this.responseText);
            
            //Index Of The First Question:
            currentIndex = 10*(level - 1);
            
            //number of question
            let totalQuestion = questionobject.words.length;

            //Index Of The Last Question:
            let questionCount = 10*level;

            console.log( currentIndex +' , '+ questionCount);

            //create bullets + set question count
            createBullets(questionCount , totalQuestion);

            //Add Questions Data
            addQuestionsData(questionobject.words[currentIndex] , questionCount);

           if(currentIndex < questionCount)
           {
                //One Of The Answers Selected . That mean Has The Active Class.
                let answer = document.querySelector(".answer").querySelectorAll("button");
                answer.forEach(element => {
                    element.addEventListener("click",function(){
                        
                        answer.forEach(nav=>nav.classList.remove("active"));
                        this.classList.add("active");
                    });
                });
           }

            //Click On Submit
            submitButton.onclick = () =>{

                //Get The Right Answer ; 
                let theRightAnswer = questionobject.words[currentIndex].Correct_Answer;
                let btn = document.querySelectorAll('.btn');
                let correctAnswer = questionobject.words[currentIndex].Correct_Answer;
                let worngAnswer = document.querySelector(".active");

                //Check The Answer
                recorectAnswer = checkAnswer(theRightAnswer, questionCount);
                if(recorectAnswer)
                {
                    repondStatus.classList.add('text-success');
                    submitButton.classList.add('continue');
                    repondStatus.innerHTML = "Correct Answer    <span>&#10003;</span>";
                    submitButton.innerText = "Continue";

                }
                // else if(recorectAnswer === null)
                // {
                //     btn.forEach(element => {
                //         let answer = element.getAttribute('data-answer');
                //         if(answer === correctAnswer){
                //             element.classList.add('active');
                //         }
                //     });
                // }
                else
                {
                    if(worngAnswer != null)
                    {
                        worngAnswer.classList.replace('btn-outline-success','btn-outline-danger');
                    }
                    
                    repondStatus.classList.add('text-danger');
                    submitButton.classList.add('continue');
                    repondStatus.innerHTML = "Wrong Answer    <span>&#10006;</span>";
                    submitButton.innerHTML = "Continue";

                   
                    btn.forEach(element => {
                        let answer = element.getAttribute('data-answer');
                        if(answer === correctAnswer){
                            element.classList.add('active');
                        }
                    });
                    
                }
                
                let nextQst = document.querySelector(".continue");
                nextQst.onclick = () =>{
                    //Increase Index
                    currentIndex++;
                    //Remove Previous Question
                    quizArea.innerHTML = "";
                    answerArea.innerHTML="";
                    repondStatus.innerText =" ";
                    submitButton.classList.remove('continue');
                    submitButton.innerText = "Submit Answer";
                    if(repondStatus.classList.contains('text-success'))
                        repondStatus.classList.remove('text-success');
                    
                    if(repondStatus.classList.contains('text-danger')){
                        repondStatus.classList.remove('text-danger');
                    }
                    btn.forEach(element => {
                        let answer = element.getAttribute('data-answer');
                        if(answer === correctAnswer){
                            element.classList.remove('active');
                        }
                    });
                    // worngAnswer.classList.replace('btn-outline-success','btn-outline-success');
                    //Add Questions Data
                    addQuestionsData(questionobject.words[currentIndex] , questionCount);

                    if(currentIndex < questionCount)
                    {
                        //One Of The Answers Selected . That mean Has The Active Class.
                        let answer = document.querySelector(".answer").querySelectorAll("button");
                        answer.forEach(element => {
                        element.addEventListener("click",function()
                            {
                                answer.forEach(nav=>nav.classList.remove("active"));
                                this.classList.add("active");
                            });
                        });
                    }

                    //Handle Bullets Class
                    handleBullets();

                    //Show The Result 
                    showResult(questionCount);
                }
            }        
        };
        
    };

    myRequest.open("get","http://127.0.0.1:8000/api/words",true);
    //send request
    myRequest.send();

}

// getQuestions();

//create function that crete bullets depend the number of question.
function createBullets(num , totalQuest)
{
    // countSpan.innerHTML = num;
    let numQuest;
    let rest = num - totalQuest ; 
    
    if(rest > 0)
    {
        numQuest = 10 - rest;
    }
    else
    {
        numQuest = 10;
    }

    //create Spans
    for(let i = 0 ; i < numQuest ; i++)
    {
        //create Bullet (span)
        let theBullets = document.createElement("span");
        theBullets.classList.add("bullet");
        theBullets.innerText = i + 1;

        //Check If Its First
        if(i === 0 )
        {
            theBullets.className = "on";
        }

        //append bullets to main bullet container
        bulletsSpanContainer.appendChild(theBullets);
    }
}

function addQuestionsData(obj , count)
{
    console.log('currentIndex '+ obj["Word"]);
    console.log('count '+ count);

    if(currentIndex < count){
        //create H2 The Word Title :
    let questionTiltle = document.createElement("h2");

    //Create Question Text in Upper Case :

    let questionTex = obj["Word"].charAt(0).toUpperCase() + obj["Word"].slice(1) ;
    let questionText = document.createTextNode(questionTex);
    
    //Add Class For Style The text :
    questionTiltle.className = 'fw-semibold fs-1 text-info font-monospace';
    //Append Text To Heading 2 :
    questionTiltle.append(questionText);

    //Append The H2 To Quiz Area
    quizArea.appendChild(questionTiltle);

    //Create Main Answer Div :
    let mainDiv = document.createElement("div");

    //Add Class To Main Div :
    mainDiv.className = 'answer '+ 'row';

    //Create The Answers :
    for(let i =  1 ; i < 4 ; i++)
    {
        //Create Radio Input :
        let radioInput = document.createElement("button");

        //Add Class To Button 
        radioInput.className = 'btn btn-outline-success btn-lg m-4 px-lg-5 col';

        //Add Type + Name + Data-Attribute 
        radioInput.name = "question";
        radioInput.type = "button";
        radioInput.id = `answer_${i}`;
        radioInput.dataset.answer = obj[`Answer_${i}`];

        // //Make First Option Selected
        if(i === 1){
            radioInput.checked = true ;
        }

        //Create Label
        let theLebel = document.createElement("label");

        //Add For Attribute
        theLebel.htmlFor = `Answer_${i}`;

        //create Label Text 
        var theLebelText = document.createTextNode(obj[`Answer_${i}`])
        

        //Add The Text To Lebels
        radioInput.appendChild(theLebelText);

        //Add Input + Label To Main Div
        mainDiv.appendChild(radioInput);
        radioInput.appendChild(theLebel);

        //Append All Divs To answers Area
        answerArea.appendChild(mainDiv);
        
    }
    }
    
    // random : Math.floor(Math.random() * 4)+
}


function checkAnswer(RAns, QCount){

  let answers = document.getElementsByName("question");
  let theChoosenAnswer;

    for(let i = 0 ; i < answers.length ; i++ )
    {
        if(answers[i].classList.contains("active"))
        {
            theChoosenAnswer = answers[i].dataset.answer;
            
        }
    }

    if(RAns === theChoosenAnswer){
        rightAnswers++;
        return true;
    }
    else
    {
        return false;
    }

    
}

function handleBullets(){
    //Get All The Bullets :
    let bulletsSpan = document.querySelectorAll(".bullets .spans span");

    //We Convertir All The Span  In Table
    let arrayOfSpan = Array.from(bulletsSpan);

    arrayOfSpan.forEach((span , index) => {
        if(currentIndex === index){
            span.className = "on";
        }
    });

}

function showResult(count)
{
    let theResultat;
    if(currentIndex === count)
    {
        quizArea.remove();
        answerArea.remove();
        submitButton.remove();
        bullets.remove();

        if(rightAnswers > (count / 2) && rightAnswers < count)
        {
            theResultat = `<span class="good">Good</span>, ${rightAnswers} From ${count} .`;
        }
        else if(rightAnswers === count)
        {
            theResultat = `<span class="perfect">Perfect</span>, All Answers Is Good .`;
        }
        else 
        {
            theResultat = `<span class="bad">Bad</span>, ${rightAnswers} From ${count} .`;
        }

        resultsContainer.innerHTML = theResultat;
        resultsContainer.className = "results mt-4 p-lg-5 bg-white fs-4 font-monospace text-center";
        
    }
}
