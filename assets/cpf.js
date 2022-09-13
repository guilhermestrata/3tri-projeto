//pega o cpf
var cpf = document.getElementById("cpf")
var cpf = cpf.replace("-","").replace(".","")
var cpf = cpf.replace(".","")
//codigo da receita federal pra validar cpf
function TestaCPF(strCPF) {
    var Soma;
    var Resto;
    Soma = 0;   
    //strCPF  = RetiraCaracteresInvalidos(strCPF,11);
    if (strCPF == "00000000000")
	return false;
    for (i=1; i<=9; i++)
	Soma = Soma + parseInt(strCPF.substring(i-1, i)) * (11 - i); 
    Resto = (Soma * 10) % 11;
    if ((Resto == 10) || (Resto == 11)) 
	Resto = 0;
    if (Resto != parseInt(strCPF.substring(9, 10)) )
	return false;
	Soma = 0;
    for (i = 1; i <= 10; i++)
       Soma = Soma + parseInt(strCPF.substring(i-1, i)) * (12 - i);
    Resto = (Soma * 10) % 11;
    if ((Resto == 10) || (Resto == 11)) 
	Resto = 0;
    if (Resto != parseInt(strCPF.substring(10, 11) ) )
        return false;
    return true;
}
// verificação de cartão de credito
var cartao = document.getElementById("cartao")
function TestaCartao(StrCartao){
    //cartao em arr
    StrCartao = StrCartao.replace(" ", "").replace(" ", "").replace(" ", "")
    var cartao_arr = StrCartao.split('')
    var soma = 0
    // pega o ultimo numero do cartao
    const last = cartao_arr[cartao_arr.length -1]
    cartao_arr = cartao_arr.reverse()
    cartao_arr.shift()
    var tamanho = cartao_arr.length
    // loop que checa o cartao
    for(let i = 0; i <= tamanho-1; i++){
        if(i%2 === 0){
            cartao_arr[i] = parseInt(cartao_arr[i])*2
        }if(cartao_arr[i]>9){
            cartao_arr[i] = cartao_arr[i]-9
        }
        soma += parseInt(cartao_arr[i])
    }
    soma = 10-soma%10
    //resultado final
    if(soma === parseInt(last)){return true}else{return false}
}
function TestaMarca(StrCartao){
    if(StrCartao[0]+StrCartao[1] === "34" && StrCartao.length == 15|| StrCartao[0]+StrCartao[1] === "37" && StrCartao.length == 15){
        console.log("American Express")
    }
    for(var i = 52; i <=55;i++){
        if(StrCartao[0]+StrCartao[1] === i.toString() && StrCartao.length === 16 || StrCartao[0]+StrCartao[1] === i.toString() && StrCartao.length === 17 || StrCartao[0]+StrCartao[1] === i.toString() && StrCartao.length === 18 || StrCartao[0]+StrCartao[1] === i.toString() && StrCartao.length === 19){
            console.log("mastercard")  
        }
    }
    if(StrCartao[0] === "4" && StrCartao.length === 13 || StrCartao[0] === "4" && StrCartao.length === 14 || StrCartao[0] === "4" && StrCartao.length === 15 || StrCartao[0] === "4" && StrCartao.length === 16){
        console.log("visa")
    }
}
