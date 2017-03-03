var button = document.getElementById('counter');
var counter = 0;        //diff than the above counter id, this is variable
button.onclick = function(){
    
    //Make a request to counter endpoint
    //Capture the response and store it in a variable
    //Render the variable in the correct span
    counter = counter + 1;
    var span = document.getElementById('count');
    span.innerHTML = counter.toString();
    
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