import chai from 'chai';
import chaiHttp from 'chai-http'
import app from '../Server/app'

const { expect } = chai;
chai.use(chaiHttp)

describe('Login', () => {
    it('Email and password should not be empty', () => {
        chai.request(app)
          .post('/api/v1/auth/login')
          .send({ 
              email: "",
              password: ""
             })
          .end((err, res) => {
            expect(res.body.status).to.be.equal(400)
            expect(res.body.error).to.be.a('string')
          })
      })

      it('Email should be valid email', () =>{
        chai.request(app)
        .post('/api/v1/auth/login')
        .send({email: "jskdhka"})
        .end((err, res) =>{
          expect(res.body.status).to.be.equal(400)
          expect(res.body.error).to.be.a('string')

        })
    })

    it('Password length must be at least 6 characters long', () =>{
        chai.request(app)
        .post('/api/v1/auth/login')
        .send({
          email: "test@test.com",
          password: "abcde"
          })
        .end((err, res) =>{
          expect(res.body.status).to.be.equal(400)
          expect(res.body.error).to.be.a('string')
 
        })
    })

    it('Not registered', () =>{
      chai.request(app)
      .post('/api/v1/auth/login')
      .send({
        email: "test@test.com",
        password: "abcdejkgfhh"
        })
      .end((err, res) =>{
        expect(res.body.status).to.be.equal(400)
        expect(res.body.error).to.be.a('string')
 
      })
  })

  it('Not registered', () =>{
    chai.request(app)
    .post('/api/v1/auth/login')
    .send({
      email: "john@gmail.com",
      password: "123456"
      })
    .end((err, res) =>{
      expect(res.body.status).to.be.equal(200)
      expect(res.body.message).to.be.a('string')
      expect(res.body).to.be.an('object')
      expect(res.body).to.have.property('status')
      expect(res.body).to.have.property('message')
        
    })
})
})