import { PSDB } from 'planetscale-node';
const conni = new PSDB('main')
  
export default async function handler(req, res) {
    const [rowsi, fields] = await conni.query(`select * from todos`)
    res.send(rowsi);
}