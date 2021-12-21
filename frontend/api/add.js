var faunadb = require('faunadb'),
  q = faunadb.query
var client = new faunadb.Client({
    secret: process.env.FAUNA_ADMIN_KEY,
    domain: 'db.fauna.com',
    port: 443,
    scheme: 'https',
});
  
export default function handler(req, res) {
const data = req.body; 
res.status(200).send(`Hello ${name}!`);
    q.Create(
        q.Collection('test'),
        { data: { data } }
    );
    res.send("added");
}