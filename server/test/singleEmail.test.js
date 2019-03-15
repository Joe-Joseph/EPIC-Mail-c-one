import chai from 'chai';
import chaiHttp from 'chai-http'
import app from '../Server/app'

const { expect } = chai;
chai.use(chaiHttp)

describe('Read-email', () => {
    it('Read one email', () => {
        chai.request(app)
          .get('/api/v1/messages/1')
          .end((err, res) => {
            expect(res.body.status).to.be.equal(200)
            expect(res.body).to.be.an('object')
            expect(res.body).to.have.property('status')
            expect(res.body).to.have.property('data')
            expect(res.body.data).to.have.property('id')
            expect(res.body.data).to.have.property('subject')
            expect(res.body.data).to.have.property('message')
            expect(res.body.data).to.have.property('status')
            expect(res.body.data).to.have.property('createdOn')
            
          })
      })
    })