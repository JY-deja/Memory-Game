let dataTableBody = document.querySelector('.dataTableBody');
let idModalUpdate = document.getElementById('Update-modal');
let valueWord = document.querySelector('.valueWord');
let valueMeaning= document.querySelector('.valueMeaning');
let element = document.getElementById("Update-modal");
// let token1 = localStorage.getItem('token');

async function getData(){
    const records = await fetch(`http://127.0.0.1:8000/api/words?token=${token}`)
    const data = await records.json()
    let tab = '';
    data.words.forEach(function(word){
        tab += `
        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
    <td class="px-6 py-4 font-semibold text-black dark:text-white text-center">
        ${word.Word}
    </td>
    <td class="px-6 py-4 font-semibold text-black dark:text-white text-center ">
        ${word.Correct_Answer}
    </td>
    <td class="px-6 py-4">
        <a type="button" data-modal-target='Update-modal' data-modal-toggle = 'Update-modal' class="inline-block text-center flex justify-center btn" onclick="updateItems(${word.id})" id="openModal">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-blue-400" fill="none"
            viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
            </svg>
        </a>
    </td>
    <td class="px-6 py-4">
        <a href="#" class="inline-block text-center flex justify-center" onclick="removeItems(${word.id})" id = "delete">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
            </svg>
        </a>
    </td>
</tr>
        `
        dataTableBody.innerHTML = tab;

})
}
getData();


$(document).ready(function () {
    $('#datatable').DataTable();
    getData();
});

// Form update Data With JavaScript Fetch API
function updateItems(index){
    fetch(`http://127.0.0.1:8000/api/words/${index}/edit?token=${token}`, { 
            method:'GET'
        }).then(res => res.json())
          .then(data => {
            if(data.Status === 200){
                valueWord.value = data.Word.word;
                valueMeaning.value = data.Word.meaning;
            }
        });
        const formUpdate = document.getElementById('formUpdate');
        formUpdate.addEventListener('submit',event =>{
            event.preventDefault();
            const updateFormData = new FormData(formUpdate);
            const data = new URLSearchParams(updateFormData);
            fetch(`http://127.0.0.1:8000/api/words/${index}/update?token=${token}`, {
                method: 'PUT',
                body:data
            }).then(res => res.json())
            .then(data => {
                if(data.Status === 200)
                {
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: data.Message,
                        showConfirmButton: false,
                        timer: 1500
                    });

                    getData();
                    var modal_backdrop = document.querySelector('div[modal-backdrop]');
                    element.style.display = "none";
                    modal_backdrop.remove();
                }
                else if(data.Status === 500 || data.Status === 404)
                {
                    swal.fire({
                        position: 'top-end',
                        icon: 'warning',
                        title: data.Message,
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })
            .catch(eror =>
                console.log(eror)
            );
        })
}

//fetch delete api javascript 
function removeItems(index){
    console.log(index)
    Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
        if (result.isConfirmed) {
            fetch(`http://127.0.0.1:8000/api/words/${index}/delete?token=${token}`, {
               method: 'DELETE'
            }).then(res=> res.json())
            .then(data => {
                Swal.fire(
                    'Deleted!',
                    data.Message,
                    'success'
                )
                getData()
            })
        }
    });
}







































































































// AllWords.forEach(word => {
//     let markupTheDataTable = `
//     <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
//     <td class="w-28 p-4">
//         <img src="/images/freundin.jpg" alt="Apple Watch">
//     </td>
//     <td class="px-6 py-4 font-semibold text-black dark:text-white text-center">
//         ${word.Word}
//     </td>
//     <td class="px-6 py-4 font-semibold text-black dark:text-white text-center ">
//         ${word.Correct_Answer}
//     </td>
//     <td class="px-6 py-4">
//         <a href="#" class="inline-block text-center flex justify-center">
//             <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-blue-400"
//                 fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                 <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
//                     d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
//             </svg>
//         </a>
//     </td>
//     <td class="px-6 py-4">
//         <a href="#" class="inline-block text-center flex justify-center">
//             <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-red-400"
//                 fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                 <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
//                     d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
//             </svg>
//         </a>
//     </td>
// </tr>
//     `
// dataTableBody.innerHTML += markupTheDataTable;
// });


