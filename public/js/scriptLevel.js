let rowDiv = document.querySelector(".row");
let noLevel = document.querySelector(".div-nolevel"); 
let loopLevels;


//create function that تستدعي Data or return data from json
function getQuestions(){

    //do XML Http Request
    let myRequest = new XMLHttpRequest();

    //function for check it the status opf repense 
    myRequest.onreadystatechange = function(){
        if(this.readyState === 4 && this.status === 200){
            var questionobject = JSON.parse(this.responseText);
            
            //number of question
            let questionCount = questionobject.words.length;
            //let questionCount = 24;

            //number of the levels and convertir the reselt to integer
            if(questionCount/10 != 0 ){
                if(questionCount%10 >= 3)
                {
                    loopLevels= (questionCount / 10 | 0) + 1;
                }
                else
                {
                    loopLevels= questionCount / 10 | 0;
                }
                
            }
            else{
                loopLevels = questionCount / 10; 
            }
            
            //function of create level card :
            createlevel(loopLevels);

            
        }
    }
    myRequest.open("get","http://127.0.0.1:8000/api/words",true);
    //send request
    myRequest.send();

}
getQuestions();

function createlevel(levels)
{
    if(levels == 0 )
    {
        noLevel.classList.add("position-absolute", "top-50", "start-50", "translate-middle");
        let divNoLevel = document.createElement("div");
        divNoLevel.className = "m-5 text-center div-no-level";
        let titleNoLevel = document.createElement("h1");
        let pargrphNoLevel = document.createElement("p");
        titleNoLevel.className = "text-center nolevel fw-bolder fs-1";
        titleNoLevel.innerText = "No current level available"; 
        pargrphNoLevel.className = "text-center";
        pargrphNoLevel.innerText = "To start the game, please insert at least 3 words for start the first level."; 
        noLevel.append(divNoLevel);
        divNoLevel.appendChild(titleNoLevel);  
        divNoLevel.appendChild(pargrphNoLevel);      
        
    }
    else
    {
        var elementExists = document.querySelector(".div-no-level") !== null;

        if (elementExists)
        {
            document.querySelector(".div-no-level").remove();
        }
        for(i = 1 ; i <= levels ; i++)
        {
            cardLevel = `
            <div class="col">
            <div class="card">
              <div class="card-body m-md-3 m-lg-4 m-2 ">
                
                    <h1 class="card-title text-center text-white border rounded-circle  m-lg-1 m-md-0 m-2 level stretched" data-value =`+i+`>`
                    +i+`</h1>  
              </div>
            </div>
          </div>
            `;
            rowDiv.innerHTML += cardLevel;
            
            // levelI.onclick() =>{
                
            // }
        }
    }

    let levelI = document.querySelectorAll(".level");
    let level;
    // console.log(levelI);
    levelI.forEach((Element)=>{
        //how to get data-value of element by javascript?

        Element.onclick = () => {
            level = Element.getAttribute('data-value');

            // begin = 10*(level - 1) + 1;
            // end = 10*level;
            window.location.href = "http://127.0.0.1:8000/game?level=" + encodeURIComponent(level);
        }

        // data = Element.getAttribute('data-value');
        // console.log(data);
        
    })
}