



function inputFunction() {
  var x = document.getElementById("search-box").value;
  return x
  
}








document.getElementById("search-box").addEventListener("keydown", function(event) {
    
    if (event!= null && event.code === 'Enter') {
        event.preventDefault();
        input = inputFunction();
        localStorage.setItem("chiave", input);
        console.log(localStorage.getItem("chiave"));
        location.replace('http://google.com/search?q='+ input)
    }
});







inputUserFunction=document.getElementById("cerca").addEventListener('click', function(){
    input = inputFunction();
    localStorage.setItem("chiave", input);
    console.log(localStorage.getItem("chiave"));
    location.replace('http://google.com/search?q='+ input);
    

})





  














