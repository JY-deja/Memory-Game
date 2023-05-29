$(document).ready(function () {
    $('#login_form').submit(function (e) { 
        e.preventDefault();
        var formEmail = $("#email").val();
        var formPassword = $("#password").val();
        // $(this).serialize();
        //console.log(formData); 
        $.ajax({
            type: "GET",
            url: "http://127.0.0.1:8000/api/auth/login",
            data: {
                email: formEmail,
                password: formPassword
            },
           // dataType: "dataType",
            success: function (response) {
                console.log(response.token);   
                console.log('good');  
            }
        });
    });
});



// // import axios from 'axios';
// var token ;
// async function login() {
//     // const emailInput = document.querySelector('#email');
//     // const passwordInput = document.querySelector('#password');

//     // const email = emailInput.value;
//     // const password = passwordInput.value;

//     // console.log(email);
//     // console.log(password);
    
//     // try {
//     //     const response = await axios.get('http://127.0.0.1:8000/api/auth/login', {
//     //         email,
//     //         password,
//     //     });
        
//     //     const token = response.data.token;
//     //     localStorage.setItem('token', token);

//     //     return token;
//     // } catch (error) {
//     //     console.error(error);
//     //     return false;
//     // }
//     // //return token;

//     fetch('http://127.0.0.1:8000/api/auth/login', {
//         method: 'GET',
//         headers: {
//             'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//             email: 'deja@gmail.com',
//             password: '12345678',
//         }),
//     })
//         .then(response => response.json())
//         .then(data =>{
//              // Save the token to local storage or session storage
//     localStorage.setItem('token', data.token);
//     // Redirect to a protected page or update UI accordingly
//     window.location.href = 'http://127.0.0.1:8000/dashboard';
//     console.log(token);
//         } )
//         .catch(error => console.error(error));
        
// }
// login ();
// const a = login()

// console.log(token);
