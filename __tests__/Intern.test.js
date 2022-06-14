const Intern = require("./../lib/Intern");

describe("Intern", () => {
  describe("Initialization", () => {
    it("should return an object containing a 'name', 'id', and 'email' properties when called with the 'new' keyword", () => {
      const obj = new Intern();

      expect("name" in obj).toEqual(true);
      expect("id" in obj).toEqual(true);
      expect("email" in obj).toEqual(true);
      expect("school" in obj).toEqual(true);
    });

    it("should set 'name', 'id', and 'email' when created", () => {
      const name = 'Nolan';
      const id = 1;
      const email = 'email@email.com';
      const school = 'school';

      const obj = new Intern(name, id, email, school);

      expect(obj.name).toEqual(name);
      expect(obj.id).toEqual(id);
      expect(obj.email).toEqual(email);
    });
  });

  describe("getName", () => {
    it("should return the Intern's name", () => {
      const name = 'Nolan';
      const id = 1;
      const email = 'email@email.com';
      const school = 'school';

      const obj = new Intern(name, id, email, school);

      expect(obj instanceof Intern).toEqual(true);
    });

    it("should return Intern's name", () => {
      const nameIn = 'Nolan';
      const id = 1;
      const email = 'email@email.com';
      const school = 'school';

      const name = new Intern(nameIn, id, email, school).getName();

      expect(nameIn).toEqual(name);
    });
  });

  describe("getId", () => {
    it("should return the Intern's ID", () => {
      const name = 'Nolan';
      const id = 1;
      const email = 'email@email.com';
      const school = 'school';

      const obj = new Intern(name, id, email, school);

      expect(obj instanceof Intern).toEqual(true);
    });

    it("should return Intern's name", () => {
      const name = 'Nolan';
      const idIn = 1;
      const email = 'email@email.com';
      const school = 'school';

      const id = new Intern(name, idIn, email, school).getId();

      expect(id).toEqual(idIn);
    });
  });

  describe("getEmail", () => {
    it("should return the Intern's email", () => {
      const name = 'Nolan';
      const id = 1;
      const email = 'email@email.com';
      const school = 'school';

      const obj = new Intern(name, id, email, school);

      expect(obj instanceof Intern).toEqual(true);
    });

    it("should return Intern's name", () => {
      const name = 'Nolan';
      const id = 1;
      const emailIn = 'email@email.com';
      const school = 'school';

      const email = new Intern(name, id, emailIn, school).getEmail();

      expect(email).toEqual(emailIn);
    });
  });

  describe("getSchool", () => {
    it("should return the Intern's school", () => {
      const name = 'Nolan';
      const id = 1;
      const email = 'email@email.com';
      const school = 'school';

      const obj = new Intern(name, id, email, school);

      expect(obj instanceof Intern).toEqual(true);
    });

    it("should return Intern's name", () => {
      const name = 'Nolan';
      const id = 1;
      const email = 'email@email.com';
      const schoolIn = 'school';

      const school = new Intern(name, id, email, schoolIn).getSchool();

      expect(school).toEqual(schoolIn);
    });
  });

  describe("getRole", () => {
    it("should return the Intern's name", () => {
      const name = 'Nolan';
      const id = 1;
      const email = 'email@email.com';
      const school = 'school';

      const obj = new Intern(name, id, email, school);

      expect(obj instanceof Intern).toEqual(true);
    });

    it("should return Intern's name", () => {
      const name = 'Nolan';
      const id = 1;
      const email = 'email@email.com';
      const school = 'school';

      const role = new Intern(name, id, email, school).getRole();

      expect(role).toEqual('Intern');
    });
  });
});
