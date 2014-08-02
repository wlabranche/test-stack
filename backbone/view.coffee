class View extends Backbone.View

  tagName: "table"

  template: _.template """
    <tr>
      <td>First Name</td>
      <td>Last Name</td>
      <td>Age</td>
    </tr>
    <tr>
      <td class="cell first-name"><%= firstName %></td>
      <td class="cell last-name"><%= lastName %></td>
      <td class="cell age"><%= age %></td>
    </tr>
  """

  events:
    "click .cell": "displayContents"

  render: ->
    @$el.html @template @model.attributes
    @

  displayContents: ( evt ) ->
    window.displayContents( evt.target )

if module?.exports
  module.exports = View
else
  window.View = View
