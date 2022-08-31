import * as Sinon from 'sinon';
import * as chai from 'chai';
import * as bcryptjs from 'bcryptjs';
//@ts-ignore
import chaiHttp = require('chai-http');

import { app } from '../app';
import User from '../database/models/User';

chai.use(chaiHttp);

const { expect } = chai;

const data = {
  id: 1,
  username: 'user',
  role: 'admin',
  email: 'user@admin.com',
  password: bcryptjs.hashSync('secret_admin'),
}

describe('/login', () => {

  describe('Testando caso de sucessso e de erros de campo vazio', () => {
    beforeEach(() => {
      Sinon.stub(User, "findAll").resolves([data as User]);
    })

    afterEach(() => {
      Sinon.restore();
    })

    it('Em caso de sucesso retorna um status 200 e um token', async () => {
      const result = await chai.request(app)
        .post('/login')
        .send({
          email: "user@admin.com",
          password: "secret_admin"
        })
      expect(result.status).to.be.equal(200);
      expect(result.body).to.be.a('object');
      expect(result.body).to.have.a.property('token');
    })

    it('O campo email estiver vazio deve falhar', async ()  => {
      const result = await chai.request(app)
        .post('/login')
        .send({
          email: null,
          password: 'secret_admin',
        });
        expect(result).to.have.status(400);
        expect(result.body.message).to.be.deep.equal('All fields must be filled');
    });
    it('O campo password estiver vazio deve falhar', async ()  => {
      const result = await chai.request(app)
        .post('/login')
        .send({
          email: 'user@admin.com',
          password: null
        });
        expect(result).to.have.status(400);
        expect(result.body.message).to.be.deep.equal('All fields must be filled');
    });
})

  describe('Testando erro de campo incorreto', () => {

    beforeEach(async () => {
      Sinon.stub(User, "findOne")
        .resolves(null);
    });

    afterEach(() => {
      (User.findOne as Sinon.SinonStub).restore();
    })

    it(' Se o email estiver incorreto deve falhar', async () => {
      const result = await chai.request(app)
        .post('/login')
        .send({
          email: 'test@test.com',
          password: "secret_admin",
        });

      expect(result.status).to.be.equal(401)
      expect(result.body.message).to.be.equal('Incorrect email or password')
    })
  })
});
