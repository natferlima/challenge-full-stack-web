const sinon = require('sinon');
const chai = require('chai');
const { Student } = require('../models');
const studentService = require('../services/studentService');
const studentMock = require('./mocks/studentMock.json');
const messageMock = require('./mocks/messagesMock.json');
const studentMockWithId = require('./mocks/studentMockWithId.json');

const { expect } = chai;

describe('STUDENT SERVICE UNIT TESTS', () => {
  
  describe('#findAll()', () => {
    before(() => {
      sinon.stub(Student, 'findAll').resolves(studentMockWithId);
    });

    after(() => {
      Student.findAll.restore();
    })
    it('returns an array with 4 elements', async () => {
      const result = await studentService.findAll();
      expect(result).to.be.an("array");
      expect(result).to.have.lengthOf(4);
      expect(result).to.be.eql(studentMockWithId);
    });
  });

  describe('#findOne()', () => {
    before(() => {
      sinon.stub(Student, 'findOne').resolves(studentMockWithId[0]);
    });

    after(() => {
      Student.findOne.restore();
    })
    it('returns an object with the keys id, name, email, RA and CPF', async () => {
      const result = await studentService.findOne(studentMockWithId[0].email);
      expect(result).to.be.an("object");
      expect(result).to.have.all.keys('id', 'name', 'email', 'RA', 'CPF');
      expect(result).to.be.eql(studentMockWithId[0]);
    });
  });

  describe('#create()', () => {
    before(() => {
      sinon.stub(Student, 'create').resolves(messageMock[0]);
    });

    after(() => {
      Student.create.restore();
    })
    it('returns an object with the message key ', async () => {

      const result = await studentService.create(studentMock[0]);
      expect(result).to.be.an("object");
      expect(result).to.have.all.keys('message');
      expect(result.message).to.be.eql("Aluno(a) cadastrado(a) com sucesso!");
    });

  });

  describe('#findByRA()', () => {
    before(() => {
      sinon.stub(Student, 'findOne').resolves(studentMockWithId[0]);
    });

    after(() => {
      Student.findOne.restore();
    })
    it('returns an object with the keys id, name, email, RA and CPF ', async () => {

      const result = await studentService.findByRA(studentMock[0].RA);
      expect(result).to.be.an("object");
      expect(result).to.have.all.keys('id', 'name', 'email', 'RA', 'CPF');
      expect(result).to.be.eql(studentMockWithId[0]);
    });

  });

  describe('#findById()', () => {
    before(() => {
      sinon.stub(Student, 'findByPk').resolves(studentMockWithId[0]);
    });

    after(() => {
      Student.findByPk.restore();
    })
    it('returns an object with the keys id, name, email, RA and CPF ', async () => {

      const result = await studentService.findById(studentMockWithId[0].id);
      expect(result).to.be.an("object");
      expect(result).to.have.all.keys('id', 'name', 'email', 'RA', 'CPF');
      expect(result).to.be.eql(studentMockWithId[0]);
    });

  });

  describe('#update()', () => {
    before(() => {
      sinon.stub(Student, 'update').resolves();
      sinon.stub(Student, 'findByPk').resolves(studentMockWithId[0]);
    });

    after(() => {
      Student.update.restore();
      Student.findByPk.restore();
    })
    it('returns an object with the keys id, name, email, RA and CPF ', async () => {

      const result = await studentService.update(studentMockWithId[0].id);
      expect(result).to.be.an("object");
      expect(result).to.have.all.keys('id', 'name', 'email', 'RA', 'CPF');
      expect(result).to.be.eql(studentMockWithId[0]);
    });
  });

  describe('#remove()', () => {
    before(() => {
      sinon.stub(Student, 'destroy').resolves(messageMock[1]);
    });

    after(() => {
      Student.destroy.restore();
    })
    it('returns an object with the message key ', async () => {

      const result = await studentService.remove(studentMockWithId[0].id);
      expect(result).to.be.an("object");
      expect(result).to.have.all.keys('message');
      expect(result.message).to.be.eql("Aluno(a) excluído(a) com sucesso!");
    });

  });
});