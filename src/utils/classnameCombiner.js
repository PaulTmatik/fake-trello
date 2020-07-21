export function combineClassNames() {
  const args =
    arguments.length === 1
      ? Array.isArray(arguments[0])
        ? arguments[0]
        : [arguments[0]]
      : Array.apply(null, arguments);

  return args
    .filter((classname) => {
      if (typeof classname === "string") return true;
      return Object.values(classname)[0];
    })
    .map((classname) =>
      typeof classname === "string" ? classname : Object.keys(classname)[0]
    )
    .join(" ");
}
