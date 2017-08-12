//Counter code
var button = document.getElementById('counter');

button.onclick = function(){

    //Create a request object
    var request = new XMLHttpRequest();
    
    //Capture the response and store it in a variable
    request.onreadystatechange = function(){
        if(request.readyState === XMLHttpRequest.DONE){
            //Take some action
            if(request.status === 200){
                var counter = request.responseText;
                var span = document.getElementById('count');
                span.innerHTML = counter.toString();
            }
            
        }
        /*else{
            alert('There was a problem with the request.');
        }
        Not done yet*/
    };

    //Make the request
    request.open('GET','/counter',true);
    request.send(null);
    
};

// Submit username/password to login
    var submit = document.getElementById('login_btn');
    submit.onclick = function () {
        // Create a request object
        var request = new XMLHttpRequest();
        
        // Capture the response and store it in a variable
        request.onreadystatechange = function () {
          if (request.readyState === XMLHttpRequest.DONE) {
              // Take some action
              if (request.status === 200) {
                  submit.value = 'Sucess!';
              } else if (request.status === 403) {
                  submit.value = 'Invalid credentials. Try again?';
              } else if (request.status === 500) {
                  alert('Something went wrong on the server');
                  submit.value = 'Login';
              } else {
                  alert('Something went wrong on the server');
                  submit.value = 'Login';
              }
          }  
          // Not done yet
        };
        
        // Make the request
        var username = document.getElementById('username').value;
        var password = document.getElementById('password').value;
        console.log(username);
        console.log(password);
        request.open('POST', '/login', true);
        request.setRequestHeader('Content-Type', 'application/json');
        request.send(JSON.stringify({username: username, password: password}));  
        submit.value = 'Logging in...';
        
    };
    
    var register = document.getElementById('register_btn');
    register.onclick = function () {
        // Create a request object
        var request = new XMLHttpRequest();
        
        // Capture the response and store it in a variable
        request.onreadystatechange = function () {
          if (request.readyState === XMLHttpRequest.DONE) {
              // Take some action
              if (request.status === 200) {
                  alert('User created successfully');
                  register.value = 'Registered!';
              } else {
                  alert('Could not register the user');
                  register.value = 'Register';
              }
          }
        };
        
        // Make the request
        var username = document.getElementById('username').value;
        var password = document.getElementById('password').value;
        console.log(username);
        console.log(password);
        request.open('POST', '/create-user', true);
        request.setRequestHeader('Content-Type', 'application/json');
        request.send(JSON.stringify({username: username, password: password}));  
        register.value = 'Registering...';
    
    };
}


//Array code
/*var button2 = document.getElementById('submit_btn');

button2.onclick = function(){
	//Submit name 		put a condition for non-empty input
	var nameInput = document.getElementById('name');
	var name = nameInput.value;

	//Create a request object
    var request = new XMLHttpRequest();
    
    //Capture the list of names and render it as a list
	request.onreadystatechange = function(){
        if(request.readyState === XMLHttpRequest.DONE){
            //Take some action
            if(request.status === 200){
                var names = request.responseText;
                names = JSON.parse(names);
                var list = '';
				for(var i = 0; i < names.length; i++){
					list += '<li>' + names[i] + '</li>';
				}
				var ul = document.getElementById('ul');
				ul.innerHTML = list;
            }
        }
        /*else{
            alert('There was a problem with the request.');
        }
        Not done yet
    };
	//Make the request
    request.open('GET','/submit-name?name=' + name,true);
    request.send(null);
};*/



/*//console.log('Loaded!');
//change the text of main-text div
//var element = document.getElementById('main-text');
//element.innerHTML = 'New Value';
var img = document.getElementById('madi');
var marginLeft = 0;
function moveRight(){
    marginLeft = marginLeft + 10;
    img.style.marginLeft = marginLeft + 'px';
}
img.onclick=function(){
    var interval = setInterval(moveRight,100);
    //img.style.marginLeft = '100px';
};*/
