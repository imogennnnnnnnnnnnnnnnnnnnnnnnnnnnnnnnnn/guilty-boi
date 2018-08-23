const functions = require('firebase-functions');
const admin     = require('firebase-admin');

admin.initializeApp();
const db = admin.firestore();

const getBois = async (req, res) => {
  try {
    let docs = []
    const snapshot = await db.collection('bois').get()
    snapshot.forEach((doc) => {
      docs.push({
        id: doc.id,
        ...doc.data()
      })
    })
    console.log(docs)
    res.status(200).send(JSON.stringify(docs))
  } catch(e) {
    console.error(e)
    res.status(500).send({ error: e })
  }
}

exports.bois = functions.https.onRequest((req, res) => {
  res .set('Content-Type', 'application/json')
      .set('Access-Control-Allow-Origin', '*')
      .set('Access-Control-Allow-Methods', 'GET')
  switch (req.method) {
    case 'OPTIONS':
      res.status(204).send('');
      break;
    case 'GET':
      getBois(req, res);
      break;
    default:
      res.status(500).send({ error: 'try a diff verb friend' });
  }
});
