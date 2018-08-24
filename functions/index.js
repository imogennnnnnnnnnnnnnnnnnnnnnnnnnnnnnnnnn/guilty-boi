const functions = require('firebase-functions')
const admin     = require('firebase-admin')
const express   = require('express')
const cors      = require('cors')

const API_PREFIX = 'api'

admin.initializeApp();
const db = admin.firestore();
db.settings({timestampsInSnapshots: true})

const app = express()
app.use((req, res, next) => {
  if (req.url.indexOf(`/${API_PREFIX}/`) === 0) {
    req.url = req.url.substring(API_PREFIX.length + 1);
  }
  next();
});
app.use(cors({origin: true}))
app.options('*', cors())

app.get('/bois', async (req, res) => {
  const bois = await db.collection('bois').get()
  res.json(bois.docs.map(boi => ({
    id: boi.id,
    ...boi.data()
  })))
})
app.get('/bois/:id', async (req, res) => {
  const boi = await db.doc(`bois/${req.params.id}`).get()
  if (!boi.exists) res.status(404).end()
  res.json({
    id: boi.id,
    ...boi.data()
  })
})
app.get('/bois/:id/verify', async (req, res) => {
  const boi = await db.doc(`bois/${req.params.id}`).get()
  if (!boi.exists) res.status(404).end()
  res.json({
    very: true,
    message: "it's a boi!!"
  })
})

exports[API_PREFIX] = functions.https.onRequest(app)
