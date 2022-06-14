const Manager = require("./../lib/manager");

describe("Manager", () => {
  describe("Initialization", () => {
    it("should return an object containing a 'name', 'id', and 'email' properties when called with the 'new' keyword", () => {
      const obj = new Manager();

      expect("name" in obj).toEqual(true);
      expect("id" in obj).toEqual(true);
      expect("email" in obj).toEqual(true);
      expect("office" in obj).toEqual(true);
    });

    it("should set 'name', 'id', and 'email' when created", () => {
      const name = 'Nolan';
      const id = 1;
      const email = 'email@email.com';
      const office = 'office';

      const obj = new Manager(name, id, email, office);

      expect(obj.name).toEqual(name);
      expect(obj.id).toEqual(id);
      expect(obj.email).toEqual(email);
    });
  });

  describe("getName", () => {
    it("should return the Manager's name", () => {
      const name = 'Nolan';
      const id = 1;
      const email = 'email@email.com';
      const office = 'office';

      const obj = new Manager(name, id, email, office);

      expect(obj instanceof Manager).toEqual(true);
    });

    it("should return Manager's name", () => {
      const nameIn = 'Nolan';
      const id = 1;
      const email = 'email@email.com';
      const office = 'office';

      const name = new Manager(nameIn, id, email).getName();

      expect(nameIn).toEqual(name);
    });
  });

  describe("getId", () => {
    it("should return the Manager's ID", () => {
      const name = 'Nolan';
      const id = 1;
      const email = 'email@email.com';
      const office = 'office';

      const obj = new Manager(name, id, email, office);

      expect(obj instanceof Manager).toEqual(true);
    });

    it("should return Manager's name", () => {
      const name = 'Nolan';
      const idIn = 1;
      const email = 'email@email.com';
      const office = 'office';

      const id = new Manager(name, idIn, email).getId();

      expect(id).toEqual(idIn);
    });
  });

  describe("getEmail", () => {
    it("should return the Manager's email", () => {
      const name = 'Nolan';
      const id = 1;
      const email = 'email@email.com';
      const office = 'office';

      const obj = new Manager(name, id, email, office);

      expect(obj instanceof Manager).toEqual(true);
    });

    it("should return Manager's name", () => {
      const name = 'Nolan';
      const id = 1;
      const emailIn = 'email@email.com';
      const office = 'office';

      const email = new Manager(name, id, emailIn, office).getEmail();

      expect(email).toEqual(emailIn);
    });
  });

  describe("getoffice", () => {
    it("should return the Manager's office", () => {
      const name = 'Nolan';
      const id = 1;
      const email = 'email@email.com';
      const office = 'office';

      const obj = new Manager(name, id, email, office);

      expect(obj instanceof Manager).toEqual(true);
    });

    it("should return Manager's name", () => {
      const name = 'Nolan';
      const id = 1;
      const email = 'email@email.com';
      const officeIn = 'office';

      const office = new Manager(name, id, email, officeIn).getOffice();

      expect(office).toEqual(officeIn);
    });
  });

  describe("getRole", () => {
    it("should return the Manager's name", () => {
      const name = 'Nolan';
      const id = 1;
      const email = 'email@email.com';
      const office = 'office';

      const obj = new Manager(name, id, email, office);

      expect(obj instanceof Manager).toEqual(true);
    });

    it("should return Manager's name", () => {
      const name = 'Nolan';
      const id = 1;
      const email = 'email@email.com';
      const office = 'office';

      const role = new Manager(name, id, email, office).getRole();

      expect(role).toEqual('Manager');
    });
  });
});
