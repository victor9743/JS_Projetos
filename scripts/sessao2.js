
/* 

trabalhando com DOM
var cont = document.getElementById("caixa").innerHTML;

var out = document.getElementById("outra caixa").innerHTML = cont;

var bigtext = document.getElementById("caixa h1").innerHTML= "<h1>"+cont+"</h1>";

var cont = document.getElementById("caixa").innerHTML="<h1>" +cont+"</h1>";

console.log(out);

funções



// função sem passar argumento
function hellowolrd(){
    console.log("Olá Mundo");
}

function soma(){
    var n1= 1045;
    var n2 =909;
    var soma=(n1+n2);
    
    console.log(soma);

}
hellowolrd();

soma();

//função passando argumentos

function soma_args(num1,num2){
    soma=num1+num2;

    console.log(soma);

}


soma_args(78,87);

//função com retorno


function soma_retorno(num1, num2){
    soma=num1+num2;

    return soma;


}

console.log(soma_retorno(12,56));



var kg = document.getElementById("peso").innerHTML;

var alt = document.getElementById("altura").innerHTML;


function calculo(peso,altura){

    imc= peso / (altura *altura);

    return imc;
}

document.getElementById("resultado").innerHTML = calculo(kg,alt).toFixed(2);


Tipos de dados ARRAY




var num = [0,1,2];

console.log(num);

// remove o último elemento de um array

num.pop();

console.log(num);

// adiciona um elemento a partir do último elemento de um array

num.push(3,4,5);

console.log(num);


// remove o primeiro elemento de uma array

num.shift();

console.log(num);


// adiciona o primeiro elemento no array

num.unshift(70);

console.log(num);

//mudando valores de um array

var exe = [1,2,3];

exe[1] = 65;

console.log(exe);

// selecionando intervalos em um vetor

var exe1 = [0,1,2,3,4,5,6,7,8,9];

exe1.slice(0,3)

console.log(exe1.slice(0,5));

Tipos de dados


var cadastro ={
    "nome":"victor",
    "idade": 23,
    "nasc": 1977
}

console.log(cadastro);

cadastro={

    "nome":"maria",
    "idade": 34,
    "nasc": 1996
}

console.log(cadastro);


var cursos = [
    {
        'titulo': 'Aprenda programação em Python 3 com facilidade do zero',
        'avaliacoes': 680,
        'alunos': 2300,
        'categorias': ['programacao', 'tecnologia']
    },

    {
        'titulo': 'Aprenda PHP e faça sites dinâmicos',
        'avaliacoes': 180,
        'alunos': 350,
        'categorias': ['desenvolvimento web', 'programacao']
    },

    {
        'titulo': 'Excel do Zero ao Avançado',
        'avaliacoes': 420,
        'alunos': 1800,
        'categorias': ['produtividade', 'gestão']
    }
    
];
document.getElementById("tabela").innerHTML = cursos;

// acessando o elemento "desenvolvimento web"


console.log(cursos[1].categorias[0]);


// alterar a informação "gestão" nas catergorias de excel

cursos[2].categorias[1]="administração de empresas"
console.log(cursos);


Métodos de Objetos

var nome = {
    "nome":"victor",
    "sobrenome":"costa",
    "nome_completo": function(){
        var_completo =this.nome + ' '+ this.sobrenome;
        return var_completo;

    }

}

console.log(nome.nome_completo());

var relatorio = {
    "nome":"bia",
    "salario":4.000,

    "relcom":function(){
        relcom = this.nome + " " + this.salario;

        return relcom;

    }

}

var ex3 = {

    "id" : "000",
    "nome": "victor",
    "ano_nasc":1999,

    "idade": function(){
        var ano =2020;
        var idade = (ano-this.ano_nasc);

        console.log("id:" + this.id + " nome:" + this.nome + " data de nascimento:"+ this.ano_nasc +" idade:"+ idade);

        return idade;
        
    }


}

console.log(ex3.idade());

*/
