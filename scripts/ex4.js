/*
    Exercicio 1


   document.getElementById("estados").onchange = function(){

    localStorage.setItem("estado",document.getElementById("estados").value);

   }
   if (localStorage.estado){
       document.getElementById("estados").value=localStorage.estado;
   }

   Exercicio 2

   document.getElementById("confirmar").onclick = function(){
    var selec = document.getElementById("envio").value;

    if(selec == "escolha"){
        alert("Escolha um modelo de envio");
    }else{
        if(selec =="normal"){
            var dias_entrega =18;
            
        }else if(selec =="express"){
            var  dias_entrega=12;
        }
    

        var data_envio = new Date().getTime();
        var data_entrega = data_envio + (dias_entrega * 86400000);

        document.getElementById("pedido").innerHTML = format_date(data_envio);
        document.getElementById("entrega").innerHTML = format_date(data_entrega);
        
    }

   };
    //gerar dia, mes e ano

    //mostra a data atual * timestamp *
   function format_date(timestamp){
    var dia = add_left_zero( new Date(timestamp).getDate());
    var mes = add_left_zero( new Date(timestamp).getMonth() + 1);
    var ano = add_left_zero( new Date(timestamp).getFullYear());

    return dia + "/" + mes + "/" + ano;

   }
    // formatar o zero antes do numero
    function add_left_zero(number){
        if(number < 10){
            return "0" + number.toString();
        } else {
            return number.toString();
        }
    }

    Exercicio 3

    começar e parar o cronômetro
*/
    var iniciado = false, hora_inicio, resto, hora_atual, tempo_passado, init_cronometro, hora, minutos, segundos, milisegundos;

    document.getElementById("comecar").onclick = function(){
        if(iniciado == false){
            iniciado = true;
            document.getElementById("comecar").innerHTML ="Parar";

            if(!hora_inicio){
                hora_inicio = new Date().getTime();
            }else{
                hora_inicio = new Date().getTime() - tempo_passado;

            }

            init_cronometro = window.setInterval(function(){

                hora_atual = new Date().getTime();

                tempo_passado = hora_atual - hora_inicio;

                horas = Math.floor(tempo_passado / 3600000);
                resto = tempo_passado - (horas * 3600000);

                minutos = Math.floor(resto / 60000);
                resto -= minutos * 60000;

                segundos = Math.floor(resto / 1000);
                resto -= segundos * 1000;

                milisegundos =resto;

                document.getElementById("relogio").innerHTML = add_left_zero(horas) + ":" + add_left_zero(minutos) + ":" + add_left_zero(segundos) + " " + add_left_zero(milisegundos);

            },10);
        }else{
            window.clearInterval(init_cronometro);
            iniciado = false;
           
            document.getElementById("comecar").innerHTML ="Começar";
        }
    }
        //zerar cronômetro

        document.getElementById("zerar").onclick = function(){
            tempo_passado=0;
            hora_inicio = new Date().getTime();
            document.getElementById("relogio").innerHTML = "00:00:00 000";
              
        }

        function add_left_zero(number){
            if(number < 10){
                return "0" + number.toString();
            } else {
                return number.toString();
            }
        }
/*
    Exercicio 4


    var carros = [

        {
            'placa': 'AAA-0198',
            'categoria': '1',
        },

        {
            'placa': 'HBP-2837',
            'categoria': '2',
        },

        {
            'placa': 'PLQ-0928',
            'categoria': '4',
        },

        {
            'placa': 'KQE-2093',
            'categoria': '5',
        },

        {
            'placa': 'AMR-9087',
            'categoria': '5',
        },

        {
            'placa': 'BQE-8111',
            'categoria': '3',
        },

        {
            'placa': 'GXL-9001',
            'categoria': '2',
        },

        {
            'placa': 'KPM-7740',
            'categoria': '1',
        }

    ];

    function valor_a_pagar(veiculo){

        switch(veiculo.categoria){
            
            case "1":
                return 11.22;
                break;
            
            case "2":
                return 22.45;
                break;
            
            case "3":
                return 16.88;
                break;
            
            case "4":
                return 33.65;
                break;

            default:
                console.log("vaículo de placa "+ veiculo.placa + "não fez pagamento por erro de categoria")
                return 0;

        }
    }

    var total_arrecadado =0;

    for(var x = 0; x <carros.length; x++){

        total_arrecadado += valor_a_pagar(carros[x]);
    }

    document.getElementById("valorarrec").innerHTML=total_arrecadado.toFixed(2);
*/