const Engineer = require("./../lib/engineer");

describe("Engineer", () => {
  describe("Initialization", () => {
    it("should return an object containing a 'name', 'id', and 'email' properties when called with the 'new' keyword", () => {
      const obj = new Engineer();

      expect("name" in obj).toEqual(true);
      expect("id" in obj).toEqual(true);
      expect("email" in obj).toEqual(true);
      expect("github" in obj).toEqual(true);
    });

    it("should set 'name', 'id', and 'email' when created", () => {
      const name = 'Nolan';
      const id = 1;
      const email = 'email@email.com';
      const github = 'github';

      const obj = new Engineer(name, id, email, github);

      expect(obj.name).toEqual(name);
      expect(obj.id).toEqual(id);
      expect(obj.email).toEqual(email);
    });
  });

  describe("getName", () => {
    it("should return the Engineer's name", () => {
      const name = 'Nolan';
      const id = 1;
      const email = 'email@email.com';
      const github = 'github';

      const obj = new Engineer(name, id, email, github);

      expect(obj instanceof Engineer).toEqual(true);
    });

    it("should return Engineer's name", () => {
      const nameIn = 'Nolan';
      const id = 1;
      const email = 'email@email.com';
      const github = 'github';

      const name = new Engineer(nameIn, id, email, github).getName();

      expect(nameIn).toEqual(name);
    });
  });

  describe("getId", () => {
    it("should return the Engineer's ID", () => {
      const name = 'Nolan';
      const id = 1;
      const email = 'email@email.com';
      const github = 'github';

      const obj = new Engineer(name, id, email, github);

      expect(obj instanceof Engineer).toEqual(true);
    });

    it("should return Engineer's name", () => {
      const name = 'Nolan';
      const idIn = 1;
      const email = 'email@email.com';
      const github = 'github';

      const id = new Engineer(name, idIn, email, github).getId();

      expect(id).toEqual(idIn);
    });
  });

  describe("getEmail", () => {
    it("should return the Engineer's email", () => {
      const name = 'Nolan';
      const id = 1;
      const email = 'email@email.com';
      const github = 'github';

      const obj = new Engineer(name, id, email, github);

      expect(obj instanceof Engineer).toEqual(true);
    });

    it("should return Engineer's name", () => {
      const name = 'Nolan';
      const id = 1;
      const emailIn = 'email@email.com';
      const github = 'github';

      const email = new Engineer(name, id, emailIn, github).getEmail();

      expect(email).toEqual(emailIn);
    });
  });

  describe("getGithub", () => {
    it("should return the Engineer's github", () => {
      const name = 'Nolan';
      const id = 1;
      const email = 'email@email.com';
      const github = 'github';

      const obj = new Engineer(name, id, email, github);

      expect(obj instanceof Engineer).toEqual(true);
    });

    it("should return Engineer's name", () => {
      const name = 'Nolan';
      const id = 1;
      const email = 'email@email.com';
      const githubIn = 'github';

      const github = new Engineer(name, id, email, githubIn).getGithub();

      expect(github).toEqual("https://github.com/github");
    });
  });

  describe("getRole", () => {
    it("should return the Engineer's name", () => {
      const name = 'Nolan';
      const id = 1;
      const email = 'email@email.com';
      const github = 'github';

      const obj = new Engineer(name, id, email, github);

      expect(obj instanceof Engineer).toEqual(true);
    });

    it("should return Engineer's name", () => {
      const name = 'Nolan';
      const id = 1;
      const email = 'email@email.com';
      const github = 'github';

      const role = new Engineer(name, id, email, github).getRole();

      expect(role).toEqual('Engineer');
    });
  });
});
