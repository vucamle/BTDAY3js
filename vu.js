// bt1
let a = 'pham tuan vu';

console.log(a.charAt(0).toUpperCase()+ a.slice(1,5) +a.charAt(5).toUpperCase()+ a.slice(6,10)+ a.charAt(10).toUpperCase()+ a.slice(11));
// bt2
let e = ' javascript is cool '
let t = '';
for(let b of e.trim()){
    if(b == 'a'){
        b = 4;
    }else if( b == 'e'){
        b = 3;
    }else if(b == 'i'){
        b = 1;
    }else if(b == 'o'){
        b = 0
    }else if ( b == 's'){
        b = 5;
    }
    t = t +b;
}
console.log(t)

// bt3

        var r = new Number();
        r = prompt("nhap")
        var s = new Number();
        s =     document.getElementById('put').value;
        if(s.length >= 3 && s.endsWith('ing')){
            s = s + 'ly';
        }else if(s.length <3){
          s = s;
        }else{
            s += "ing";
        }  
        alert('in ra' +s);
document.write('in ra' +s);