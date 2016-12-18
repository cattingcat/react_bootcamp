export enum Color {Red, Green, Blue};

type C = {
  a: number,
  b?: string
};

interface SomeInterface {
  color?: string;
  width?: number;
  [index: number]: any;
}

interface StringArray {
    [index: number]: string;
}

interface Point {
    readonly x: number;
    readonly y: number;
    readonly arr: ReadonlyArray<string>;
}

export class Foo {
  foo(): void {
    let b: boolean = false;
    let n: number = 0;
    let s: string = "asdasd";
    let l: Array<number> = [1, 2, 3];
    let t: [number, string] = [1, "sdf"];
    let color: Color = Color.Red;

    let a: any = "qweqwe";
    a = 5;
    a = false;
    b = (a as boolean);

    let v: void = undefined; // or null
  }

  // unreachable endpoint for never function
  neverFoo(): never {
    throw new Error("asdasd");
  }


  test(): void {
    let arr: Array<string> = ["asdasd", "zxczxc"];

    this.destruct([11, "sdfsdf"]);
    this.destructArr(["f", "sdfsdf", ...arr, "l"]);
    this.testObj({ a: 55 });

    console.log("this foos");
    this.thisFoo1();
    this.thisFoo2();
  }

  destruct(t: [number, string]): void {
    let [a, b] = t;
    console.log(a, b);
  }

  destructArr(arr: Array<string>): void {
    let [f, ...r] = arr;
    console.log(f, r);
  }

  testObj(o: C): void {
    console.log(o)
  }

  thisFoo1(): void {
    console.log(this);
  }
  thisFoo2(this: Foo): void {
    console.log(this);
  }
}
