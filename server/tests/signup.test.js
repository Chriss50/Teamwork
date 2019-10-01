/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-undef */
import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import app from '../server';

chai.use(chaiHttp);
chai.should();


describe('POST/signup ', () => {
  it('User successfully created, it should return(401)', (done) => {
    const user = {
      firstName: "Byiringiro",
      lastName: "Jean Paul",
      email: "jeanpaul@live.com",
      password: 'byiringiro',
      gender: "Male",
      jobRole: "Developer",
      department: "IT depart",
      address: "Kigali",

    };

    chai
      .request(app)
      .post('/api/v1/auth/signup')
      .send(user)
      .end((err, res) => {
        expect(res.statusCode).to.equal(401);
        done();
      });
  });


  it('should not register an already registered user(401)', (done) => {
    const user = {
      firstName: 'Ishimwe', 
      lastName: 'Christian', 
      email: 'ishic47@gmail.com',
      password: '123457',
      gender: 'Male',
      jobRole: 'Manager',
      department: 'IT Department',
      address: 'Kigali',
    };

    chai
      .request(app)
      .post('/api/v1/auth/signup')
      .send(user)
      .end((err, res) => {
        expect(res.statusCode).to.equal(401);
        done();
      });
  });

  it(' it should check if inputs required are correct(401)', (done) => {
    const user = {
      firstName: "Byiringiro",
      lastName: "Jean Paul",
      email: "jeanpaul@live.com",
      password: 'byiringiro',
      gender: "Male",
      jobRole: "Developer",
      department: "IT depart",
      address: "Kigali",
    };

    chai
      .request(app)
      .post('/api/v1/auth/signup')
      .send(user)
      .end((err, res) => {
        expect(res.statusCode).to.equal(401);
        done();
      });
  });
  it(' it should check an empty field(401)', (done) => {
    const user = {
      firstName: "Byiringiro",
      lastName: "",
      email: "jeanpaul@live.com",
      password: 'byiringiro',
      gender: "Male",
      jobRole: "Developer",
      department: "IT depart",
      address: "Kigali",
    };

    chai
      .request(app)
      .post('/api/v1/auth/signup')
      .send(user)
      .end((err, res) => {
        expect(res.statusCode).to.equal(401);
        done();
      });
  });

  it('should return method not allowed for a wrong method(404)', (done) => {
    const user = {
      firstName: "Byiringiro",
      lastName: "Jean Paul",
      email: "jeanpaul@live.com",
      password: 'byiringiro',
      gender: "Male",
      jobRole: "Developer",
      department: "IT depart",
      address: "Kigali",
    };

    chai
      .request(app)
      .get('/api/v1/auth/signup')
      .send(user)
      .end((err, res) => {
        expect(res.statusCode).to.equal(404);
        done();
      });
  });
});
