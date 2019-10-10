window.cipher = {
  encode: (offset, string) => {
  let cifrado =''; 
    for (let i = 0; i < string.length; i++){
      let ubicar = 0;
      if (ubicar !== 32){
        if (string.charCodeAt(i) >= 65  && string.charCodeAt(i) <= 90 || string.charCodeAt(i) >= 97  && string.charCodeAt(i) <= 122){
        ubicar=((string.charCodeAt(i) - 65 + parseInt(offset)) % 26 + 65); // MAYUSCULA ASCII PROBLEM
        ubicar=((string.charCodeAt(i) - 97 +  parseInt(offset)) % 26 + 97); // MINUSCULA ASCII
        cifrado += String.fromCharCode(ubicar);
      } else {
        cifrado += ' ';
      } } } return cifrado;  }, 


  decode: (offset, string) => {
  let descifrado ='';
    for (let i = 0; i < string.length; i++){
      let posicionar = 0;
      if (posicionar !== 32){
      if (string.charCodeAt(i) >= 65  && string.charCodeAt(i) <= 90 || string.charCodeAt(i) >= 97  && string.charCodeAt(i) <= 122){
        posicionar=((string.charCodeAt(i) - 65 - parseInt(offset)) % 26 + 65); // MAYUSCULA ASCII PROBLEM
        posicionar=((string.charCodeAt(i) - 97 - parseInt(offset) + 52) % 26 + 97); // MINUSCULA ASCII
        descifrado += String.fromCharCode(posicionar);
      } else {
        descifrado += ' ';
      } } } return descifrado; } };
