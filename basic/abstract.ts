abstract class Hello {
  protected name: string;

  constructor(name: string) {
    this.name = name;
  }

  abstract hello(): void;
  welcome(): void {
    console.log("hello world");
  }
}

class Hi extends Hello {
  constructor(name: string) {
    super(name);
  }
  hello(): void {
    console.log(this.name + "hello worlds!!");
  }
}

const login = new Hi("lee");
login.hello();
