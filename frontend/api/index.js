import { PSDB } from 'planetscale-node';
const conni = new PSDB('main')
  
export default function handler(req, res) {
    //const [rowsi, fields] = await conni.query('select * from todos')
    //res.send(JSON.stringify(rowsi));
    res.send("ok")
}