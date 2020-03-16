// es5 library type 
function easyHTTP(){
    this.http = new XMLHttpRequest();
    
}
/* Section (1)
easyHTTP.prototype.get= function(url){
    this.http.open('GET',url,true);
    this.http.onload= function(){
        if (this.http.status=== 200){
            console.log(this.http.responseText);           
            }
    }
    this.http.send();
}

*/

/* section (2),by using self
    due to this is not defined in the following function , we will workaround by useing another variable is called self
    also, you can use arrow function to solve this problem if you will apply es6
    easyHTTP.prototype.get= function(url){
    this.http.open('GET',url,true);
    let self=this;
    this.http.onload= function(){
        if (self.http.status=== 200){
            console.log(self.http.responseText);
            
            }
    }
    this.http.send();
}   

*/


/*section (3)
easyHTTP.prototype.get= function(url){
    this.http.open('GET',url,true);
    let self=this;
    this.http.onload= function(){
        if (self.http.status=== 200){
            return self.http.responseText ;
            
            }
    }
    this.http.send();
}   
*/
/* Section (4) will use callback function

easyHTTP.prototype.get= function(url,callback){
    this.http.open('GET',url,true);
    let self=this;
    this.http.onload= function(){
        if (self.http.status=== 200){
            callback(self.http.responseText) ;            
        }
    }
    this.http.send();
}   

*/

/* Section (5) adding null in case error */

easyHTTP.prototype.get= function(url,callback){
    this.http.open('GET',url,true);
    let self=this;
    this.http.onload= function(){
        if (self.http.status=== 200){
            callback(null,self.http.responseText) ;            
        }else {        
            callback('Error :' + self.http.status) ;            
        }
    }
    this.http.send();
}   






