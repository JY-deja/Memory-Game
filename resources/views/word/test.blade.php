<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    
    <title>Document</title>
    
</head>
<body>
    hello
</body>
<script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js" ></script>
<script>
// import { default as axios } from "axios/dist/axios.min.js";

let token ;

var formEmail = "test@gmail.com";
var formPassword = "123456789";

axios.get('http://127.0.0.1:8000/api/auth/login',
{
    email: formEmail,
    password: formPassword
});
.then(function(response){
    // token= response.token;
    console.log(response);
});
</script>
</html>