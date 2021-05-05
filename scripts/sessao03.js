/* Eventos 

    // on click

    document.getElementById("click1").onclick = function(){

        alert('Você clicou no botão');
    };

    // onmouseover
    document.getElementById("click2").onmouseover = function(){
        alert("Você passou o mouse no botão");
    };

    //onmouseout
    document.getElementById("click3").onmouseout = function(){
        alert("Você retirou o mouse do botão");

    };

    //onkeydown

    document.onkeydown = function(){
        alert("Você apertou alguma tecla");
    };
    
    document.onkeydown = function(event){
        alert('Você apertou a tecla: ' + event.keyCode);
    }


    function mouse_click(){

        alert("clicou");
    }
    
    Manipulando CSS


    document.getElementById("mudar_cor").onclick = function(){
        //mudar o tamanho
        // document.getElementById("mudar_cor").style.height ="100px";
         this.style.height ="100px";

        // mudar a cor
        // document.getElementById("mudar_cor").style['background-color']="#acffda";
         this.style['background-color']="#acffda";

        // mudando o botão para a direita
        //document.getElementById("mudar_cor").style.transform = "translatex(100px)";
        this.style.transform = "translatex(100px)";

    }

        Outros elementos getElement

    
        var btn = document.getElementsByClassName("botao");

        //acessando elementos da classename
        btn[0].innerHTML = "trocar";
        console.log(btn);

        //acessando elementos pela tag


        var exemplo = document.getElementsByTagName("p");

        console.log(exemplo);

        looping for for/in

        // FOR
        for(var i=0; i<11; i++){
            console.log(i);
        }


        var alunos = ['victor','maria','joão','carlos'];

        for(var x = 0; x < alunos.length; x++){
            console.log(alunos[x]);
        }

        //FOR/IN
        

        var carro = {
            "ano":2018,
            "modelo":"Fox",
            "cilindradas": "1.8",
            "Combustível":"Gasolina"
        }

        for( var x in carro){

            console.log( x + ":" + carro[x]);
        }

       var exemplo= document.getElementsByClassName("p");

       console.log(exemplo);

       for(var x = 0; x < exemplo.length; x ++){
           exemplo[x].style.color="green";
           exemplo[x].style['font-weight']="bold";
       }
       
       LOOP WHILE/ DO WHILE
       
       
       var count = 0;

       while (count < 5 ){
           console.log(count);

           count ++;
       }

       DO WHILE
    
       
       var count=10;

       do{
        console.log(count);

        count ++;

       }while(count <5);

       CONDICIONAIS IF/ELSE

       
      var idade =17;
      if(idade<18){
        console.log("menor de idade");
      } else {
          console.log("maior de idade");
      }

      alinhamento
      
        var socio = false;
        var idade =25;

        if(socio == true || idade >= 65){

            console.log("O ingresso é grátis");
        }else{
            if(idade <18){
                console.log("Preço a pagar: R$ 6,00");
            } else {
                console.log("Preço a pagar: R$ 12,00");
            }
        }

       Alinhamento de loops 
       
      var funcionarios =[
        {
            "nome":"Carlos Henrique da silva",
            "idade":"45",
            "filhos": ['Mariana Alves da Silva','Fernanda Alves da Silva'],
        },
        {
            "nome":"Maria Helena Pereira",
            "idade":32,
            "filhos":['João Pedro Pereira de Souza']
        },
        {
            "nome":"José feliciano Maia",
            "idade": 39,
            "filhos" :['Felipe ferreira Maia', 'Fabio Ferreira Maia']
        }

      ];

      var list = document.getElementById("filhos");

      for(var i = 0; i <= funcionarios.length; i++){
        if(funcionarios[i].filhos){
            var filhos = funcionarios[i].filhos;
            for(var j = 0; j <=filhos.length; j++){

                list.innerHTML += "<li>"+filhos[j] + "filho de(a)" +funcionarios[i].nome + "</li>";
            }
        }
      }
    */