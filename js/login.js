const form = document.getElementById("signupform");
form.addEventListener('submit', function (event) {
    event.preventDefault();


    document.getElementById('fullname').value.trim();
    document.getElementById('email').value.trim();
    document.getElementById('password').value.trim();
    document.getElementById('password').value.trim();
    document.getElementById('age-category').value.trim();


    document.getElementById('nameError').textContent = '';
    document.getElementById('emailError').textContent = '';
    document.getElementById('passswordError').textContent = '';
    document.getElementById('ageError').textContent = '';




    let isvalid = true;
    if (fullname === '') {
        document.getElementById('nameerror').textContent = 'full name is required';
        isvalid = false;
    } else if (fullname.length < 3) {
        document.getElementById('nameError').textContent = 'Name must be at least 3 charchacter';
    }
    if (email === '' || !email.includes('@')) {
        document.getElementById('emailError').textContent = 'Please enter a valid name address';
        isvalid = false;
    }
    if (password.length < 6) {
        document.getElementById('passwordError').textContent = 'Password must be at least 6 chaecters';
        isvalid = false;
    }
    if (age - category === '') {
        document.getElementById('ageError').textContent = 'full name is required';
        isvalid = false;
    }
    if (isvalid) {
        alert('form submitted successfully!');
    }
})