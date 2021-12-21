const { PSDB } = require('planetscale-node')
const conn = new PSDB('main')
  
export default function handler(req, res) {
    const [rows, fields] = await conn.query('select * from reminders')
    res.send(JSON.stringify(rows));
}
  