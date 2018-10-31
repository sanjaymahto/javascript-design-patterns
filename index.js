var singleton = (function(){

  var instance; // defining instance variable
  
  function init(){
    
    var name;
    
    this.setName = function(name){
      this.name = name;
    }
    
    this.getName = function(){
      return this.name;
    }
    
    return{
      setName:setName,
      getName:getName
    }
      
  }
  
  function getInstance(){
    
    if(!instance){
      instance = init();
    }
    
    return instance;
  }
    
  return{
    getInstance:getInstance
  }  
  
})();


var one = singleton.getInstance();
var two = singleton.getInstance();

//the two instance are same
console.log(one == two) //true

one.setName('Sanjay');
console.log(two.getName()); //"Sanjay"