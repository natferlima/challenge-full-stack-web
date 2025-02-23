// const sinon = require('sinon');
// const chai = require('chai');
// const chaiHttp = require('chai-http');
// const { Student } = require('../models');
// const studentMock = require('./studentMock.json');
// const studentMockWithId = require('./studentMockWithId.json');

// chai.use(chaiHttp);
// const { expect } = chai;

// const LOCALHOST = 'http://localhost:3001';
// const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7ImlkIjoxLCJlbWFpbCI6ImFkbWluQGVtYWlsLmNvbSIsInJvbGUiOiJhZG1pbmlzdHJhdG9yIn0sImlhdCI6MTY1OTk2NzY1NywiZXhwIjoxNjYwNTcyNDU3fQ.-l4X4paHjAWmDFWgCIR2Uc4hTZHPAPcMh2MRe4D-BI4";

// describe('Integration tests for student routes', function () {
//   describe('route POST "/"', function () {

//     before(() => {
//       sinon.stub(Student, 'findOne').resolves(false);
//       sinon.stub(Student, 'create').resolves(studentMockWithId[0]);
//     });
//     after(() => {
//       Student.findOne.restore();
//       Student.create.restore();

//     });

//     it('returns status 201 and an object', async function () {
//       const response = await chai
//       .request(LOCALHOST)
//       .post('/student')
//       .send({
//         data: {
//           name: "Paula Souza",
//           email: "paula@email.com",
//           RA: 101235,
//           CPF: "121.999.999-99"
//         },
//         headers: {
//           Authorization: TOKEN,
//         }
//       });

//       const id = response.body.id;
//       studentMockWithId[0].id = id;

//       expect(response).to.have.status(201);
//       expect(response.body).to.be.an('object');
//       expect(response.body).to.be.deep.equal(studentMockWithId[0]);
//     });
//   });
//   describe('route GET "/"', function () {

//     before(() => {
//       sinon.stub(Student, 'findAll').resolves(studentMockWithId);
//     });
//     after(() => {
//       Student.findAll.restore();
//     });

//     it('returns status 200 and an array', async function () {
//       const response = await chai
//       .request(LOCALHOST)
//       .get('/student')

//       expect(response).to.have.status(200);
//       expect(response.body).to.be.an('array');
//     });
//   });

//   describe('route GET "/:id"', function () {

//     before(() => {
//       sinon.stub(Student, 'findByPk').resolves(studentMockWithId[0]);
//     });
//     after(() => {
//       Student.findByPk.restore();
//     });

//     it('returns status 200 and an object', async function () {
//       const response = await chai
//       .request(LOCALHOST)
//       .get(`/student/${studentMockWithId[0].id}`)

//       expect(response).to.have.status(200);
//       expect(response.body).to.be.an('object');
//     });
//   });

// });