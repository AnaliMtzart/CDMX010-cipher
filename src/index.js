import cipher from './cipher.js';

//cipher.encode(offset, string)//mandar llamar
//cipher.encode( 3, 'ABC');

//console.log(offset)


//texto a mayusculas

    document.getElementById('cifrar').addEventListener("keyup", function(){
        cifrar.value = cifrar.value.toUpperCase();
    });
 
    document.getElementById('decifrar').addEventListener("keyup", function(){
        decifrar.value = decifrar.value.toUpperCase();
    });

//mandar a llamar los metodos, declarar variables y de donde tomaran los valores

document.getElementById('btnEncode').addEventListener('click', function() {
    let offset = parseInt(document.getElementById('offsetEc').value); 
    let string = document.getElementById('cifrar').value;
    

    let divResultado = document.querySelector("#encodeResult");
    let contrasena = cipher.encode(offset,string);
    console.log(contrasena);
    divResultado.innerHTML = `${contrasena}`

});


document.getElementById('btnDecode').addEventListener('click', function() {
    let offset = parseInt(document.getElementById('offsetDc').value); 
    let string = document.getElementById('decifrar').value;
    

    let divResultado = document.querySelector("#decodeResult");
    let frase = cipher.decode(offset,string);
    console.log(frase);
    divResultado.innerHTML = `${frase}`

});


//console.log(cipher.encode);

    

