export class User {
    constructor(name, email, id = null) {
        if (!name || !email) {
            throw new Error('Name and email are required');
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            throw new Error('Invalid email format');
    }

    this.id = id;
    this.name = name;
    this.email = email;
    }
}
