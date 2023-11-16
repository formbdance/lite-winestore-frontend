const express = require('express')
const {MongoClient, ObjectId} = require('mongodb')
const cors = require('cors')
const bodyParser = require('body-parser');



const MongoDBclient = new MongoClient('mongodb://127.0.0.1:27017')


// ициализация express + cors + bodyParser
const app = express()
app.use(cors())
app.use(bodyParser.json());

const port = 5000

const reTest = async () =>{
    try {
        await MongoDBclient.connect()
        console.log("Успешно подключились к базе данных")
        await MongoDBclient.close()
        console.log("Закрыли подключение")
    } catch (e) {
        console.log(e)
    }
 }
 reTest()


app.get('/', (req, res) => {
  res.send('success')
})

app.delete('/api/wine/:id', async (req, res) => {
  try {
    const id = req.params.id;
    await MongoDBclient.connect();
    const exployees = MongoDBclient.db('winestore').collection('wine');
    const filter = { _id: new ObjectId(id) }
    const result = await exployees.deleteOne(filter);
    console.log("Удалено документов:", result.deletedCount);
  } catch (error) {
    console.log('Ошибка при удалении документа:', error);
    res.status(500).send("Ошибка при удалении документа");
  } finally {
    res.status(200).send("Документ успешно удален");
    console.log('Объект удалён, подключение закрыто')
    await MongoDBclient.close();
  }
});

app.get('/api/wine', async (req, res) => {
    try {
      //const country = req.params.country;
      await MongoDBclient.connect()
      const exployees = MongoDBclient.db('winestore').collection('wine')
      //const filter = { country: req.body.country }
      const allCategories = await exployees.find().toArray()
      res.json(allCategories)
      console.log('Успешное получение!')
    }catch(err) {
      console.log('Ошибка получения: ' + err)
    }finally {
      console.log('Ответ отправлен, подключение закрыто')
      await MongoDBclient.close()
    }
})

app.get('/api/wine/:country', async (req, res) => {
  const country = req.params.country;
  try {
    await MongoDBclient.connect();
    const exployees = MongoDBclient.db('winestore').collection('wine')
    const filter = { country: country };
    const allCategories = await exployees.find(filter).toArray();
    res.json(allCategories);
  } catch(err) {
    console.log('Ошибка получения: ' + err);
  } finally {
    console.log('Получен список страны: ' + country);
    MongoDBclient.close();
  }
})

app.post('/api/wine', async (req, res) => {
    // сохранение в бд 
    try {  
      await MongoDBclient.connect()
      const exployees = MongoDBclient.db('winestore').collection('wine')
      await exployees.insertOne(req.body)
    } catch (err) {
      res.status(500).send("Ошибка записи документа");
      console.log('Ошибка сохранения в БД: ' + err)
    } finally {
      res.json({message: 'Товар добавлен'})
      console.log('Товар добавлен!')
      await MongoDBclient.close()
    }

  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})