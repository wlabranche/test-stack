class Model extends Backbone.Model
  fullName: ->
    @get( "firstName" ) + " " + @get( "lastName" )

if module?.exports
  module.exports = Model
else
  window.Model = Model
