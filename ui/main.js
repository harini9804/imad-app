console.log('Loaded!');
// change the text of main text file
var element= document.getElementById('main-text');
element.innerHTML='new value';

//move the image

var img= document.getElementById('madi');
img.onclick = function () {
    img.style.marginleft = '100px';
};
