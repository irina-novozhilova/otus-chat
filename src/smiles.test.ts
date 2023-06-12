import { initSmiles, parseSmiles } from "./smiles";

let smiles: HTMLDivElement | null;
let smile1: HTMLAnchorElement | null;
let smileImage1: HTMLImageElement | null;
let input: HTMLInputElement | null;
describe("smiles", () => {
  beforeEach(() => {
    smiles = document.createElement("div");
    smiles.classList.add("smiles");

    smile1 = document.createElement("a");
    smile1.setAttribute("href", "angry");

    smileImage1 = document.createElement("img");
    smile1.setAttribute("src", "images/angry.svg");

    smile1.append(smileImage1);
    smiles.append(smile1);

    input = document.createElement("input");
    input.classList.add("inputMessage");

    // @ts-ignore
    jest
      .spyOn(global.document, "querySelector")
      // @ts-ignore
      .mockImplementation((selector) => {
        switch (selector) {
          case ".inputMessage":
            return input;
          default:
            return undefined;
        }
      });

    // @ts-ignore
    jest
      .spyOn(global.document, "querySelectorAll")
      // @ts-ignore
      .mockImplementation((selector) => {
        switch (selector) {
          case ".smiles a":
            // @ts-ignore
            return smiles?.querySelectorAll("a");
          default:
            return undefined;
        }
      });
  });

  afterAll(() => {
    jest.clearAllMocks();
    jest.resetAllMocks();
  });

  it("has a function", () => {
    expect(initSmiles).toBeInstanceOf(Function);
    expect(parseSmiles).toBeInstanceOf(Function);
  });

  it("initSmiles has one smile", () => {
    initSmiles();
    const addEvt = new Event("click");
    const testAnchor = smiles?.querySelector("a");
    testAnchor?.dispatchEvent(addEvt);
    // @ts-ignore
    expect(input?.value).toStrictEqual("##angry##");
  });

  it("parseSmiles has one smile", () => {
    const parsedText = parseSmiles("Hello! ##angry## Batman!");
    expect(parsedText).toStrictEqual(
      'Hello! <img src="images/angry.svg" alt=""> Batman!'
    );
  });
});
