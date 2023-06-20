// select elemenet
let countSpan = document.querySelector('.count span');
let bulletsSpanContainer = document.querySelector(".bullets .spans");
let quizApp = document.querySelector(".quiz-app");
let quizArea = document.querySelector(".quiz-area");
let quizInfo = document.querySelector(".quiz-info");
let divBut = document.querySelector(".div-but");
let answerArea = document.querySelector(".answers-area");
let submitButton = document.querySelector(".submitButton")
let resultsContainer = document.querySelector(".results");
let recorectAnswer ;
let repondStatus = document.querySelector(".repond");
let bullets = document.querySelector(".bullets");
let level;


//Set Options
let currentIndex  ;
let rightAnswers = 0;



window.addEventListener("DOMContentLoaded", function() {
  var urlParams = new URLSearchParams(window.location.search);
  level = urlParams.get("level");

  // Call a function or perform other operations using the `level` variable
  getQuestions();

});

//create function that تستدعي Data or return data from json
function getQuestions(){
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
            let questionCount;

            //verifie the question:
            let qC = 10*level;

            if (totalQuestion < qC)
                questionCount = totalQuestion;
            else
                questionCount = qC;

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
                recorectAnswer = checkAnswer(theRightAnswer, questionCount);
                let nextQst = document.querySelector(".contin");
                
                submitButton.style.display = "none";
                nextQst.style.display = "block";

                verifieReponse(theRightAnswer,recorectAnswer);

                let btn = document.querySelectorAll('.btn');

                nextQst.onclick = () =>{

                    nextQst.style.display = "none";
                    submitButton.style.display = "block";
                    //Increase Index
                    currentIndex++;
                    //Remove Previous Question
                    quizArea.innerHTML = "";
                    answerArea.innerHTML="";
                    repondStatus.innerText =" ";
                    submitButton.classList.remove('submitButton');
                    submitButton.classList.remove('continue');
                    submitButton.innerText = "Submit Answer";
                    if(repondStatus.classList.contains('text-success'))
                        repondStatus.classList.remove('text-success');
                    
                    if(repondStatus.classList.contains('text-danger')){
                        repondStatus.classList.remove('text-danger');
                    }
                    btn.forEach(element => {
                        let answer = element.getAttribute('data-answer');
                        if(answer === theRightAnswer){
                            element.classList.remove('active');
                        }
                    });
                    
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
                    handleBullets(recorectAnswer);

                    //Show The Result 
                    showResult(questionCount, level);
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
    let numQuest = num - ((level - 1 )*10);
    // let rest = num - totalQuest ; 
    
    // if(rest > 0)
    // {
    //     numQuest = 10 - rest;
    // }
    // else
    // {
    //     numQuest = 10;
    // }

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
            theBullets.className = "first";
        }

        //append bullets to main bullet container
        bulletsSpanContainer.appendChild(theBullets);
    }
}

function addQuestionsData(obj , count)
{
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
        radioInput.className = 'btn btn-outline-success m-4 px-lg-4 col';

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

function handleBullets(aNS){
    //Get All The Bullets :
    let bulletsSpan = document.querySelectorAll(".bullets .spans span");
    let indexBullet = Math.trunc(currentIndex % 10) - 1;
    // console.log(indexBullet);

    //We Convertir All The Span  In Table
    let arrayOfSpan = Array.from(bulletsSpan);

    arrayOfSpan.forEach((span , index) => {
        if(indexBullet === index){
            if(aNS)
            {
                span.className = "on";
            }
            else
            {
               span.className = "ouf"; 
            }
            
        }
    });

}

function showResult(count,lvl)
{
    let theResultat;
    if(currentIndex === count)
    {
        divBut.remove();
        quizInfo.remove();
        quizArea.remove();
        answerArea.remove();
        submitButton.remove();
        bullets.remove();

        let url = "http://127.0.0.1:8000/game?level="+ (lvl+1);
        if(rightAnswers > (count / 2) && rightAnswers < count)
        {
            
            theResultat = `
                        <div class="card " >
                            <img src="images/congrats-15.gif" class="card-img-top " alt="...">
                            <div class="card-body">
                                <p class="card-text mt-4"><span class="good">Good</span>, ${rightAnswers} From ${count} .</p>
                                <a href="`+url+`" class="btn btn-success mt-2 float-right">Next</a>
                                <a href="http://127.0.0.1:8000/levels" class="btn btn-danger mt-2 float-left">Back</a>
                            </div>
                        </div>           
            `;
        }
        else if(rightAnswers === count)
        {
            theResultat = `
                        <div class="card " >
                            <img src="images/emoji-eccellente.gif" class="card-img-top " alt="...">
                            <div class="card-body">
                                <p class="card-text mt-4"><span class="perfect">Perfect</span>, All Answers Is Good.</p>
                                <a href="`+url+`" class="btn btn-success mt-2 float-right">Next</a>
                                <a href="http://127.0.0.1:8000/levels" class="btn btn-danger mt-2 float-left">Back</a>
                            </div>
                        </div>          
            `;
        }
        else 
        {
            theResultat = `
                        <div class="card " >
                            <img src="images/giphy (1).gif" class="card-img-top " alt="...">
                            <div class="card-body">
                                <p class="card-text mt-4"><span class="bad">Bad</span>, ${rightAnswers} From ${count}.</p>
                                <a href="`+url+`" class="btn btn-success mt-2 float-right">Next</a>
                                <a href="http://127.0.0.1:8000/levels" class="btn btn-danger mt-2 float-left">Back</a>
                            </div>
                        </div>
            `;
        }

        resultsContainer.innerHTML = theResultat;
        resultsContainer.className = "results fs-4 font-monospace text-center";
        // resultsContainer.className = "results mt-4 p-lg-5 bg-white fs-4 font-monospace text-center";

        quizApp.className = "quiz-app w-25";
        quizApp.style.padding = "0px;"
        
    }
}

function verifieReponse(rightAnswer , recorectAnswer){
    let btn = document.querySelectorAll('.btn');

    // let correctAnswer = questionobject.words[currentIndex].Correct_Answer;
    let worngAnswer = document.querySelector(".active");

    //Check The Answer
                if(recorectAnswer)
                {
                    repondStatus.classList.add('text-success');
                    submitButton.classList.add('continue');
                    repondStatus.innerHTML = "Correct Answer    <span>&#10003;</span>";
                    submitButton.innerText = "Continue";
                    submitButton.classList.remove('submitButton');

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
                    submitButton.classList.remove('submitButton');

                   
                    btn.forEach(element => {
                        let answer = element.getAttribute('data-answer');
                        if(answer === rightAnswer){
                            element.classList.add('active');
                        }
                    });
                    
                }
}

