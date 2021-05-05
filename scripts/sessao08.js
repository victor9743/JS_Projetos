$(function(){
    /*Orçamento Função callback 

    function pegar_usuario(callback){

        window.setTimeout(function(){
            var u = {
                "nome":"joão"
            };
           

            callback(u);


        },2000)
      
    }

    function saudar_usuario(user){
         console.log("olá " + user.nome + ", como vai?");
    }

   pegar_usuario(saudar_usuario);

    Lidando com erros try catch e throw

   

   function pegar_usuario(){
       window.setTimeout(function(){

        var u ={
            "nome" : "joão"

        };
        return u;

       },1000);
   }

   function saudar_usuario(user){
       console.log("Olá "+user.nome + ", como vai?");
   }


   var user ={"nome":" "}

   try{
        if(user.nome==" "){
            throw "nome em branco"

        }
         saudar_usuario(user);

    }catch(err){
        console.log(err);

    }
    //console.log("novo comando para executar ao final");
   

    if ternário

    
    var nome ="";


    nome ? console.log("valo não estar vazio"): console.log("valor vazio");

    // if ternário com multiplas condições


    var idade=40;

    var nome= "";

    var resultado = (idade && nome) ? "Nome: "+nome+" Idade: " +idade
    : (!idade && !nome) ? "Nome e idade não informados"
    :(!idade) ? "Idade não informada"
    : "Nome não informado"


    console.log(resultado);

   Namespaces
    
   metodo com objetos
   

    var meuwebapp={
        "nome":"nome qualquer",
        "ver_nome":function(){

            console.log(meuwebapp);
        //fim da function
        }
    

        //fim do namespace
    }
    
    meuwebapp.ver_nome();
   
    metodo cmo funções
    
   
    var funcoes =(function(){
        var nome = "Felipe";

        return {
            "ver_nome":function(){
                return nome
            },
            "mudar_nome":function(novo_nome){
                nome = novo_nome;
            },
            "remover_nome":function(){
                nome = null;
            }


        }

    })();

    // ver nome

    console.log(funcoes.ver_nome());
  
    // mudar nome

    funcoes.mudar_nome("carlos");

    console.log("novo nome: "+funcoes.ver_nome());

    //remover nome

    funcoes.remover_nome();

    console.log("nome removido: " + funcoes.ver_nome());


    JSON = formato de armazenamento de dados
    
  
    var funcionario ={

        'nome':'Fernanda Costa',
        'nascimento':'2020-01-01',
        'CPF':'111.111.111.11'
    };

    //transforma o objeto em string(JSON)

    var json_funcionario = JSON.stringify(funcionario);


    //console.log(json_funcionario);

    //convertendo JSON para objeto

    var objeto_funcionario = JSON.parse(json_funcionario);

    console.log (objeto_funcionario);
    
                             

     var clima=  '{"coord": { "lon": -122.08,"lat": 37.39},"weather": [{"id": 800,"main": "Clear","description": "clear sky","icon": "01d"}],"base": "stations","main": {"temp": 282.55,"feels_like": 281.86,"temp_min": 280.37,"temp_max": 284.26,"pressure": 1023,"humidity": 100},"visibility": 16093,"wind": {"speed": 1.5,"deg": 350},"clouds": {"all": 1},"dt": 1560350645,"sys": {"type": 1,"id": 5122,"message": 0.0139,"country": "US","sunrise": 1560343627,"sunset": 1560396563},"timezone": -25200,"id": 420006353,"name": "Mountain View","cod": 200}'                      
    
     var info = JSON.parse(clima);


     console.log("A umidade é de: " + info.main.humidity + " %");
*/

});

