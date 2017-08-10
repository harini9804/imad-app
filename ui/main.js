//counter code

var button = document.getElementById('counter');
var counter = 0;
button.onclick = function() {
   
    
    //make request to the counter endpoint
    var request= new XMLHttpRequest();
    
    
    //capture response in var
    request.onreadystatechange = function() 
    { if (request.readystate === XMLHttpRequest.DONE){
    //ACTION
            if (request.status ===200){
                var counter = request.responseText; 
                var span = document.getElementById('count');
            span.innerHTML = counter.toString();
            }
         }
         //make request
        
    };
    //make request
    request.open('GET','http://harini9804.imad.hasura-app.io/counter',true);
         request.send(null);
    
    
};

