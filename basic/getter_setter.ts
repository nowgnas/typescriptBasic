class Persons {
  // > 멤버 초기화 필요한것 같음
  private _name: string = "";

  get name() {
    return this._name;
  }
  set name(name: string) {
    if (name.length > 10) {
      throw new Error("name too long");
    }
    this._name = name;
  }
}

let persons = new Persons();

persons.name = "lee";
console.log(persons.name);
