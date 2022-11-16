import { test, expect } from "vitest";
import { courseMerge } from "../functions/courseMerge";

test("shallow merge", () => {
  const merged = courseMerge(
    {
      name: "Anthony",
    },
    {
      github: "antfu",
    }
  );

  expect(merged).toEqual({
    name: "Anthony",
    github: "antfu",
  });
});

test("shallow merge with overlaps", () => {
  const merged = courseMerge(
    {
      name: "Anthony",
      github: "unknown",
    },
    {
      github: "antfu",
      twitter: "antfu7",
    }
  );

  expect(merged).toEqual({
    name: "Anthony",
    github: "antfu",
    twitter: "antfu7",
  });
});

test("shallow merge with arrays", () => {
  const merged = courseMerge(["vue", "react"], ["svelte", "solid"]);

  expect(merged).toEqual(["vue", "react", "svelte", "solid"]);
});

test("deep merge with overlaps", () => {
  const merged = courseMerge(
    {
      name: "Anthony",
      accounts: {
        github: "unknown",
      },
    },
    {
      accounts: {
        twitter: "antfu7",
      },
    }
  );
  console.log(merged);
  expect(merged).toEqual({
    name: "Anthony",
    accounts: {
      github: "unknown",
      twitter: "antfu7",
    },
  });
});

test("throws errors on merging two different types", () => {
  expect(() => courseMerge(["foo", "bar"], { foo: "bar" })).toThrowError(
    "Can not merge two differnet types"
  );
});
