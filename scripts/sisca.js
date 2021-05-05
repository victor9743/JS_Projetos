$(function(){
    var ato ={
        "1001": {
                    
                        "tipo": "1 -  Registral Distribuição",
                        "descricao_ato": "Distribuição de Títulos para Protesto",
                        "valor_emol": 6.87,
                        "fermoju": 1.05,
                        "selovalor": 0.82,
                        "iss":0.34,
                        "faadep":0.34,
                        "frmmp":0.34,
                        "total":9.76

                    
                   
                },

        "1002": {
                        "tipo":"1 -  Registral Distribuição",
                        "descricao_ato": "Registro de Averbações de testamentos públicos e particulraes, bem como seus atos revogatórios",
                        "valor_emol": 6.87,
                        "fermoju": 1.05,
                        "selovalor": 0.82,
                        "iss":0.34,
                        "faadep":0.34,
                        "frmmp":0.34,
                        "total":9.76

                
                    
                   
        },
        "1003": {
                    
                    "tipo_selo": "1 -  Registral Distribuição",
                    "descricao_ato": "Cancelamento ou Baixa na Distribuição",
                    "valor_emol": 1.43,
                    "fermoju": 0.08,
                    "selovalor": 0.82,
                    "iss":0.07,
                    "faadep":0.07,
                    "frmmp":0.07,
                    "total": 2.54
        },
        "1004": {
                    "tipo_selo": "1 -  Registral Distribuição",
                    "descricao_ato": "Registro de escritura lavrada fora da Comarca da Serventia",
                    "valor_emol": 6.87,
                    "fermoju": 1.05,
                    "selovalor": 0.82,
                    "iss":0.34,
                    "faadep":0.34,
                    "frmmp":0.34,
                    "total":9.76
        },
        "1005": {
            "tipo_selo": "4 - Certidão/Segunda via/ Segundo Translado",
            "descricao_ato": "Certidão negativa de distribuição de protesto",
            "valor_emol": 14.65,
            "fermoju": 4.20,
            "selovalor": 7.80,
            "iss":0.73,
            "faadep":0.73,
            "frmmp":0.73,
            "total":28.84   
        }
        //fim do array   
    
    }

    var parametros_sisca = {
            "tipo_selo": "1001",
            "d_ato": "descricao_ato",

            "quantidade_atos": 0
        
    }

    mostrar_valor(parametros_sisca);


    //console.log(parametros_sisca.v_emol);


    //função para mostrar os valore em seus respectivos campos
    function mostrar_valor(valores){

        $(".spinner-border").show();

        var tipoato = valores.tipo_selo ;

        var qtd_atos = valores.quantidade_atos;

    

        var descr_ato = ato[valores.tipo_selo].descricao_ato;

        var emolumento =ato[valores.tipo_selo].valor_emol;
        
        var valor_femorju =ato[valores.tipo_selo].fermoju;

        var valor_selo =ato[valores.tipo_selo].selovalor;

        var valor_iss =ato[valores.tipo_selo].iss;

        var valor_faadep =ato[valores.tipo_selo].faadep;

        var valor_frmp =ato[valores.tipo_selo].frmp;

        var valor_total =ato[valores.tipo_selo].total;

        var res = valor_total * qtd_atos;


        res += valor_total *qtd_atos;

        console.log(res);

        $("#movimentacao_tipo_selo_id").html($(descr_ato).html());
     
        /*if(tipoato == "1001"){
            console.log(valor_total);
        }else if(tipoato == "1002"){
            console.log(valor_total);
        }else if(tipoato =="1003"){
            console.log(valor_total);
        }else if(tipoato == "1004"){
            console.log(valor_total);
        }*/
            
        
        // codigo do ato  id="codigo_ato"

        // codigo tipo de selo id="movimentacao_tipo_selo_id"

        // codigo descrição do ato id="tipo_ato_desc"

        // ato gratuito ? id="movimentacao_tipo_movimentacao_id"

        // valor do emolumento id="movimentacao_valor_documento"

        // emolumento total  id="total_emolumento"

        // fermoju  id="movimentacao_valor_fermoju"

        // total fermoju id="total_fermoju"

        // valor do selo id="movimentacao_valor_ferc"

        // valor do ISS id="valor_iss"

        // valor do Faadep id="valor_faadep"

        //valor do frmmp id="valor_frmmp" 

        // valor total id="valor_total"

        // quant extra de atos id="movimentacao_quantidade_extra"
       

    }

    $("#movimentacao_quantidade_extra").change(function(){
        var parametro_input = $(this).attr('id');
        parametros_sisca[parametro_input] = $(this).val();

         mostrar_valor(parametros_sisca);

    });


  

})