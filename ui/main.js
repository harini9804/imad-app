//counter code

var button = document.getElementById('counter');
button.onclick = function() {
    //make request to the counter endpoint
    //capture response in var
    //render variable in correct span
    counter =counter +1;
    var span = document.getElementById('counter');
    span.innerHTML = counter.toString();
    
    
    
};

