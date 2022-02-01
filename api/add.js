import { PSDB } from 'planetscale-node';
const conn = new PSDB('main')
  
export default async function handler(req, res) {
    const {
        query: { descripcion },
        method
    } = req

    const [rows, fields] = await conn.query(`insert into tareas (descripcion) values ('${descripcion}')`)
    res.send(rows);
}