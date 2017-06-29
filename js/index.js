var n = Number(prompt(''));

document.write('n-ne fib - ' + fib(n) + '<br>');
document.write('n-ne fib2 - ' + fib2(n));

function fib(n){
if(n == 0) return(n);
else if(n == 1) 
return(n);
else {
return(fib(n - 1) + fib(n - 2));
   }
}
function fib2(n) {
    var a = 1;
    var b = 1;
    for( var i = 3 ; i < n; i++){
        var c = a+b;
        a=b;
        b=c;
    }
    return b;
}
