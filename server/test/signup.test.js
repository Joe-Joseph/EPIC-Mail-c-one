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
      })
  })

  // it('First name should not be empty', () =>{
  //     chai.request(app)
  //     .post('/api/v1/auth/signup')
  //     .send({firstName: "", lastName: ""})
  //     .end((err, res) =>{
  //         // expect(res.body).to.be.an('object');
  //         // // expect(res.body).to.be.json;
  //         // expect(res.body).to.have.status(400);
  //         console.log(res.body);
  //     });
  // })

  // it(' Password and confirm-password length must be at least 6 characters long', () =>{
  //     chai.request(app)
  //     .post('/api/v1/auth/signup')
  //     .send({firstName: "abde", lastName: "abde", password: "abc", confirmPassword: "ab", email: "jos@test.com"})
  //     .end((err, res) =>{
  //         console.log(res.body);
  //     })
  // })

  // it(' Email should not be empty', () =>{
  //     chai.request(app)
  //     .post('/api/v1/auth/signup')
  //     .send({firstName: "abde", lastName: "abde", email: ""})
  //     .end((err, res) =>{
  //         console.log(res.body);
  //     })
  // })

  // it(' Email should be valid email', () =>{
  //     chai.request(app)
  //     .post('/api/v1/auth/signup')
  //     .send({firstName: "abde", lastName: "abde", email: "jos@gmail.com"})
  //     .end((err, res) =>{
  //         console.log(res.body);
  //     })
  // })
})
