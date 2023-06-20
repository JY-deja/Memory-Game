<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Game-App</title>

    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossorigin="anonymous">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4" crossorigin="anonymous"></script>

    <link rel="stylesheet" href="css/styleGame.css">

    <script src="https://cdn.jsdelivr.net/npm/sweetalert2@11" defer></script>
    
    <script type ="text/javascript" src="js/scriptGame.js" defer></script> 
    <style>
        .contin{
            display: none;
        }
    </style> 

</head>
<body>
    <div class="quiz-app w-50">
        <div class="quiz-info shadow">
           <div class="category font-monospace fw-bolder m-1">Category : <span class="text-info fw-bolder">Vocabulary</span> </div>
           <!-- <div class="count font-monospace fw-bolder m-1">Questions Count : <span class="text-info fw-bolder"></span></div>  -->
        </div>
        <div class="quiz-area">
            
        </div>
        <div class="answers-area text-center">
        </div>
        <div class="checkAnswer text-center"></div>
        <div class="d-grid gap-2 d-md-flex justify-content-md-end bg-white div-but">
            <h4 class="repond ms-2 mt-sm-5 fw-bold"></h4>
            <button type="button" class="submit-button btn fw-bold rounded-pill submitButton mt-3 my-5 mx-5 my-sm-5 mx-sm-5">Submit Answer</button>
            <button type="button" class="submit-button btn fw-bold rounded-pill contin mt-0 my-5 mx-5 mx-sm-5 my-sm-5 ">Continue</button>
        </div>
        <div class="bullets bg-white mt-3 shadow">
            <div class="spans mt-3">
                
            </div>
            <!-- <div class="countdown mt-3">
                <span class="minutes">02</span> :
                <span class="secondes">45</span>
            </div> -->
        </div>
        <div class="results mt-4">
           
        </div>
    </div>
</body>
</html>