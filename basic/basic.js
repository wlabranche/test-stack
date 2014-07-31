module.exports = (function () {

  var addNumbers = function ( a, b ) {
    return a + b;
  }

  var reverseString = function ( str ) {
    return str.split( '' ).reverse().join( '' );
  }

  return {
    add: addNumbers,
    reverse: reverseString
  };

})();
