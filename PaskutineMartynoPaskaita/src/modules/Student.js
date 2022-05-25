import User from './User'

class Student extends User{
    constructor(name, email, school, subject) {
    super(name,email);
    this.school = school;
    this.subject = subject;
    }

    getInfo() {
        return{
            name:this.name,
            email:this.email,
            school:this.school,
            subject:this.subject,
        }
    }
}

export default Student