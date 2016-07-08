db.switches.aggregate([  
    { "$project" : { "ports":"$ports.logs._id", "_id":"$_id"}},
    { "$unwind": "$ports"},
    { "$unwind": "$ports"},
    { "$match": {"ports": ObjectId("56c414de66c86c5f137ed2ff")}}
                     
                     ]);