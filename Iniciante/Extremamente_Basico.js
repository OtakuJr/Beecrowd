//const c = 0;
function Extre(a, b) {
    if (a <= 0) {
         -a + b;
        return a + b;
    } else if (- b <= 0) {
       -b + a;
        return b + a;
    } else { 
        return a + b;
    }    
}

console.log ("X = " + Extre(-9,2));

/*Para dodar uma código JavaScript, deve se usar "node" + o nome do arquivo. Ex.: node sistemade_login.js */
/*var a = parseInt(lines.shift())*/