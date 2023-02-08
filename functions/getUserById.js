exports = async function (userId) {

    let collection = context.services
        .get("mongodb-atlas")
        .db("expense-tracker")
        .collection("user")


    return await collection.findOne({ _id: BSON.ObjectId(userId) })
}