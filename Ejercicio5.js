const mesesMin = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'];
const mesesMay = mesesMin
   .filter(mesesMin=> mesesMin.length>7)
   .map(mesesMin=>mesesMin.toUpperCase()); 
console.log(mesesMay)