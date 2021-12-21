import faunadb from 'faunadb';
q = faunadb.query
var client = new faunadb.Client({
    secret: process.env.FAUNA_ADMIN_KEY,
    domain: 'db.fauna.com',
    port: 443,
    scheme: 'https',
});
  
export default function handler(req, res) {
const data = req.body; 
client.query(
    q.Create(
        q.Collection('test'),
        { data: { data } }
    ));
    res.send("added");
}