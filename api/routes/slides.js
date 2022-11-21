const express = require('express')
const router = express();


const knex = require('knex')({
  client: 'sqlite3',
  connection: {
    filename: "./slides.db"
  },
  useNullAsDefault: true

});

router.post('/upload', async (req, res, next) => {
  const { name, data } = req.files.pic;
  if (name, data) {
   
    const description = req.body.description;
    const time = req.body.time;
    console.log({ name: name, img: 'data:image/jpeg;base64,' + data.toString("base64"), description: description, time: time })
    console.log(data)
    if (name && data) {
      await knex.insert({ name: name, img: 'data:image/jpeg;base64,' + data.toString("base64"), description: description, time: time }).into('slide');
      
    } else {
      res.sendStatus(400);
    }
  }
})

router.get('/', async (req, res, next) => {
  const slides = await knex('slide');
  if (slides) {
    res.send(slides)
  }
})


router.delete('/:slideId', async (req, res, next) => {

  const id = req.params.slideId;
  await knex('slide').delete().where({ id: id })
  .then(u => res.status(!!u?200:404).json({success:!!u}))
  .catch(e => res.status(500).json(e));;

  res.status(200).json({
    description: "delete " + id,
    id: id,
  })
}
)
router.post('/update/:slideId', async (req, res) => {

  const  id  = req.params.slideId;

  const { name, data } = req?.files?.pic;
  const description = req.body.description;
  const time = req.body.time;
  if( data ){
    await knex('slide')
    .where({id: id})
    .update({ name: name, img: 'data:image/jpeg;base64,' + data.toString("base64"), description: description, time: time })
    .then(data => { return knex("slide").where({id: id})})
    .catch(e => { 
      console.log("erro.... :", e)
      res.status(500).json(e)} );
  } else {
    await knex('slide')
    .where({id: id})
    .update({ name: name, description: description, time: time })
    .then(data => { return knex("slide").where({id: id})})
    .catch(e => { 
      console.log("erro.... :", e)
      res.status(500).json(e)} );
  }

      
  } 

)

module.exports = router;