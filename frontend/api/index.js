import faunadb from 'faunadb';
const q = faunadb.query

var client = new faunadb.Client({
    secret: process.env.FAUNA_ADMIN_KEY,
    domain: 'db.fauna.com',
    port: 443,
    scheme: 'https',
});
  
  export default function handler(req, res) {
   
    res.send(client.query(q.Collection('test')));
  }
  