
    /*
    //AJAX - Request

    //realizando o pedido ajax

    var xhttp = new XMLHttpRequest();

    // realizando o pedido ajax para versões de navegadores infoeriores a 6
*/  
$(function(){

    /*
        var xhttp = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP");

        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                callback(this.responseText);

            }
        };

    
        xhttp.open("GET", "https://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=af5b4fa657391cfe9edc79c9201c379a");
        xhttp.send();
    *
    



    // response - AJAX
    function tempo(callback){   
        var xhttp = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP");

        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                callback(this.responseText);

            }
        };

    
        xhttp.open("GET", "https://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=af5b4fa657391cfe9edc79c9201c379a");
        xhttp.send();

    }

    function mostrar_temperatura(dados){
        var obj_dados = JSON.parse(dados);

        console.log("A temperatura em Londres eh de: "+obj_dados.main.temp + " graus Celsius");

    }

    tempo(mostrar_temperatura)

    // AJAX com JQuery
*/


function pegar_dados(callback){

    $.ajax({
        url: "https://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=af5b4fa657391cfe9edc79c9201c379a",
        type: "GET",
        dataType: "json",
        success: function(data){
            callback(data);
            console.log(data);

        },
        error: function(){
            console.log("Erro na execução");
        }

    //fim do ajax
    })

// fim da função pegar dados
}


function temperatura(valor){

     //temperatura atual
    $("#temp_atual").html(valor.main.temp);

    //temperatura máxima
    $("#temp_max").html(valor.main.temp_max);

    //temperatura minima
    $("#temp_min").html(valor.main.temp_min);

    //Cidade

    $("#cidade").html(valor.name);






}

pegar_dados(temperatura);

































//Fim da function 
})  


    

  


