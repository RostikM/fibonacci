var n = Number(prompt(''));
var n1 = Number(prompt(''));
document.write('n-ne fib - ' + fib(n) + '<br>');
document.write('n-ne fib2 - ' + fib2(n1));

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
function fib2(n1) {
    var a = 1;
    var b = 1;
    for( var i = 2; i < n1; i++){
        var c = a+b;
        a=b;
        b=c;
    }
    return b;
}
