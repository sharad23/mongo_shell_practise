db.vehicles.aggregate([
    {
      $lookup:
        {
          from: "students",
          localField: "route_id",
          foreignField: "route_id",
          as: "students"
        }
   }
 ])