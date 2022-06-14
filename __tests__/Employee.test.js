const Employee = require("./../lib/employee");

describe("Employee", () => {
  describe("Initialization", () => {
    it("should return an object containing a 'name', 'id', and 'email' properties when called with the 'new' keyword", () => {
      const obj = new Employee();

      expect("name" in obj).toEqual(true);
      expect("id" in obj).toEqual(true);
      expect("email" in obj).toEqual(true);
    });

    it("should set 'name', 'id', and 'email' when created", () => {
      const name = 'Nolan';
      const id = 1;
      const email = 'email@email.com';

      const obj = new Employee(name, id, email);

      expect(obj.name).toEqual(name);
      expect(obj.id).toEqual(id);
      expect(obj.email).toEqual(email);
    });
  });

  describe("getName", () => {
    it("should return the employee's name", () => {
      const name = 'Nolan';
      const id = 1;
      const email = 'email@email.com';

      const obj = new Employee(name, id, email);

      expect(obj instanceof Employee).toEqual(true);
    });

    it("should return employee's name", () => {
      const nameIn = 'Nolan';
      const id = 1;
      const email = 'email@email.com';

      const name = new Employee(nameIn, id, email).getName();

      expect(nameIn).toEqual(name);
    });
  });

  describe("getId", () => {
    it("should return the employee's ID", () => {
      const name = 'Nolan';
      const id = 1;
      const email = 'email@email.com';

      const obj = new Employee(name, id, email);

      expect(obj instanceof Employee).toEqual(true);
    });

    it("should return employee's name", () => {
      const name = 'Nolan';
      const idIn = 1;
      const email = 'email@email.com';

      const id = new Employee(name, idIn, email).getId();

      expect(id).toEqual(idIn);
    });
  });

  describe("getEmail", () => {
    it("should return the employee's email", () => {
      const name = 'Nolan';
      const id = 1;
      const email = 'email@email.com';

      const obj = new Employee(name, id, email);

      expect(obj instanceof Employee).toEqual(true);
    });

    it("should return employee's name", () => {
      const name = 'Nolan';
      const id = 1;
      const emailIn = 'email@email.com';

      const email = new Employee(name, id, emailIn).getEmail();

      expect(email).toEqual(emailIn);
    });
  });

  describe("getRole", () => {
    it("should return the employee's name", () => {
      const name = 'Nolan';
      const id = 1;
      const email = 'email@email.com';

      const obj = new Employee(name, id, email);

      expect(obj instanceof Employee).toEqual(true);
    });

    it("should return employee's name", () => {
      const name = 'Nolan';
      const id = 1;
      const email = 'email@email.com';

      const role = new Employee(name, id, email).getRole();

      expect(role).toEqual('Employee');
    });
  });
});
