import cipher from './cipher.js';

//cipher.encode(offset, string)//mandar llamar
//cipher.encode( 3, 'ABC');
    

    /*document.getElementById('btnEncode').addEventListener('click', function(){
        let offset = document.getElementById('offsetEc').value; 
        let string = document.getElementById('cifrar').value;

        cipher.encode(offset, string);
    })*/

let offset = document.getElementById('offsetEc').value; 
let string = document.getElementById('cifrar').value;
console.log(offset)

document.getElementById('btnEncode').addEventListener('click', function() {
    console.log(offset,string)
     cipher.encode(offset, string)
});

console.log(cipher.encode);
    //<h2 id="decodeResult"></h2>
    

