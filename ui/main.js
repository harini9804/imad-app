//counter code

var button = document.getElementById('counter');
counter=0;
button.onclick = function() {
   
    
    //make request to the counter endpoint
    var request= new XMLHttpRequest();
    
    
    //capture response in var
    request.onreadystatechange = function() { if (request.readystate === XMLHttpRequest.DONE)
    //ACTION
    if (request.status ===200){
        var counter = request.responseText;
        var span = document.getElementById('counter');
    span.innerHTML = counter.toString();
    }
    }
    //render variable in correct span
    
    
    
};

