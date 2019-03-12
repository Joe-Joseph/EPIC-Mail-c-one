import chai from 'chai';
import chaiHttp from 'chai-http'
import app from '../Server/app'

const { expect } = chai;
chai.use(chaiHttp)

// eslint-disable-next-line no-undef
describe('Signup', () => {
  // eslint-disable-next-line no-undef
  it('First name and last name length must be at least 3 characters long', () => {
    chai.request(app)
      .post('/api/v1/auth/signup')
      .send({ firstName: 'ab' })
      .end((err, res) => {
        expect(res.body.status).to.be.equal(400)
        expect(res.body.error).to.be.a('string')
      })
  })

  it('All fields are required', () =>{
      chai.request(app)
      .post('/api/v1/auth/signup')
      .send({ firstName: "", 
        lastName: "", 
        email: "", 
        password: "", 
        confirmPassword: "" 
    })
      .end((err, res) =>{
          expect(res.body.status).to.be.equal(400)
          expect(res.body.error).to.be.a('string')
      });
  })

  it('Password and confirm-password length must be at least 6 characters long', () =>{
      chai.request(app)
      .post('/api/v1/auth/signup')
      .send({
        firstName: "abde",
        lastName: "abdhe",
        email: "jos@test.com",
        password: "abcde",
        confirmPassword: "abcde"
        })
      .end((err, res) =>{
        expect(res.body.status).to.be.equal(400)
        expect(res.body.error).to.be.a('string')
          
      })
  })

  it('Password and confirm-password must match', () =>{
    chai.request(app)
    .post('/api/v1/auth/signup')
    .send({
      firstName: "abde",
      lastName: "abdhe",
      email: "jos@test.com",
      password: "abcdefg",
      confirmPassword: "abcdefgh"
      })
    .end((err, res) =>{
      expect(res.body.status).to.be.equal(400)
      expect(res.body.error).to.be.a('string')
        
    })
})

  it('Email should be valid email', () =>{
      chai.request(app)
      .post('/api/v1/auth/signup')
      .send({firstName: "abde", lastName: "abde", email: "josgmail.com"})
      .end((err, res) =>{
        expect(res.body.status).to.be.equal(400)
        expect(res.body.error).to.be.a('string')
      })
  })

  it('Email already exist', () =>{
    chai.request(app)
    .post('/api/v1/auth/signup')
    .send({
      firstName: "abde",
      lastName: "abde",
      email: "john@gmail.com"
    })
    .end((err, res) =>{
      expect(res.body.status).to.be.equal(400)
      expect(res.body.error).to.be.a('string')
    })
})

  it('Create account for user', () =>{
    chai.request(app)
    .post('/api/v1/auth/signup')
    .send({
      firstName: "abde",
      lastName: "abdhe",
      email: "jos@test.com",
      password: "abcdefg",
      confirmPassword: "abcdefg"
      })
    .end((err, res) =>{
      expect(res.body.status).to.be.equal(200)
      expect(res).to.be.json
      expect(res.body.data).to.be.an('object')
        
    })
})
})
