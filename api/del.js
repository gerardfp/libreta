import { PSDB } from 'planetscale-node';
const conn = new PSDB('main')
  
export default async function handler(req, res) {
    const {
        query: { id },
        method
    } = req

    const [rows, fields] = await conn.query(`delete from tareas where id = ${id}`)
    res.send("ok");
}