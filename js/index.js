var n = Number(prompt(''));

document.write('n-ne fib - ' + fib(n) + '<br>');
document.write('n-ne fib2 - ' + fib2(n));

function fib(n){
 var k =0;
if(n == 0) return(k);
else if(n == 1){
    k +=1;
    return(k);
} 

else {
return(fib(n - 1) + fib(n - 2));
   }
}
function fib2(n) {
    var a = 0;
    var b = 1;
    for( var i = 3; i < n; i++){
        var c = a+b;
        a=b;
        b=c;
    }
    return b;
}
