let bgBtnBox = document.getElementById('bg-btn-box')
let btnRegister = document.getElementById('btn-register')
let btnLogin = document.getElementById('btn-login')
let loginForm = document.getElementById('login')
let registerForm = document.getElementById('register')

btnLogin.addEventListener('click',function(){
    bgBtnBox.style.left = '0'
    registerForm.style.left = "500px"
    loginForm.style.left = "2rem"
    
})
btnRegister.addEventListener('click',function(){
    bgBtnBox.style.left = '50%'
    registerForm.style.left = "2rem"
    loginForm.style.left = "-500px"
})