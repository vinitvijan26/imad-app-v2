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
