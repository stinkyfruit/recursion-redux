// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here

  if(Array.isArray(obj)){
    if (obj.length === 0) {
      return '['+obj+']';
    }
    var results = [];
    for (var i = 0; i < obj.length; i++) {
      results.push(stringifyJSON(obj[i]));
    }
    return '['+results.join(',')+']';
  }

  if(typeof obj === 'object' && obj){
  
    var pieces = [];
    for( var key in obj ) {
      if (typeof (obj[key]) === 'function' || obj[key] === undefined){
        continue;
      }
      pieces.push( stringifyJSON(key) +':'+ stringifyJSON(obj[key]));
    }
    return '{'+pieces.join(',')+'}'; 
  }
//expected '{"foo":true}' to equal '{"foo":true,"bar":false,"baz":null}'

  if(typeof obj === 'string'){
    return '"'+obj+'"';
  }
  return ''+obj;
};

// expected '[8' to equal '[8]'
