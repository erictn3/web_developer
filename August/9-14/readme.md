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