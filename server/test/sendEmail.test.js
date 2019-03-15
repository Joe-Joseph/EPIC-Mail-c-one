import chai from 'chai';
import chaiHttp from 'chai-http'
import app from '../Server/app'

const { expect } = chai;
chai.use(chaiHttp)

describe('sending-email', () => {
    it('All fields are required', () => {
        chai.request(app)
        .post('/api/v1/messages')
        .send({ 
          subject: "Greetings",
          message: "Hello",
          status: "sent"
        })
        .end((err, res) => {
            expect(res.body.status).to.be.equal(200)
            expect(res.body).to.have.property('status')
            expect(res.body).to.have.property('data')
            expect(res.body).to.be.an('object')
        });
    })

    it('Subject length must be at least 3 characters long', () => {
        chai.request(app)
          .post('/api/v1/messages')
          .send({ subject: 'ab' })
          .end((err, res) => {
            expect(res.body.status).to.be.equal(400)
            expect(res.body.error).to.be.a('string')
            expect(res.body).to.have.property('status')
            expect(res.body).to.have.property('error')
            expect(res.body).to.be.an('object')
          })
      })

      it('Subject length must be at least 3 characters long', () => {
        chai.request(app)
          .post('/api/v1/messages')
          .send({ message: 'ab' })
          .end((err, res) => {
            expect(res.body.status).to.be.equal(400)
            expect(res.body.error).to.be.a('string')
            expect(res.body).to.have.property('status')
            expect(res.body).to.have.property('error')
            expect(res.body).to.be.an('object')
          })
      })
      
      it('Create new message', () =>{
        chai.request(app)
        .post('/api/v1/messages')
        .send({
          subject: "abde",
          message: "abdhe",
          status: "sent"
          })
        .end((err, res) =>{
          expect(res.body.status).to.be.equal(200)
          expect(res).to.be.json
          expect(res.body.data).to.be.an('object')
          expect(res.body).to.have.property('status')
          expect(res.body).to.have.property('data')
          expect(res.body.data).to.have.property('id')
          expect(res.body.data).to.have.property('subject')
          expect(res.body.data).to.have.property('message')
          expect(res.body.data).to.have.property('createdOn')
            
        })
    })
})