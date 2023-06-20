<x-app-layout>
    <x-slot name="header">
        <h2 class="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
            {{ __('Dashboard') }}
        </h2>
    </x-slot>

    <div class="py-12">
        <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
            <div class="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
                <div class="p-6 text-gray-900 dark:text-gray-100">
                    {{ __("You're logged in!") }}
                </div>
            </div>
        </div>
    </div>
    

</x-app-layout>


<script>
    //compared the right answer to the correct answer:
            // if(rightAnswers > (countQust / 2) && rightAnswers < countQust)
        // {

            


           

        //     // for the next button we don't added just for the situation when has more the question . if the has not we don't add
        //     theResultat = `
        //                 <div class="card " >
        //                     <img src="images/congrats-15.gif" class="card-img-top " alt="...">
        //                     <div class="card-body">
        //                         <p class="card-text mt-4"><span class="good">Good</span>, ${rightAnswers} From ${countQust}.</p>
        //                         <a href="`+url+`" class="btn btn-success mt-2 float-right">Next</a>
        //                         <a href="http://127.0.0.1:8000/levels" class="btn btn-danger mt-2 float-left">Back</a>
        //                     </div>
        //                 </div>           
        //     `;
        // }
        // else if(rightAnswers === countQust)
        // {
        //     theResultat = `
        //                 <div class="card " >
        //                     <img src="images/emoji-eccellente.gif" class="card-img-top " alt="...">
        //                     <div class="card-body">
        //                         <p class="card-text mt-4"><span class="perfect">Perfect</span>, All Answers Is Good.</p>
        //                         <a href="`+url+`" class="btn btn-success mt-2 float-right">Next</a>
        //                         <a href="http://127.0.0.1:8000/levels" class="btn btn-danger mt-2 float-left">Back</a>
        //                     </div>
        //                 </div>          
        //     `;
        // }
        // else 
        // {
        //     theResultat = `
        //                 <div class="card " >
        //                     <img src="images/giphy (1).gif" class="card-img-top " alt="...">
        //                     <div class="card-body">
        //                         <p class="card-text mt-4"><span class="bad">Bad</span>, ${rightAnswers} From ${countQust}.</p>
        //                         <a href="`+url+`" class="btn btn-success mt-2 float-right">Next</a>
        //                         <a href="http://127.0.0.1:8000/levels" class="btn btn-danger mt-2 float-left">Back</a>
        //                     </div>
        //                 </div>
        //     `;
        // }
</script>