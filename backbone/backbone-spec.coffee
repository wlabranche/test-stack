Model = require "./model.coffee"
View = require "./view.coffee"
misc = require "./misc.coffee"

view = undefined
model = undefined

body = $ "body"

beforeEach ->
  model = new Model
    firstName: "John"
    lastName: "Doe"
    age: 30

  view = new View model: model
  view.render()
  body.append view.$el

afterEach ->
  view.remove()

describe "Model", ->
  it "Should have a firstName property", ->
    expect( model.get "firstName" ).to.exist
    expect( model.get "firstName" ).to.equal "John"

  it "Should have a lastName property", ->
    expect( model.get "lastName" ).to.exist
    expect( model.get "lastName" ).to.equal "Doe"

  it "Should have an age property", ->
    expect( model.get "age" ).to.exist
    expect( model.get "age" ).to.equal 30

  it "Should have a working fullName method", ->
    expect( model.fullName ).to.be.a "function"
    fn = model.fullName()
    expect( fn ).to.equal "John Doe"

describe "View", ->
  it "Should have a displayContents method", ->
    expect( view.displayContents ).to.be.a "function"

  it "Should have rendered correctly", ->
    tr = $ "tr"
    td = $ "td"
    expect( tr.length ).to.equal 2
    expect( td.length ).to.equal 6

  it "Should have working events", ->
    $( ".cell.first-name" ).click()
    expect( window.lastContent ).to.equal "John"
    $( ".cell.last-name" ).click()
    expect( window.lastContent ).to.equal "Doe"
    $( ".cell.age" ).click()
    expect( window.lastContent ).to.equal "30"
