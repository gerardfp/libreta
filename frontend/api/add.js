import { PSDB } from 'planetscale-node';
const conni = new PSDB('main')
  
export default function handler(req, res) {
    const [rowsi, fields] = await conni.query('select * from reminders')
    res.send(JSON.stringify(rowsi));
}