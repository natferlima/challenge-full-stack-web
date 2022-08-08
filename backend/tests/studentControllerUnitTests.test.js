const sinon = require('sinon');
const chai = require('chai');
const { studentController } = require('../controllers');
const studentService = require('../services/studentService');
const studentMock = require('./mocks/studentMock.json');
const messageMock = require('./mocks/messagesMock.json');
const studentMockWithId = require('./mocks/studentMockWithId.json');
const studentMockUpdate = require('./mocks/studentMockUpdate.json');

const { expect } = chai;

let request = {};
let response = {};

describe('STUDENT CONTROLLER UNIT TESTS', () => {

  describe('#getAll()', () => {
    before(() => {
      response.status = sinon.stub().returns(response);
      response.json = sinon.stub().returns();
      sinon.stub(studentService, 'findAll').resolves(studentMockWithId);
    });

    after(() => {
      studentService.findAll.restore();
    })
    it('returns status 200 in GET "/" route', async () => {
      await studentController.getAll(request, response);
      expect(response.status.calledWith(200)).to.be.true;
      expect(response.json.calledWith(studentMockWithId)).to.be.true;
    });
  });

  describe('#getOne()', () => {
    before(() => {
      request.params = { id: studentMockWithId[0].id };
      response.status = sinon.stub().returns(response);
      response.json = sinon.stub().returns();
      sinon.stub(studentService, 'findById').resolves(studentMockWithId[0]);
    });

    after(() => {
      studentService.findById.restore();
    })
    it('returns status 200 in GET "/:id" route', async () => {
      await studentController.getOne(request, response);
      expect(response.status.calledWith(200)).to.be.true;
      expect(response.json.calledWith(studentMockWithId[0])).to.be.true;
    });
  });

  describe('#create()', () => {
    before(() => {
      request.body = studentMock[0];
      response.status = sinon.stub().returns(response);
      response.json = sinon.stub().returns();
      sinon.stub(studentService, 'create').resolves(messageMock[0]);
    });

    after(() => {
      studentService.create.restore();
    })
    it('returns status 201 in POST "/" route', async () => {
      await studentController.create(request, response);
      expect(response.status.calledWith(201)).to.be.true;
      expect(response.json.calledWith(messageMock[0])).to.be.true;
    });
  });

  describe('#update() - editing name and email', () => {
    before(() => {
      request.params = { id: studentMockWithId[0].id };
      request.body = { 
        name: studentMockUpdate[0].name, 
        email: studentMockUpdate[0].email 
      };
      response.status = sinon.stub().returns(response);
      response.json = sinon.stub().returns();
      sinon.stub(studentService, 'update').resolves(studentMockUpdate[0]);
    });

    after(() => {
      studentService.update.restore();
    })
    it('returns status 200 in PUT "/:id"', async () => {
      await studentController.update(request, response);
      expect(response.status.calledWith(200)).to.be.true;
      expect(response.json.calledWith(studentMockUpdate[0])).to.be.true;
    });
  });

  describe('#update() - editing name only', () => {
    before(() => {
      request.params = { id: studentMockWithId[0].id };
      request.body = { 
        name: studentMockUpdate[0].name, 
      };
      response.status = sinon.stub().returns(response);
      response.json = sinon.stub().returns();
      sinon.stub(studentService, 'update').resolves(studentMockUpdate[1]);
    });

    after(() => {
      studentService.update.restore();
    })
    it('returns status 200 in PUT "/:id"', async () => {
      await studentController.update(request, response);
      expect(response.status.calledWith(200)).to.be.true;
      expect(response.json.calledWith(studentMockUpdate[1])).to.be.true;
    });
  });

  describe('#update() - editing email only', () => {
    before(() => {
      request.params = { id: studentMockWithId[0].id };
      request.body = { 
        email: studentMockUpdate[0].email, 
      };
      response.status = sinon.stub().returns(response);
      response.json = sinon.stub().returns();
      sinon.stub(studentService, 'update').resolves(studentMockUpdate[2]);
    });

    after(() => {
      studentService.update.restore();
    })
    it('returns status 200 in PUT "/:id"', async () => {
      await studentController.update(request, response);
      expect(response.status.calledWith(200)).to.be.true;
      expect(response.json.calledWith(studentMockUpdate[2])).to.be.true;
    });
  });

  describe('#remove()', () => {
    before(() => {
      request.params = { id: studentMockWithId[0].id };
      response.status = sinon.stub().returns(response);
      response.json = sinon.stub().returns();
      sinon.stub(studentService, 'remove').resolves(messageMock[1]);
    });

    after(() => {
      studentService.remove.restore();
    })
    it('returns status 200 in DELETE "/:id" route', async () => {
      await studentController.remove(request, response);
      expect(response.status.calledWith(200)).to.be.true;
      expect(response.json.calledWith(messageMock[1])).to.be.true;
    });
  });

});