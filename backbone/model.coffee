module.exports = class Model extends Backbone.Model
  fullName: ->
    @get( "firstName" ) + " " + @get( "lastName" )
