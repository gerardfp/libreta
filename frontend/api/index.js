export default function handler(request, response) {
    const { name } = req.query;
    res.status(200).send(`Hello ${name}!`);
  }
  