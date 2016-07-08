db.switches.aggregate([
                         { $match: {"ports.port_no":0 } },
                         { $unwind: "$ports"},
                         { $match: {"ports.port_no":0 } },
                         { $project: { "ports.description":1 , _id:0}}
                         
                     ]);

