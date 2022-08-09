// const sinon = require('sinon');
// const chai = require('chai');
// const { loginController } = require('../controllers');
// const generateJWT = require('../utils/generateJWT');
// const userService = require('../services/userService');
// const messageMock = require('./mocks/messagesMock.json');
// const userMock = require('./mocks/userMock.json');
// const tokenMock = require('./mocks/tokenMock.json')

// const { expect } = chai;

// let request = {};
// let response = {};

// describe('LOGIN CONTROLLER UNIT TESTS', () => {

//   describe('#login()', () => {
//     before(() => {
//       request.body = {
//         email: "",
//         password: "",
//       }
//       response.status = sinon.stub().returns(response);
//       response.json = sinon.stub().returns();
//       sinon.stub(userService, 'findOne').resolves(userMock[0]);
//       sinon.stub(generateJWT, 'generateToken').resolves(tokenMock[0].token);
//     });

//     after(() => {
//       userService.findOne.restore();
//       generateJWT.generateToken.restore();
//     })
//     it('returns status 200 in POST "/" route', async () => {
//       await loginController.login(request, response);
//       expect(response.status.calledWith(200)).to.be.true;
//       expect(response.json.calledWith(tokenMock[0])).to.be.true;
//     });
//   });

// });