db.switches.aggregate([
                        {"$unwind":"$ports" },
                        {"$unwind":"$ports.logs" },
                        {"$match": {"ports.logs.from_time": ISODate("2016-02-17T05:00:12.422Z")}}
                     
                      ]);