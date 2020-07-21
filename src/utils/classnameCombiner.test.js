import { combineClassNames } from "./classnameCombiner";

describe("Function combineClassNames", () => {
  test("shuld exists", () => {
    expect(typeof combineClassNames).not.toBe(typeof undefined);
  });

  test('shuld return "class-name class_name class__name"', () => {
    expect(combineClassNames(["class-name", "class_name", "class__name"])).toBe(
      "class-name class_name class__name"
    );

    expect(combineClassNames("class-name", "class_name", "class__name")).toBe(
      "class-name class_name class__name"
    );
  });

  test('shuld return "class-name"', () => {
    expect(combineClassNames("class-name")).toBe("class-name");

    expect(combineClassNames(["class-name"])).toBe("class-name");
  });

  test('shuld return "class-name class__name"', () => {
    expect(
      combineClassNames(["class-name", { class_name: false }, "class__name"])
    ).toBe("class-name class__name");
  });

  test('shuld return "class-name class_name class__name"', () => {
    expect(
      combineClassNames(["class-name", { class_name: true }, "class__name"])
    ).toBe("class-name class_name class__name");
  });
});
