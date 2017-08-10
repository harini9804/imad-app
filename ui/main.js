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

var nameInput = document.getElementById('name');
var submit = document.getElementById('submit_btn');
submit.onclick = function() {
    
  //make req to server and send name
  //capture list of names and render it
  var names = ['name1','name2','name3'];
  var list = '';
  for(var i=0;i<names.length;i++){
      list+='<li>'+ names[i]+'</li>';
    
}
var ul = document.getElementById('namelist');
ul.innerHTML=list;

};