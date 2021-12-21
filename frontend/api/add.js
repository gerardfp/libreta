import { PSDB } from 'planetscale-node';
const conn = new PSDB('main')
  
export default async function handler(req, res) {
    const {
        query: { descr },
        method
    } = req

    const [rows, fields] = await conn.query(`insert into todos (descr) values ('${descr}')`)
    res.send(rows);
}