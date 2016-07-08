db.switches.aggregate([
                         { $match: {"ports.port_no":2 } },
                         { $unwind: "$ports"},
                         //{ $match: {"ports.port_no":2 } },
                         //{ $project: { "ports.description":1 , _id:0}}
                         { $limit : 5 }
                     ]);


