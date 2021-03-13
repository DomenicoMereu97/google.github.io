function inputFunction() {
  var x = document.getElementById("search-box").value;
  return x
  
}



document.getElementById("search-box").addEventListener("keydown", function(event) {
    
    if (event.code === 'Enter') {
        event.preventDefault();
        input = inputFunction();
        location.replace('http://google.com/search?q='+ input)
    }
});







document.getElementById("cerca").addEventListener('click', function(){
    input = inputFunction();
    location.replace('http://google.com/search?q='+ input)


})













