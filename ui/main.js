//submit username password to login

var submit = document.getElementById('submit_btn');
submit.onclick = function() {
 
 //create request object
 var request = new XMLHttpRequest();
 //capture the response and store it in a variable
 request.onreadstatechange = function() {
     if(request.readyState  === XMLHttpRequest.DONE) {
         if(request.status === 200) {
             console.log('user logged in');
             alert('logged in succeddfully');
             
         }else if (request.status===403){
         alert('username/password is invalid');}
         else if (request.status===500) {
             alert('Something went wrong in the server');
         }
         
     
     
     }
 };
  //make req to server and send name
  //capture list of names and render it
 
 
    var username = document.getElementById('username').value;
    var password= document.getElementById('password').value;
    console.log(username);
    console.log(password);
    
    
    request.open('POST', 'http://harini9804.imad.hasura-app.io/login',true);
    request.send(JSON.stringify({username: username, password: password}));
  
    



};