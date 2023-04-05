function receivesAFunction(callback){
    console.log(callback())
}
function returnsANamedFunction(){
    console.log('hi')
  return returnsANamedFunction
}

function returnsAnAnonymousFunction(){
  return function(){

  };
}