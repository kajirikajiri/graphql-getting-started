var express = require('express')
var {buildSchema} = require('graphql')
var {graphqlHTTP}=require('express-graphql')

var schema = buildSchema(`
  type Query{
    hello: String
  }
`)

var root={
  hello:()=>{
    return `hello world!`
  }
}

var app=express()
app.use('/graphql',graphqlHTTP({
  schema,
  rootValue: root,
  graphiql: true
}))
app.listen(4000)
console.log('running')