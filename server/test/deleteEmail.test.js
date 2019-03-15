import chai from 'chai';
import chaiHttp from 'chai-http'
import app from '../Server/app'

const { expect } = chai;
chai.use(chaiHttp)

describe('Delete-email', () => {
    it('Get all unread emails', () => {
        chai.request(app)
          .delete('/api/v1/messages/:id')
          .end((err, res) => {
            expect(res.body.status).to.be.equal(404)
            expect(res.body).to.be.an('object')
            expect(res.body).to.have.property('status')
            expect(res.body).to.have.property('send')
          })
      })
    })