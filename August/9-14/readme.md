use animalShelter will create a new database
show dbs: show database list 

test> show collections
test> db.dogs.insertOne({name: "Charlie", age: 3, breed: "corgi", catFriendly: true})
{
  acknowledged: true,
  insertedId: ObjectId("632257e7e358dd863b62d108")
}
test> show collections
dogs
test> db.dogs.find()
[
  {
    _id: ObjectId("632257e7e358dd863b62d108"),
    name: 'Charlie',
    age: 3,
    breed: 'corgi',
    catFriendly: true
  }
]


db.dogs.insert([{name: "Mochi", breed: "Maltese", age: 15, catFriendly: false}, {name: "Shade", breed: "Chihuahua", age: 7, catFriendly: true}])

db.dogs.find()

db.cats.insert({name: "blue steele", age: 5, dogFriendly: false, breed: "scottish"})


 db.dogs.find({breed: 'corgi'})
[
  {
    _id: ObjectId("632257e7e358dd863b62d108"),
    name: 'Charlie',
    age: 3,
    breed: 'corgi',
    catFriendly: true
  }
]

test> db.dogs.find({catFriendly: false})

{
  acknowledged: true,
  insertedId: null,
  matchedCount: 1,
  modifiedCount: 1,
  upsertedCount: 0
}
test> db.dogs.find({name: 'Charlie'})
[
  {
    _id: ObjectId("632257e7e358dd863b62d108"),
    name: 'Charlie',
    age: 4,
    breed: 'corgi',
    catFriendly: true
  }
]

test> db.dogs.updateOne({name: 'Charlie'}, {$set: {color: 'chocolate'}})      
{                                                                             
  acknowledged: true,                                                         
  insertedId: null,                                                           
  matchedCount: 1,                                                            
  modifiedCount: 1,                                                           
  upsertedCount: 0                                                            
}                                                                             
test> db.dogs.find({name: 'Charlie'})                                         
[                                                                             
  {                                                                           
    _id: ObjectId("632257e7e358dd863b62d108"),                                
    name: 'Charlie',                                                          
    age: 4,                                                                   
    breed: 'corgi',                                                           
    catFriendly: true,                                                        
    color: 'chocolate'                                                        
  }                                                                           
]                                                                             


]
test> db.dogs.updateMany({catFriendly: true}, {$set: {isAvailable: false}})
{
  acknowledged: true,
  insertedId: null,
  matchedCount: 2,
  modifiedCount: 2,
  upsertedCount: 0
}
test> db.dogs.find()
[
  {
    _id: ObjectId("632257e7e358dd863b62d108"),
    name: 'Charlie',
    age: 4,
    breed: 'corgi',
    catFriendly: true,
    color: 'chocolate',
    isAvailable: false
  },
  {
    _id: ObjectId("63225909e358dd863b62d109"),
    name: 'Mochi',
    breed: 'Maltese',
    age: 15,
    catFriendly: false
  },
  {
    _id: ObjectId("63225909e358dd863b62d10a"),
    name: 'Shade',
    breed: 'Chihuahua',
    age: 7,
    catFriendly: true,
    isAvailable: false
  }
]

 db.cats.updateOne({age: 6}, {$set: {age: 7}, $currentDate: {lastChanged: true}})

 [
  {
    _id: ObjectId("63225974e358dd863b62d10b"),
    name: 'blue steele',
    age: 7,
    dogFriendly: false,
    breed: 'scottish',
    lastChanged: ISODate("2022-09-14T23:15:09.548Z")
  }
]

