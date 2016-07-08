db.vehicles.aggregate([
    {
      $lookup:
        {
          from: "devices",
          localField: "device_id",
          foreignField: "_id",
          as: "device"
        }
   }
])