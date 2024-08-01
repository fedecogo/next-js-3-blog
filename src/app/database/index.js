import mongoose from "mongoose";

const connectToDB = async () => {
  const connectionUrl =
    "mongodb+srv://federicocapiz02:GJJoFhWK7dRCdlKN@cluster0.pclxggg.mongodb.net/";

  mongoose
    .connect(connectionUrl)
    .then(() => console.log("blog database connection is successfull"))
    .catch((error) => console.log(error));
};

export default connectToDB;