db.devices.aggregate([
    {
      $lookup:
        {
          from: "vehicles",
          localField: "_id",
          foreignField: "device_id",
          as: "d"
        }
   }
])