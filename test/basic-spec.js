var expect = require( 'chai' ).expect;

var basic = require( '../basic/basic' );

var add = basic.add;
var reverse = basic.reverse;

describe( 'add()', function () {
  it( 'is a function', function () {
    expect( add ).to.be.a( 'function' );
  });

  it( 'adds two numbers', function () {
    var result = add( 1, 2 );
    expect( result ).to.be.a( 'number' );
    expect( result ).to.equal( 3 );
  });

});

describe( 'reverse()' , function () {
  it( 'is a function', function () {
    expect( reverse ).to.be.a( 'function' );
  });

  it( 'reverses the order of letters in a string', function () {
    var result = reverse( 'hello' );
    expect( result ).to.be.a( 'string' );
    expect( result ).to.equal( 'olleh' );
  });
});
