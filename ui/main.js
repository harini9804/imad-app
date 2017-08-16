//submit username password to login

var submit = document.getElementById('submit_btn');
submit.onclick = function() {
 
 //create request object
 var request = new XMLHttpRequest();
 //capture the response and store it in a variable
 request.onreadstatechange = function() {
     if(request.readyState  === XMLHttpRequest.DONE) {
         if(request.status === 200) {
             var names = request.responseText;
             names = JSON.parse(names);
             var list = '';
            for(var i=0;i<names.length;i++){
            list+='<li>'+ names[i]+'</li>';
         }
         var ul = document.getElementById('namelist');
ul.innerHTML=list;
     }
     }
 };
  //make req to server and send name
  //capture list of names and render it
 
 
    var nameInput = document.getElementById('name');
    var name = nameInput.value;
    request.open('POST', 'http://harini9804.imad.hasura-app.io/submit-name?='+name,true);
    request.send(null);
  
    



};