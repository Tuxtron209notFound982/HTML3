function sumar(){
    let varn1=parseInt(document.getElementById("n1").value);
    let varn2=parseInt(document.getElementById("n2").value);

    let suma = varn1+varn2;

    document.getElementById("resultado1").value=`${suma}`;
}
function resta(){
    let varn1=parseInt(document.getElementById("n1").value);
    let varn2=parseInt(document.getElementById("n2").value);

    let restar = varn1-varn2;

    document.getElementById("resultado1").value=`${restar}`;
}
function multi(){
    let varn1=parseInt(document.getElementById("n1").value);
    let varn2=parseInt(document.getElementById("n2").value);

    let multiplicar = varn1*varn2;

    document.getElementById("resultado1").value=`${multiplicar}`;
}
function divi(){
    let varn1=parseInt(document.getElementById("n1").value);
    let varn2=parseInt(document.getElementById("n2").value);

    let dividir = varn1/varn2;

    document.getElementById("resultado1").value=`${dividir}`;
}

function calcular(){
    let varpreciou = parseInt(document.getElementById("preciou").value);
    let varcanti = parseInt(document.getElementById("cantidad").value);

    let subtotal = varcanti*varpreciou;
    let iva = subtotal*0.19;
    let descuento=0;
    
    if (varcanti >10){
        descuento=subtotal*0.1;}

            let total = (subtotal+iva)-descuento;

    document.getElementById("subtotal").value=`${subtotal.toLocaleString()}`
    document.getElementById("iva").value=`${iva.toLocaleString()}`
    document.getElementById("descuento").value=`${descuento.toLocaleString()}`
    document.getElementById("total").value=`${total.toLocaleString()}`
}


function promedio(){
    let nota1= parseFloat(document.getElementById("no1").value);
    let nota2= parseFloat(document.getElementById("no2").value);
    let nota3= parseFloat(document.getElementById("no3").value);

    let prome=(nota1+nota2+nota3)/3;

    document.getElementById("prom").value=`${prome}`
}

function calcu(){
    let hora=parseFloat(document.getElementById("horas").value);
    let valor=parseFloat(document.getElementById("vhora").value);
    
    let solucion= hora*valor;

    document.getElementById("resultado").value=`${solucion}`
}

function costos(){
    let invitados=parseInt(document.getElementById("invitados").value);
    let cindividual=parseInt(document.getElementById("cindividual").value);
    let bindividual=parseInt(document.getElementById("bindividual").value);
    let decoracion=parseInt(document.getElementById("decoracion").value);
    let musica=parseInt(document.getElementById("musica").value);
    let propina=parseInt(document.getElementById("propina").value);


    let totalc=cindividual*invitados;
    let totalb=bindividual*invitados;
    let totald=decoracion;
    let totalm=musica;
    let subtotal=totalc+totalb+totald+totalm;
    let pro=(subtotal*propina)/100;
    let totalg=subtotal+pro;
    let totali=totalg/invitados;



    document.getElementById("totalc").innerText=`${totalc}`
    document.getElementById("totalb").innerText=`${totalb}`
    document.getElementById("totald").innerText=`${totald}`
    document.getElementById("totalm").innerText=`${totalm}`
    document.getElementById("subtotal").innerText=`${subtotal}`
    document.getElementById("totalp").innerText=`${pro}`
    document.getElementById("totalg").innerText=`${totalg}`
    document.getElementById("totalindividual").innerText=`${totali}`


}