

const cipher = {
  encode: function(offset, string){
     if( typeof string!="string"){
      throw TypeError('Valores incorrectos');
      
    } 
    
   
  let newCifrado = ""
  let cifrado = ""
 
  for (let i = 0; i < string.length; i++) {
    let textAscci = string.charCodeAt(i)
    if(textAscci>= 65 && textAscci <=90){
     cifrado = ((textAscci - 65 + parseInt(offset)) % 26 + 65)}
    else if (textAscci >= 97 && textAscci <= 122){
      cifrado = ((textAscci - 97 + parseInt(offset)) % 26 + 97)}

   newCifrado += String.fromCharCode(cifrado)
    
  }
 
 return newCifrado

},

decode: function(offset, string) {
 if( typeof string!="string"){
    throw TypeError('Valores incorrectos');
  } 

  let newDecifrado = ""
  let textDecifrado =""

  for (let i = 0; i < string.length; i++) {
     let textAscci = string.charCodeAt(i);
    if(textAscci>= 65 && textAscci <=90){
    textDecifrado = ((textAscci + 65 - parseInt(offset)) % 26 + 65)}
    else if (textAscci >= 97 && textAscci <= 122) {
      textDecifrado = ((textAscci - 97 - parseInt(offset)) % 26 + 97)}
    newDecifrado += String.fromCharCode(textDecifrado)
  }

  return newDecifrado

  
  }





}; 


export default cipher;