import chai from 'chai';
import chaiHttp from 'chai-http'
import app from '../Server/app'

const { expect } = chai;
chai.use(chaiHttp)

describe('Unread-emails', () => {
    it('Get all unread emails', () => {
        chai.request(app)
          .get('/api/v1/messages/unread')
          .end((err, res) => {
            expect(res.body.status).to.be.equal(404)
            expect(res.body).to.be.an('object')
          })
      })
    })