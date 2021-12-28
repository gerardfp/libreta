import { PSDB } from 'planetscale-node';
const conn = new PSDB('main')
  
export default async function handler(req, res) {
    const {
        query: { id },
        method
    } = req

    const [rows, fields] = await conn.query(`update todos set tachada = NOT tachada where id = ${id}`);
    res.send("ok");
}