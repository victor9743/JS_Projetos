//ready-> utiliza o JQuery, apos ter carregado todo documento HTML
$(document).ready(function(){
/*Jquery - Sintaxe


// pegar elementos com jquery

$("#hellowolrd").html(

    "Olá Mundo"
);


$("#btn").click(

    function(){
        $(".exemplo").css("display","none");
    }

);

$("#btn1").click(
    function(){
        $(".exemplo").css("display","block");
    }

);

// Manipuçao de conteúdo HTML

// manipulando conteudo do paragrafo

var conteudo = $("#paragrafo_1").html()

console.log(conteudo);

//manipulando link

var url_link = $("#paragrafo-link").attr("href");

console.log(url_link);


var mudar_imagem = $("#mudar").click(
    function(){
    
        $("#imagem").attr("src","data:image/png;base64,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") 
        
    
    
    }


)

removendo o conteúdo html


Empty

$("#paragrafo_02").empty();

remove

$("#paragrafo_03").remove();


Jquery - Loop Each

var lista = ["HTML","CSS","Javascript","JQuery","PHP"];


$.each(lista,function(indice,valor){
    console.log("O elemento do índice [" + indice + "] tem o valor de: " + valor);

});

var lista2 = $("#loop li");


$.each(lista2, function(indice,valor){
console.log(valor);

})

Formulários em JQuery

.val() -> pega o valor 


var conteudo = $("#nome").val();


console.log(conteudo);


var option =$("#options").find(":selected").text();

console.log(option);


//evento change

$("#options").change(function(){
    var selecionado = $("#options").find(":selected").text();

    console.log(selecionado);
});

// radios buttons
var rbutton = $("input[name='genero']:checked").val();

console.log("name" + rbutton)

//pegando texto com a tag span

var rbutton = $("input[name='genero']:checked").parent('span').text();



console.log("span "+rbutton);

//checkbox


$("input[name='interesse']").change(function(){
    var chcbox = $("input[name='interesse']:checked");
    var textos = [];

    $.each(chcbox, function(indice,valor){
        textos.push($(valor).parent("span").text());
    });

    console.log(textos);



});
manipulação de classescss

$(".exemplo").css("text-align","left");

$(".exemplo").css("color","green");


$(".exemplo").css("font-family","Monospace");
$(".exemplo").css("font-size","20px");



//adicionar classe

$("#adicionar_classe").click(function(){
    $("#paragrafo-classes").addClass("styling");
    
});

//remover Classe

$("#remover_classe").click(function(){
    $("#paragrafo-classes").removeClass("styling");

});

//alternar Classe
$("#alternar_classe").click(function(){

    $("#paragrafo-classes").toggleClass("styling");

});
    Eventos

    método On -> permite manipular várioas elementos ao memso tempo

    exemplo:
    $("elemento").on({
        click: function(){
            //código a ser executado no evento click
        }
        mouseenter: function(){
            //código a ser executado ao evento mmouseenter
        }
        mouseleave: function(){
            //código a ser executado ao evento mouseleave
        }
    })

    $("#nome").keyup(function(){
        var texto = $("#nome").val();

        if(texto==""){
            $("#confirmar").hide();
        }else{
            $("#confirmar").show();
        }

    });

    JQuery - efeitos

    $("#esconder").click(function(){
        // this == #esconder
        $(this).hide(1000, function(){
            $("#texto-escondido").show();
        });

        

    })


    $("#toggle-tab").click(function(){

        $("#tab-content").slideToggle();

    })
    
    JQuery - animate

  

    $("#animar").click(function(){
        $("#quadrado").animate({
            width: "+=20px"
        
        },2000);

        $("#quadrado").animate({
            height: "+=20px"
        },2000);

    });

    $("#animar1").click(function(){
        
        $("#quadrado").animate({
            width: "-=20px",
            height: "-=20px"
        },2000);

    });

    JQuery - Metodos em cadeia


    $("#animar").click(function(){
        $("#quadrado").animate({
            width: "+=20px"
        
        },300).animate({
            height: "+=20px"
        },300, function(){
            $("#quadrado").css("background-color" , "green");
        });

    });

    $("#animar1").click(function(){
        
        $("#quadrado").animate({
            width: "-=20px",
            height: "-=20px"
        },300, function(){
            $("#quadrado").css("background-color","red");

        });

    });

     barra de life

    $("#plus").click(function(){

      
            $("#life").animate({
                width: "+=10"

                

            },300).css("background-color","green");
        
    });

    
    $("#minus").click(function(){

      
        $("#life").animate({
            width: "-=10"

            

        },300).css("background-color","red");
    
    })
*/
        

});

