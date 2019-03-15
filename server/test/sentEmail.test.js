// import chai from 'chai';
// import chaiHttp from 'chai-http'
// import app from '../Server/app'
// import messages from '../models/messages'

// const { expect } = chai;
// chai.use(chaiHttp)

// describe('Sent-emails', () => {
//     it('Email not found', () => {
//         chai.request(app)
//           .post('/api/v1/messages/sent')
//           .end((err, res) => {
//             expect(res.body.status).to.be.equal(200)
//             expect(messages.status).to.be.equal('sent')
//           })
//       })
//     })