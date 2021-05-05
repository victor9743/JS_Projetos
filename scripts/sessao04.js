 /*
  BOM

 window.onmousemove = function(e){
    console.log("mouse move");

    // pageY - distancia do mouse para o topo do navegador
        console.log('eixo y: ' + e.pageY) ;

    // pageX - distancia do mouse para o lado esquerdo do navegador
        console.log('eixo x: ' + e.pageX);

    //criando pop up
        if(e.pageY < 5){
            alert(" Não saia !!");
        }
        if(e.pageX > 1372){
            alert("Não saia !!!");
        }

  

    };

    propriedade localstorage = propriedade qdo objeto window que pode armazenar
    dados no computador, memso que ele saia do site


    //window.localStorage.setItem("nome","joao");

    console.log(localStorage["nome"]);

    // removendo uma informação do storage

    localStorage.removeItem("nome");
    
    // exemplo formulario
    

    document.getElementById("enviar").onclick = function(){

        // guardando o nome digitado em localstorage
        var nome = document.getElementById("nome-usuario").value;
        window.localStorage.setItem("nome", nome);
        alert("cadastrado");

        //ocultar
        document.getElementById("nome-usuario").style.display = "none";
        document.getElementById("enviar").style.display = "none";

        //mostrar
        document.getElementById("welcome").style.display = "initial";

        // inserir texto
        document.getElementById("text").innerHTML = "ola " + nome + " seja bem-vindo!!!";

        // inserir span

        document.getElementById("verif").innerHTML = "nao eh " + nome + " ?";
    }
    //console.log(localStorage["nome"]);
    // verifica se há algum storage cadastrado
    if (window.localStorage.nome){

        //ocultar
        document.getElementById("nome-usuario").style.display = "none";

        //mostrar
        document.getElementById("welcome").style.display = "initial";

        // inserir texto
        document.getElementById("text").innerHTML = "olá " + localStorage.nome + " seja bem-vindo!!!";
        document.getElementById("verif").innerHTML = "nao eh " + localStorage.nome + " ?";

    }
    
    document.getElementById("verif").onclick = function(){
        // remover elemento
        window.localStorage.removeItem("nome");

        //ocultar boas-vindas
        document.getElementById("welcome").style.display = "none";

        //mostrar formulario
        document.getElementById("nome-usuario").style.display = "initial";
        document.getElementById("enviar").style.display = "initial";


        
    }
    

    // aula 26 - data e hora
    
    // criando um objeto date
    var data = new Date();

    console.log(data);

    //passando argumentos no objeto

    var data1 = new Date(2019,10,13);



    // utilizando condições com date

    if(data1.getMonth() <=6){
        console.log("Estamos no Primeiro semestre: Mes: " + data1.getMonth());
    }else{
        console.log("Estamos no segundo semestre: Mes:  " + data1.getMonth());

    }

    //calculando data de nascimento

 
    var nascimento = new Date("1998-05-18");

    var hoje = new Date().getFullYear();

    //var idade
    console.log(nascimento.getFullYear());
    console.log("nascimento: "+(hoje-nascimento.getFullYear()));

    calculando milisegundos
    

    var data = new Date();

    console.log(data.getTime() / 31536000000);

    
   //exemplo quantos dias se passou

    var datasaida= (new Date("2018-03-20").getTime() / 86400000);

    var dataentrega= (new Date("2018-04-06").getTime() / 86400000);

    var qtddias = (dataentrega - datasaida);


    document.getElementById("entrega").innerHTML= qtddias + " dias";


    console.log(datasaida);

    console.log(dataentrega);

    // exemplo validade do certificado
    var certificado = (new Date("2020/10/12").getTime()/31536000000);


    var hoje = (new Date().getTime()/31536000000)

    var verificar = (hoje-certificado);

    if(verificar >= 1){
        console.log("certificado com data de validade vencida");
    }else{
        console.log("certificado ok");
    }

    console.log(verificar);
    
    //Metódos de tempo


    setTimeout

    exemplo


    console.log("Hello wolrd 1");

    window.setTimeout(function(){
        console.log("hello wolrd 2");

    },3000);

    mostrando o spinner por 5 segundos
    obs* exemplo criado utilizando o arquivo 27-metodos-tempo.html


    document.getElementById("mostrar-loader").onclick = function (){

        document.getElementById("spinner-loader").style.display = "initial";
        window.setTimeout(function(){
            document.getElementById("spinner-loader").style.display = "none";
        },5000);

        

    }

    setInterval
    

    var count = 0;

    window.setInterval(function(){

        console.log(count);

        count ++;
        if(count == 10){
            count =0 ;
        }

    },1000);

    Criando um relógio    

    
    var segundos = 0;
    var minutos = 0;
    var hora = 0;
    var dia = 0;
    
    window.setInterval(function(){
        segundos ++;
        
        if(segundos > 59){
            segundos=0;
            minutos ++;
             if (minutos > 59){
                segundos=0;
                minutos=0;
                hora ++;
                
             }if (hora > 23){

                segundos=0;
                minutos=0;
                hora=0;
                dia ++;
             }
            
        }
        document.getElementById("relogio").innerHTML= ("Dia: "+ formato(dia) +"<br/> Hora : "+ formato(hora) + ":"+ formato(minutos) + ":" + formato(segundos));
        function formato(qlq){
            if(qlq >=0 && qlq<10){
                var mudar = qlq.toString();
                mudar = "0"+ mudar;
            }else{
                var mudar = qlq.toString();
            }

            return mudar;

        }

        
    },1000);

    
    
    /*
    parando o metodo setinterval

    var count =0;
    var inter = window.setInterval(function(){
        console.log(count);
        
        count ++;
            if(count>10){
                window.clearInterval(inter);
            
            }
    },1000);

    mostrar tempo real
    
   

    window.setInterval(function(){

        var hora1 = new Date().getHours();

        var minutos1 = new Date().getMinutes();
    
        var segundos1 = new Date().getSeconds();
    
        var dia1 = new Date().getDate();
        document.getElementById("tempo-real").innerHTML= "Dia: " + formatar(dia1) + "<br /> Hora: "+ formatar(hora1) +" Minutos: " + formatar(minutos1) + " Segundos: " + formatar(segundos1);

        // mudar o formato
        function formatar (formato){
            if(formato >= 0 && formato<10){
                var mudar = formato.toString();
                mudar = "0"+mudar;

            }else{
                var mudar = formato.toString();
            }
            
            return mudar;
        }

    
    },1000);


   document.getElementById("tempo-real").innerHTML = hora;
    
   
   Comando switch

   

        var op = document.getElementById("valor").innerHTML;

       
       

        switch(op){

            case "1":
                console.log("victor");
                break;
            case "2": 
                console.log("costa");
                break;
            
            case "3":
                console.log("hello wolrd");
                break;
            case "0":
                console.log("Saindo ...");
                break;

            default:
                console.log("Opção inválida");

        }

    comando continue

    exemplo numero par/impar


    var contador = 0;


    while(contador <= 10){
        if(contador % 2 !=0 ){
            contador ++;
            continue;
        }else{
            console.log("Numero par" + contador);
            contador ++;
        }

    }
        
    Formulários


    guardar valores de um campo


   document.getElementById("enviar").onclick = function (){

    var op = document.getElementById("options");

    var selecionado = op.options.selectedIndex;

    var opcaoselecionada = op.options[selecionado].innerHTML;
    
    document.getElementById("opselecionada").innerHTML = opcaoselecionada;
    console.log(selecionado);

   }
   botão radio


    document.getElementById("mostrar_radio").onclick = function(){
        var radio = document.getElementsByName("genero");

        console.log(radio);

        var radio_selected;

        for(var x =0; x <radio.length; x++){
            if(radio[x].checked){
                radio_selected = radio[x].value;
                break;

            }
        }
    
        document.getElementById("res").innerHTML=radio_selected;
    }
        checked boxes

    

    document.getElementById("enviar").onclick = function(){

        document.getElementById("valores").innerHTML ="";
        var chec = document.getElementsByName("verificar");

        var selecao;

        for(var y = 0; y < chec.length; y++){
            if(chec[y].checked){
                selecao=chec[y].value;

                document.getElementById("valores").innerHTML+= "<li>" +chec[y].value+"</li>";
            }
        }

    }

    Tipo Date
    
        document.getElementById("mostrar_data").onclick = function(){
            var data_sel = document.getElementById("informar").value;

            var datacompleta = new Date(data_sel);

            document.getElementById("data").innerHTML=datacompleta;
        }
    
    evento onchange

*/
    var chec = document.getElementsByName("lanche");


        for(var x = 0; x < chec.length; x++){

            chec[x].onchange = function(){

                document.getElementById("valores").innerHTML="";

                for(var y = 0; y < chec.length; y++){
                    if(chec[y].checked){
                        document.getElementById("valores").innerHTML += "<li>" + chec[y].value + "</li>";
                    }
                }
            }
        }

        

    
    
        

        

      
        

    
    






  