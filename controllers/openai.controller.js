const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

module.exports.generate = async (req, res, next) => {
  try {
    const { prompt } = req.body;

    const image = await openai.createImage({
      prompt,
      size: "512x512",
      n: 1,
    });
    return res.status(200).send({
      image: image.data.data[0].url,
    });
  } catch (error) {
    next(error);
    console.log(error);
  }
};
