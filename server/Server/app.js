import express from 'express'
import bodyParser from 'body-parser'
import routes from '../routes/router'
import singleEmail from '../routes/singleEmail'

const app = express()
app.use(express.json())

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', (req, res) =>
  res.send({ message: ' Welcome to EPIC Mail API' })
)

app.use('/api/v1', routes)
app.use('/api/v1', singleEmail)

// eslint-disable-next-line no-undef
const port = process.env.PORT || 4000
// eslint-disable-next-line no-console
app.listen(port, () => console.log(`Listening to port ${port}`))

export default app
