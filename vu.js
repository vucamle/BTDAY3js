// bt1
let a = 'pham tuan vu';

console.log(a.charAt(0).toUpperCase()+ a.slice(1,5) +a.charAt(5).toUpperCase()+ a.slice(6,10)+ a.charAt(10).toUpperCase()+ a.slice(11));
// bt2
let z = 'javascript is cool'
l = z.replace(/a/g,'4').replace(/e/g,'3').replace(/i/g,'1').replace(/o/g,'0').replace(/s/g,'5')
console.log(l)
// bt3

        

let x = 'swim';
if(x.length >= 3 && x.endsWith('ing')){
    x = x + 'ly';
}else if(x.length <3){
  x = x;
}else{
    x += "ing";
}  
console.log(x)
