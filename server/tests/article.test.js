/* eslint-disable no-unused-vars */
/* eslint-disable eol-last */
/* eslint-disable padded-blocks */
/* eslint-disable no-undef */
import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import jwt from 'jsonwebtoken';
import app from '../server';

chai.use(chaiHttp);
chai.should();

describe('post/ Create a new article ', () => {
  it('Should return unauthorised acess, you must provide your Token(401) ', (done) => {
    const user = {
      id:1,
      firstName: 'Ishimwe', 
      lastName: 'Christian', 
      email: 'ishic47@gmail.com',
      password: '12345678',
      gender: 'Male',
      jobRole: 'Manager',
      department: 'IT Department',
      address: 'Kigali',
      is_admin: false
    };
    const newArticle = {
      title: 'Hardworking',
      article: 'When you are content to be simply yourself and dont compare or compete, everyone will respect you.',
    };
    const token = jwt.sign(user, process.env.JWT);
    chai
      .request(app)
      .post('/api/v1/articles')
      .send(newArticle)
      .end((err, res) => {
        expect(res.status).to.equal(401);
        done();
      });
  });
  it('Should return an invalid Token(401) ', (done) => {
    const user = {
      id:1,
      firstName: 'Ishimwe', 
      lastName: 'Christian', 
      email: 'ishic47@gmail.com',
      password: '12345678',
      gender: 'Male',
      jobRole: 'Manager',
      department: 'IT Department',
      address: 'Kigali',
      is_admin: false
    };
    const newArticle = {
      title: 'Hardworking',
      article: 'When you are content to be simply yourself and dont compare or compete, everyone will respect you.',
    };
    const token = jwt.sign(user, 'ok');
    chai
      .request(app)
      .post('/api/v1/articles')
      .set('myToken', token)
      .send(newArticle)
      .end((err, res) => {
        expect(res.status).to.equal(401);
        done();
      });
  });
  it('Should return new article succesfully created(200) ', (done) => {
    const user = {
      id:1,
      firstName: 'Ishimwe', 
      lastName: 'Christian', 
      email: 'ishic47@gmail.com',
      password: '12345678',
      gender: 'Male',
      jobRole: 'Manager',
      department: 'IT Department',
      address: 'Kigali',
      is_admin: false
    };
    const newArticle = {
      title: 'Hardworking',
      article: 'When you are content to be simply yourself and dont compare or compete, everyone will respect you.',
    };
    const token = jwt.sign(user, process.env.JWT);
    chai
      .request(app)
      .post('/api/v1/articles')
      .set('myToken', token)
      .send(newArticle)
      .end((err, res) => {
        expect(res.status).to.equal(200);
        done();
      });
  });
  it('Should check if the admin tries to create the article(401)', (done) => {
    const user = {
      id:4,
      firstName: 'Irakoze', 
      lastName: 'Benithe', 
      email: 'benithe@gmail.com',
      password: '12345678',
      gender: 'Female',
      jobRole: 'Secretary',
      department: 'Management',
      address: 'Kigali',
      is_admin: true
    };
    const newArticle = {
      title: 'Hardworking',
      article: 'When you are content to be simply yourself and dont compare or compete, everyone will respect you.',
    };
    const token = jwt.sign(user, process.env.JWT);
    chai
      .request(app)
      .post('/api/v1/articles')
      .set('myToken', token)
      .send(newArticle)
      .end((err, res) => {
        expect(res.status).to.equal(401);
        done();
      });
  });
  it('Should check if all fields are filled as required(403)', (done) => {
    const user = {
      id:1,
      firstName: 'Ishimwe', 
      lastName: 'Christian', 
      email: 'ishic47@gmail.com',
      password: '12345678',
      gender: 'Male',
      jobRole: 'Manager',
      department: 'IT Department',
      address: 'Kigali',
      is_admin: false
    };
    const newArticle = {
      title: 'Hardworking',
      article: 'yh',
    };
    const token = jwt.sign(user, process.env.JWT);
    chai
      .request(app)
      .post('/api/v1/articles')
      .set('myToken', token)
      .send(newArticle)
      .end((err, res) => {
        expect(res.status).to.equal(403);
        done();
      });
  });
  it('It should check an empty field(403) ', (done) => {
    const user = {
      id:1,
      firstName: 'Ishimwe', 
      lastName: 'Christian', 
      email: 'ishic47@gmail.com',
      password: '12345678',
      gender: 'Male',
      jobRole: 'Manager',
      department: 'IT Department',
      address: 'Kigali',
      is_admin: false
    };
    const newArticle = {
      title: 'Hardworking',
      article: ''
    };
    const token = jwt.sign(user, process.env.JWT);
    chai
      .request(app)
      .post('/api/v1/articles')
      .set('myToken', token)
      .send(newArticle)
      .end((err, res) => {
        expect(res.status).to.equal(403);
        done();
      });
  });
});

describe('patch/ Employees can edit their articles', () => {
  it('It should not be edited when there is an empty field(422) ', (done) => {
    const user = {
      id:1,
      firstName: 'Ishimwe', 
      lastName: 'Christian', 
      email: 'ishic47@gmail.com',
      password: '12345678',
      gender: 'Male',
      jobRole: 'Manager',
      department: 'IT Department',
      address: 'Kigali',
      is_admin: false
    };
    const newArticle = {
      title: 'Bible',
      article: ''
    };
    const token = jwt.sign(user, process.env.JWT);
    chai
      .request(app)
      .patch('/api/v1/articles/4')
      .set('myToken', token)
      .send(newArticle)
      .end((err, res) => {
        expect(res.status).to.equal(422);
        done();
      });
  });
  it('It should return article not found when you edit uncreated article(404) ', (done) => {
    const user = {
      id:1,
      firstName: 'Ishimwe', 
      lastName: 'Christian', 
      email: 'ishic47@gmail.com',
      password: '12345678',
      gender: 'Male',
      jobRole: 'Manager',
      department: 'IT Department',
      address: 'Kigali',
      is_admin: false
    };
    const newArticle = {
      title: 'Achievment ',
      article: 'The three great essentials to achieve anything worthwhile are, first, hard work; second, stick-to-itiveness; third, common sense. — Thomas Edison'
    };
    const token = jwt.sign(user, process.env.JWT);
    chai
      .request(app)
      .patch('/api/v1/articles/10')
      .set('myToken', token)
      .send(newArticle)
      .end((err, res) => {
        expect(res.status).to.equal(404);
        done();
      });
  });
  it('Article successfully edited(200) ', (done) => {
    const user = {
      id:1,
      firstName: 'Ishimwe', 
      lastName: 'Christian', 
      email: 'ishic47@gmail.com',
      password: '12345678',
      gender: 'Male',
      jobRole: 'Manager',
      department: 'IT Department',
      address: 'Kigali',
      is_admin: false
    };
    const newArticle = {
      title: "Bible",
      article: "A good book in all books!!!!",
    };
    const token = jwt.sign(user, process.env.JWT);
    chai
      .request(app)
      .patch('/api/v1/articles/4')
      .set('myToken', token)
      .send(newArticle)
      .end((err, res) => {
        expect(res.status).to.equal(200);
        done();
      });
  });
  it('Should return only author s posts are allowed to modify their articles (401) ', (done) => {
    const user = {
      id:4,
      firstName: 'Irakoze', 
      lastName: 'Benithe', 
      email: 'benithe@gmail.com',
      password: '12345678',
      gender: 'Female',
      jobRole: 'Secretary',
      department: 'Management',
      address: 'Kigali',
      is_admin: true
    };
    const newArticle = {
      title: "Bible",
      article: "A good book in all books!!!!",
    };
    const token = jwt.sign(user, process.env.JWT);
    chai
      .request(app)
      .patch('/api/v1/articles/4')
      .set('myToken', token)
      .send(newArticle)
      .end((err, res) => {
        expect(res.status).to.equal(401);
        done();
      });
  });
  it('Should reject if a user tries to edit other people article (401) ', (done) => {
    const user = {
      id: 5,
      firstName: "Amanda",
      lastName: "Alice",
      email: "amanda@yahoo.fr",
      password: '12345678',
      gender: "Female",
      jobRole: "Secretary",
      department: "Accountant",
      address: "Nyanza",
      is_admin: false 
    };
    const newArticle = {
      title: "Bible",
      article: "A good book in all booksssss",
    };
    const token = jwt.sign(user, process.env.JWT);
    chai
      .request(app)
      .patch('/api/v1/articles/4')
      .set('myToken', token)
      .send(newArticle)
      .end((err, res) => {
        expect(res.status).to.equal(401);
        done();
      });
  });
});
describe('Get/ Employee can view all articles', () => {
  it('It should return list of articles(200) ', (done) => {
    const user = {
      id:1,
      firstName: 'Ishimwe', 
      lastName: 'Christian', 
      email: 'ishic47@gmail.com',
      password: '12345678',
      gender: 'Male',
      jobRole: 'Manager',
      department: 'IT Department',
      address: 'Kigali',
      is_admin: false
    };
    const token = jwt.sign(user, process.env.JWT);
    chai
      .request(app)
      .get('/api/v1/feeds')
      .set('myToken', token)
      .end((err, res) => {
        expect(res.status).to.equal(200);
        done();
      });
  });
  it('it should return only users allowed to view the articles when admin tries(401) ', (done) => {
    const user = {
      id:4,
      firstName: 'Irakoze', 
      lastName: 'Benithe', 
      email: 'benithe@gmail.com',
      password: '12345678',
      gender: 'Female',
      jobRole: 'Secretary',
      department: 'Management',
      address: 'Kigali',
      is_admin: true
    };
    const token = jwt.sign(user, process.env.JWT);
    chai
      .request(app)
      .get('/api/v1/feeds')
      .set('myToken', token)
      .end((err, res) => {
        expect(res.status).to.equal(401);
        done();
      });
  });
});

describe('Delete/ Employees can delete their articles ', () => {
  
  it('It should delete an article(204)  ', (done) => {
    const user = {
      id:1,
      firstName: 'Ishimwe', 
      lastName: 'Christian', 
      email: 'ishic47@gmail.com',
      password: '12345678',
      gender: 'Male',
      jobRole: 'Manager',
      department: 'IT Department',
      address: 'Kigali',
      is_admin: false
    };
    const token = jwt.sign(user, process.env.JWT);
    chai
      .request(app)
      .delete('/api/v1/articles/4')
      .set('myToken', token)
      .end((err, res) => {
        expect(res.status).to.equal(204);
        done();
      });
  });
  it('Should not authorise the admin to delete unflagged article (401)', (done) => {
    const user = {
      id:4,
      firstName: 'Irakoze', 
      lastName: 'Benithe', 
      email: 'benithe@gmail.com',
      password: '12345678',
      gender: 'Female',
      jobRole: 'Secretary',
      department: 'Management',
      address: 'Kigali',
      is_admin: true
    };
    const token = jwt.sign(user, process.env.JWT);
    chai 
      .request(app)
      .delete('/api/v1/articles/4')
      .set('myToken', token)
      .end((err, res) => {
        expect(res.status).to.equal(401);
        done();
      });
  });
  it('if article does not exist return not found(404)  ', (done) => {
    const user = {
      id:1,
      firstName: 'Ishimwe', 
      lastName: 'Christian', 
      email: 'ishic47@gmail.com',
      password: '12345678',
      gender: 'Male',
      jobRole: 'Manager',
      department: 'IT Department',
      address: 'Kigali',
      is_admin: false
    };
    const token = jwt.sign(user, process.env.JWT);
    chai
    .request(app)
      .delete('/api/v1/articles/30')
      .set('myToken', token)
      .end((err, res) => {
        expect(res.status).to.equal(404);
        done();
      });
    });
 
});
describe('post/ Employees can comment on other colleagues article post ', () => {
  it('It should not allow admin to comment(401) ', (done) => {
    const user = {
      id:4,
      firstName: 'Irakoze', 
      lastName: 'Benithe', 
      email: 'benithe@gmail.com',
      password: '12345678',
      gender: 'Female',
      jobRole: 'Secretary',
      department: 'Management',
      address: 'Kigali',
      is_admin: true
    };
    const addComment = {
      comment: 'Yh mn',
    };
    const token = jwt.sign(user, process.env.JWT);
    chai
    .request(app)
      .post('/api/v1/articles/4/comments')
      .set('myToken', token)
      .send(addComment)
      .end((err, res) => {
        expect(res.status).to.equal(401);
        done();
      });
  });
  it('It should not allow users to comment when field is empty(401) ', (done) => {
    const user = {
      id:1,
      firstName: 'Ishimwe', 
      lastName: 'Christian', 
      email: 'ishic47@gmail.com',
      password: '12345678',
      gender: 'Male',
      jobRole: 'Manager',
      department: 'IT Department',
      address: 'Kigali',
      is_admin: false
    };
    const addComment = {
      comment: '',
    };
    const token = jwt.sign(user, process.env.JWT);
    chai
      .request(app)
      .post('/api/v1/articles/2/comments')
      .set('myToken', token)
      .send(addComment)
      .end((err, res) => {
        expect(res.status).to.equal(401);
        done();
      });
    });
  it('It should return article not found when a user comment for non existing article(404) ', (done) => {
    const user = {
      id:1,
      firstName: 'Ishimwe', 
      lastName: 'Christian', 
      email: 'ishic47@gmail.com',
      password: '12345678',
      gender: 'Male',
      jobRole: 'Manager',
      department: 'IT Department',
      address: 'Kigali',
      is_admin: false
    };
    const addComment = {
      comment: 'Woow, nice!',
    };
    const token = jwt.sign(user, process.env.JWT);
    chai
      .request(app)
      .post('/api/v1/articles/24/comments')
      .set('myToken', token)
      .send(addComment)
      .end((err, res) => {
        expect(res.status).to.equal(404);
        done();
      });
  });
  it('It should return comment added(201) ', (done) => {
    const user = {
      id:1,
      firstName: 'Ishimwe', 
      lastName: 'Christian', 
      email: 'ishic47@gmail.com',
      password: '12345678',
      gender: 'Male',
      jobRole: 'Manager',
      department: 'IT Department',
      address: 'Kigali',
      is_admin: false
    };
    const addComment = {
      comment: 'Thats nice for sure',
    };
    const token = jwt.sign(user, process.env.JWT);
    chai
    .request(app)
      .post('/api/v1/articles/2/comments')
      .set('myToken', token)
      .send(addComment)
      .end((err, res) => {
        expect(res.status).to.equal(201);
        done();
      });
  });
});


describe('Get/ Employees can view a specific article ', () => {
  it('Should return a specific article(200)   ', (done) => {
    const user = {
      id:1,
      firstName: 'Ishimwe', 
      lastName: 'Christian', 
      email: 'ishic47@gmail.com',
      password: '12345678',
      gender: 'Male',
      jobRole: 'Manager',
      department: 'IT Department',
      address: 'Kigali',
      is_admin: false
    };
    const token = jwt.sign(user, process.env.JWT);
    chai
      .request(app)
      .get('/api/v1/articles/5')
      .set('myToken', token)
      .end((err, res) => {
        expect(res.status).to.equal(200);
        done();
      });
  });

  it('It should return article not found(404)  ', (done) => {
    const user = {
      id:1,
      firstName: 'Ishimwe', 
      lastName: 'Christian', 
      email: 'ishic47@gmail.com',
      password: '12345678',
      gender: 'Male',
      jobRole: 'Manager',
      department: 'IT Department',
      address: 'Kigali',
      is_admin: false
    };
    const token = jwt.sign(user, process.env.JWT);
    chai
      .request(app)
      .get('/api/v1/articles/20')
      .set('myToken', token)
      .end((err, res) => {
        expect(res.status).to.equal(404);
        done();
      });
  });
  it('Should return Unauthorised access when the admin tries to view the article(401)  ', (done) => {
    const user = {
      id:4,
      firstName: 'Irakoze', 
      lastName: 'Benithe', 
      email: 'benithe@gmail.com',
      password: '12345678',
      gender: 'Female',
      jobRole: 'Secretary',
      department: 'Management',
      address: 'Kigali',
      is_admin: true
    };
    const token = jwt.sign(user, process.env.JWT);
    chai
      .request(app)
      .get('/api/v1/articles/4')
      .set('myToken', token)
      .end((err, res) => {
        expect(res.status).to.equal(401);
        done();
      });
  });
});