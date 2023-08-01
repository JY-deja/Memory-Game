// Get Data From API & Display in HTML With JavaScript
let jsSwip = document.querySelector('.jsSwip');
let elem = document.getElementById("Create-modal");
let token = localStorage.getItem('token');

function loadJson()
{
    
    let Request = new XMLHttpRequest();
    
    //function for chech it the status of reponse 
    Request.onreadystatechange = function()
    {
        if(this.readyState ===4 && this.status === 200)
        {
            var data = JSON.parse(this.responseText);
            //
            let AllWords = data.words;

            let markupTheDashboard = ``;
            AllWords.forEach(word => {
                 markupTheDashboard += `
                 <div class="card swiper-slide">
                 <div class="card_image mb-6">
                     <img src="images/wordImage.png" alt="img">
                 </div>
                 <div class="card_content mt-5">
                     <span class="card_title mt-3 text-2xl">
                         ${word.Word}
                     </span>
                     <span class="card_name mt-4 text-2xl">
                         ${word.Correct_Answer}
                     </span>
                 </div>    
               </div>
                `;
            });
          
            jsSwip.innerHTML = markupTheDashboard;


        }
    };

    Request.open(
            'get', 
            `http://127.0.0.1:8000/api/words?token=${token}`,
            true
    );
    //send request
    Request.send();
}


loadJson();
var swiper = new Swiper(".mySwiper",{
    loop : true, 
    autoplay : true,
    autoplayTimeout:500,
    autoplayHoverPause:true,
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 0,
      stretch: 2,
      depth: 400,
      modifier:1,
      slideShadows: false,
    },
    pagination: {
      el: ".swiper-pagination",
    },
});

function postData()
{
    const form = document.getElementById("form");
    form.addEventListener('submit', event => {
        event.preventDefault();

        const formData = new FormData(form);
        const data = new URLSearchParams(formData);

        fetch(`http://127.0.0.1:8000/api/words?token=${token}`, {
            method: 'POST',
            body : data
        }).then(res=> res.json())
          .then(data => {
            if(data.Status === 200){
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: data.Message,
                    showConfirmButton: false,
                    timer: 1500
                });
                loadJson();
                var modal_backdrop = document.querySelector('div[modal-backdrop]');
                elem.style.display = "none";
                modal_backdrop.remove();
            }
            else if(data.Status === 500 )//|| data.Status === 422
            {
                Swal.fire({
                    position: 'top-end',
                    icon: 'warning',
                    title: data.Message,
                    showConfirmButton: false,
                    timer: 1500
                });
            }
          })
          .catch(err => console.log(err));
});
}
postData();



