import Links from "../Models/Links.js";

export const send = async (req, res, next) => {
  const NewLink = new Links(req.body);
  try {
    if (!NewLink.Url) {
      res.status(400).send({ message: "Please past the link" });
    } else {
      const savedLink = await NewLink.save();
      res.status(200).json(savedLink.Uid);
    }
  } catch (err) {
    res.status(400).send("Unable to save the link");
  }
};

export const receive = async (req, res, next) => {
  const id = req.params.id;
  // Number(id);
  if (id) {
    try {
      const link = await Links.findOne({ Uid: id });
      if (link) {
        res.status(200).json(link);
      } else {
        res.status(200).json("Please Enter Token");
      }
    } catch (err) {
      next(err);
    }
  }else{
    res.json({"message":"Please enter valid token"})
  }
};
