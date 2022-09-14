db.cats.deleteOne({name: 'blue steele'})

db.dogs.deleteMany({isAvailable: true})

db.dogs.deleteMany({})
<!-- deletes all -->

