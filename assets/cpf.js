var cpf = "529.982.247-25"
var cpf = cpf.replace("-","").replace(".","")
var cpf = cpf.replace(".","")
function validar_cpf(){
    var soma
    var resto
    soma = 0
    var cpf_array = cpf.split('')
    if (cpf === '00000000000'){
        return false;
    }
    for(var l = 0; l <= 8; l++){
    soma = parseInt(cpf_array[l])
    console.log(soma)
    }
}
validar_cpf()