
const http = new easyHTTP();

 /*Section (1,2)
    
   http.get('https://jsonplaceholder.typicode.com/posts');

*/



/* (3) In this case will get undefined because date was returned before acutally is added 

the following code is in * { sync code mode } "

const posts=http.get('https://jsonplaceholder.typicode.com/posts');
console.log(posts) 

*/

/* section (4) to solve this problem , use callback function  as follow
    
    the following code is in * { Aync code mode } "
    http.get('https://jsonplaceholder.typicode.com/posts',function(posts){
    console.log(posts) 
});


*/


/* section (5) using null
        
    http.get('https://jsonplaceholder.typicode.com/posts',function(err,posts){
    if (err){
        console.log(err)
    }else{
        console.log(posts) 
    }
    
});
*/

/* section (6) Get one post*/
        
    http.get('https://jsonplaceholder.typicode.com/posts/1',function(err,post){
    if (err){
        console.log(err)
    }else{
        console.log(post) 
    }
    
});



