/* eslint-disable no-undef */
import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import app from '../server';

chai.use(chaiHttp);
chai.should();


describe('POST/signin user ', () => {
  it('it should return 404 for Invalid user email', (done) => {
    const user = {
      email: 'ishic477@gmail.com',
      password: '1234560',
    };

    chai
      .request(app)
      .post('/api/v1/auth/signin')
      .send(user)
      .end((err, res) => {
        expect(res.statusCode).to.equal(404);
        done();
      });
  });

  it('it should return 404 for invalid password', (done) => {
    const user = {
      email: 'ishic47@gmail.com',
      password: '0000045',
    };

    chai
      .request(app)
      .post('/api/v1/auth/signin')
      .send(user)
      .end((err, res) => {
        expect(res.statusCode).to.equal(404);
        done();
      });
  });

  it('it should return 200 if email and password are correct', (done) => {
    const user = {
      email: 'ishic47@gmail.com',
      password: '12345678',
    };

    chai
      .request(app)
      .post('/api/v1/auth/signin')
      .send(user)
      .end((err, res) => {
        expect(res.statusCode).to.equal(200);
        done();
      });
  });
  it(' it should check if inputs required are correct', (done) => {
    const user = {
      email: 'ishic47@gmail',
      password: '12345678',
    };

    chai
      .request(app)
      .post('/api/v1/auth/signin')
      .send(user)
      .end((err, res) => {
        expect(res.statusCode).to.equal(404);
        done();
      });
  });
  it(' it should check an empty field', (done) => {
    const user = {
      email: 'ishic47@gmail.com',
      password: '',
    };

    chai
      .request(app)
      .post('/api/v1/auth/signin')
      .send(user)
      .end((err, res) => {
        expect(res.statusCode).to.equal(401);
        done();
      });
  });
});
