db.dogs.findOne({'personality.childFriendly': true})

db.dogs.findOne({'personality.childFriendly': true, size: 'M'})

db.dogs.findOne({'personality.childFriendly': true, age: 10})

db.dogs.find({ age: { $gt: 5}})
db.dogs.find({ age: { $gte: 5}})
<!-- gte = greater than or equal -->
<!-- lt/lte -->

db.dogs.find({breed: {$in ['Mutt', 'Corgi']}})

db.dogs.find({breed: {$in ['Mutt', 'Corgi']}, {age: $lt:10}})

db.dogs.find({breed: {$nin ['Mutt', 'Corgi']}})

db.dogs.find({$or: [{'personality.catFriendly': true}, {age: {$lte: 2} } ] } )