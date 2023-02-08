exports = async function (userId) {

    let collection = context.services
        .get("mongodb_atlas")
        .db("expense-tracker")
        .collection("users")


    return await collection.findOne({ _id: BSON.ObjectId(userId) })
}