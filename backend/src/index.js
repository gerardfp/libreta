const express = require('express')
const { ObjectId, MongoClient } = require('mongodb');

let mongoDatabase;
async function getCollection() {
    if(!mongoDatabase) mongoDatabase = (await new MongoClient(process.env.MONGODB_URL).connect()).db("tareas_db");
    return mongoDatabase.collection("tareas");
}

const app = express();
    
app.use(require('cors')());
app.use(express.json());

app.get('/', async (req, res) => {
    res.send(await (await getCollection()).find({}).toArray());
})
app.post('/add', async (req, res) => {
    (await getCollection()).insertOne(req.body);
    res.send("added");
})
app.get('/check/:id', async(req,res) => {
    if(ObjectId.isValid(req.params.id)) (await getCollection()).findOneAndUpdate({_id: ObjectId(req.params.id)},[{$set:{checked:{$ne:[true,"$checked"]}}}]);
    res.send("checked");
})
app.get('/del/:id', async(req,res) => {
    if(ObjectId.isValid(req.params.id)) (await getCollection()).deleteOne({_id: ObjectId(req.params.id)});
    res.send("deleted");
})
app.get('/dall', async (req, res) => {
    (await getCollection()).drop();
    res.send("deleted all");
})
app.listen(process.env.PORT, () => console.log(`Listening on ${process.env.PORT}`))