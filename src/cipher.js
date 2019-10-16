window.cipher = {
  encode: (offset, string) => {
  let cifrado =''; 
    for (let i = 0; i < string.length; i++){
      let ubicar = string.charCodeAt(i);
      if (65 <= ubicar && ubicar <= 90) {
        cifrado += String.fromCharCode(((ubicar - 65 + parseInt(offset)) % 26) + 65); 
      } else if (97 <= ubicar && ubicar <= 122){
        cifrado += String.fromCharCode(((ubicar - 97 + parseInt(offset)) % 26) + 97);
      } else {
        cifrado += string.charAt(i);
      }
    } return cifrado; },
 
  decode: (offset, string) => {
  let descifrado ='';
    for (let i = 0; i < string.length; i++) {
      let posicionar = string.charCodeAt(i);
      if (65 <= posicionar && posicionar <= 90) {
        descifrado += String.fromCharCode(((posicionar + 65 - parseInt(offset)) % 26) + 65); // MAYUSCULA ASCII PROBLEM
      } else if (97 <= posicionar && posicionar <= 122) { 
        descifrado += String.fromCharCode(((posicionar - 97 - parseInt(offset) + 52) % 26) + 97); // MINUSCULA ASCII
      } else {
        descifrado += string.charArt(i); 
      } } return descifrado; } 
    };
