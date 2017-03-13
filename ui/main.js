var button = document.getElementById('counter');
//var counter = 0;        //diff than the above counter id, this is variable
button.onclick = function(){
    //Create a request object
    var request = new XMLHttpRequest();
    //one a request is made, the browser tells us if the response is received. Diff stages.
    
    //Capture the response and store it in a variable
    request.onreadychangestate = function(){
        if(request.readyState === XMLHttpRequest.DONE){
            //Take some action
            if(request.status === 200){
                var counter = request.responseText;     //taking the response from the server, the server returns the //counter to be displayed as html string
                var span = document.getElementById('count');
                span.innerHTML = counter.toString();    //new counter - the value returned from server is displayed in html, in facebook, old feeds get loaded using the same principle, there the returned stuff contains images and other complex stuff and all stored in something like counter in this case and displayed using just the same thing as we did for span.
            }
        }
        else{
            alert('There was a problem with the request.');
        }
        //Request isn't processed(returned) yet
    };
    //Render the variable in the correct span
    request.open('GET','https://vinitvijan26.imad.hasura-app.io/counter',true);
    //request.send(null);
    
};

/*console.log('Loaded!');

//change the text of main-text div
var element = document.getElementById('main-text');
element.innerHTML = 'New Value';

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