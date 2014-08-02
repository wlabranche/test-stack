module.exports = class Model extends Backbone.Model
  fullName: ->
    str = @get( "firstName" ) + " " + @get( "lastName" )
    console.log str
    str
