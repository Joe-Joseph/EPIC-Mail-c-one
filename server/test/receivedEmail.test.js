import chai from 'chai';
import chaiHttp from 'chai-http'
import app from '../Server/app'

const { expect } = chai;
chai.use(chaiHttp)

describe('Received Emails', () =>{
    it('should return an array', (done) =>{
        chai.request(app)
        .get('/api/v1/messages')
        .end((err, res) =>{
           
        expect (res.status).to.be.equal(200);
        expect (res.body).to.have.property('message');
        expect (res.body).to.have.property('status');
        expect (res.body).to.be.an('object');
        done();
        })
    })
})