// console.log("document = ", document);
var user = document.querySelector('#user');
var shield = document.querySelector('#shield_icon');
var dollar = document.querySelector('#dollar_icon');
var submit_btn = document.querySelector('#submit-btn');

user_icon1 = document.querySelector('#user_icon');
user_icon2 = document.querySelector('#user_icon1');

shield1 = document.querySelector('#shield');
shield2 = document.querySelector('#shield1');

dollar1 = document.querySelector('#dollar');
dollar2 = document.querySelector('#dollar1');

user.addEventListener('click', function() {
    var x = document.querySelector('#form_section');
    var y = document.querySelector('#email-verify');
    
    user_icon2.style.display = 'block';
    shield2.style.display = 'none';
    dollar2.style.display = 'block';
    user_icon1.style.display = 'none';
    shield1.style.display = 'block';
    dollar1.style.display = 'none';

    x.style.display = "block";
    y.style.display = 'none';
});

shield.addEventListener('click', function() {
    var x = document.querySelector('#form_section');
    var y = document.querySelector('#email-verify');
    
    user_icon2.style.display = 'none';
    shield2.style.display = 'block';
    dollar2.style.display = 'none';
    user_icon1.style.display = 'block';
    shield1.style.display = 'none';
    dollar1.style.display = 'block';

    x.style.display = "none";
    y.style.display = 'block';
});

var eye_pass = document.querySelector('#eye-pass');
var eye_cpass = document.querySelector('#eye-cpass');
var pwd = document.querySelector('#pwd');
var cpwd = document.querySelector('#cpwd');

eye_pass.addEventListener('click', function(){
    if (pwd.type == 'password'){
        pwd.type = 'text';
    } else {
        pwd.type = 'password';
    }
});
eye_cpass.addEventListener('click', function(){
    if (cpwd.type == 'password'){
        cpwd.type = 'text';
    } else {
        cpwd.type = 'password';
    }
});

submit_btn.addEventListener('click', function(){
    var x = document.querySelector('#form_section');
    var y = document.querySelector('#email-verify');
    x.style.display = 'none';
    y.style.display = 'block';
    user_icon1.style.display = 'block';
    user_icon2.style.display = 'none';
    
    shield2.style.display = 'block';
    shield1.style.display = 'none';
});