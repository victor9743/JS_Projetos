/*
    ex1
        var n1 = parseFloat(document.getElementById("num_1").innerHTML);

        var n2 = parseFloat(document.getElementById("num_2").innerHTML);

        document.getElementById("resultado").innerHTML = n1+n2;
    
    ex2


        var celsus = { 
           "celsus": document.getElementById("caixa_azul").innerHTML,

            "faren": function(){
                var faren = ( 9*this.celsus /5) + 32 ;
                return faren;
            }

        }

        document.getElementById("caixa_amarela").innerHTML = celsus.faren();

        console.log(celsus.faren());

    ex3

        var grupos = [
            [ "João" , "Maria" ],
            [ "Pedro" , "Joana" , "André" , "Júlio" ],
            [ "Carolina" , "Helena" , "Marcelo" ]

        ]
       
        grupos.shift();

        grupos.push(["Mariana" ,"Felipe" , "Carla"]);

        console.log(grupos);

    ex4 

    a)
    


        var curso = {
            'titulo': "Aprenda programação em Python",
            'categoria': ['programação', 'tecnologia', 'python'],
            'n_aval_5_estrelas': 420,
            'n_aval_4_estrelas': 80,
            'n_aval_3_estrelas': 33,
            'n_aval_2_estrelas': 20,
            'n_aval_1_estrela': 4,
            "total_aval": function(){
               var soma = (this.n_aval_1_estrela + this.n_aval_2_estrelas + 
               this.n_aval_3_estrelas + this.n_aval_4_estrelas + 
               this.n_aval_5_estrelas);
               return soma;
            },
            "media_aval" : function(){
                var media= parseFloat((this.n_aval_1_estrela + this.n_aval_2_estrelas + 
                    this.n_aval_3_estrelas + this.n_aval_4_estrelas + 
                    this.n_aval_5_estrelas) / 5);
                return media;
            }
        }

        document.getElementById("categoria_principal").innerHTML = curso.categoria[0];

        b) 
        total de avaliações do curso
        document.getElementById("tot_av").innerHTML=curso.total_aval();

        document.getElementById("med_av").innerHTML=curso.media_aval();

        */

        var dados = {
            "nomec" : "victor costa",
            "email" : "vict@vict.com",
            "registrofinal" : function (){
                var tabelaHTML = " <div class='tableBox'>";
                tabelaHTML += "<table>";
                tabelaHTML += "<tr>";                   
                tabelaHTML += "<th>Nome Completo</th>";
                tabelaHTML += "<th>E-mail</th>";
                tabelaHTML += "</tr>";
                tabelaHTML += "<tr>";
                tabelaHTML += "<td>" + this.nomec +"</td>";
                tabelaHTML += "<td>" + this.email +"</td>";
                tabelaHTML += "</tr>";
                tabelaHTML += "</table>";
                tabelaHTML += "</div>";
                
                return tabelaHTML;
            }
        }



        document.getElementById("tabela").innerHTML=dados.registrofinal();


        



            

        
        



    