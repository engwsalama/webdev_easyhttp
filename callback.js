/* callback function
function x (x){
    alert(x);    
}

function y (num,callback){
    callback(num);
}
y(2,x);
*/


/* anonymous function
    here the callback function is defined when we are calling th function y
*/

function y(num,callback){
    callback(num);
}

y(2,function(x){
    alert (x);
})