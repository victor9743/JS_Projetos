$(function(){
/*Exercicio 1*/


    function countries(callback){
        $.ajax({

            url: "https://restcountries.eu/rest/v2/all",
            type: "GET",
            dataType: "json",
            success: function(paises){
               
               
               
                callback(paises);
    
                
            },
            error: function(){
                console.log("Erro na execução");
            }
        
        })
    
        
    }

    function popular_paises(paises){


        for(var x=0; x<=paises.length; x++){
            document.getElementById("paises").innerHTML += '<option value="'+paises[x].alpha2Code+'">'+paises[x].name+'</option>"'

        }
        console.log(paises);
    }
 
    countries(popular_paises);






})
