//counter code

var button = document.getElementById('counter');

button.onclick = function() {
   
    
    //make request to the counter endpoint
    var request= new XMLHttpRequest();
    
    
    //capture response in var
    request.onreadystatechange = function() { if (request.readystate === XMLHttpRequest.DONE){
    //ACTION
            if (request.status ===200){
                var counter = request.responseText; 
                var span = document.getElementById('counter');
            span.innerHTML = counter.toString();
            }
         }
         //make request
        
    };
    //render variable in correct span
     request.open('GET','http://harini9804.imad.hasura-app.io/counter',true);
         request.send(null);
    
    
};

