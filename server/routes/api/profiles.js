const express = require('express');
const mongodb = require('mongodb');

const router = express.Router();

// Get profiles
router.get('/', async (req, res) => {
  const profiles = await loadprofilesCollection();
  res.send(await profiles.find({}).toArray());
});

// Add Post
router.post('/', async (req, res) => {
  const profiles = await loadprofilesCollection();
  await profiles.insertOne({
    profileName: req.body.profileName,
    createdAt: new Date()
  });
  res.status(201).send();
});

// Delete Post
router.delete('/:id', async (req, res) => {
  const profiles = await loadprofilesCollection();
  await profiles.deleteOne({ _id: new mongodb.ObjectID(req.params.id) });
  res.status(200).send();
});

async function loadprofilesCollection() {
  const client = await mongodb.MongoClient.connect(
    'mongodb://vue_bot007:vue_bot007@localhost:27017/vue_bot',
    {
      useNewUrlParser: true
    }
  );

  return client.db('vue_express').collection('profiles');
}

module.exports = router;
