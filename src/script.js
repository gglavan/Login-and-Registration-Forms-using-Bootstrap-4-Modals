const register = document.getElementById('register');
const registerForm = document.getElementById('register-form');
const login = document.getElementById('login');
const loginForm = document.getElementById('login-form');
const actionTitle = document.getElementById('action-title');

console.log(register, login)

register.addEventListener('click', (e) => {
  e.preventDefault();
  console.log('register clicked')
  registerForm.classList.add('not-displayed');
  loginForm.classList.remove('not-displayed');
  actionTitle.innerHTML = 'Login with';
});

login.addEventListener('click', (e) => {
  e.preventDefault();
  console.log('login clicked')
  loginForm.classList.add('not-displayed');
  registerForm.classList.remove('not-displayed');
  actionTitle.innerHTML = 'Register with';
});