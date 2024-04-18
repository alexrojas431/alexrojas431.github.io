import { describe, expect, it } from "@jest/globals";
import { Fragment } from "react";
import { splitContent } from "@/lib/util/splitContent";

describe("splitContent function", () => {
  const id = "test";

  // If string has 3 newlines
  it("Should seperate string with <br> tags if a newline is found.", () => {
    const content = "test\ntest\ntest";

    const result = splitContent(id, content);

    expect(result).toEqual([
      <Fragment key={id + "_0"}>
        test
        <br />
      </Fragment>,
      <Fragment key={id + "_1"}>
        test
        <br />
      </Fragment>,
      <Fragment key={id + "_2"}>
        test
        <br />
      </Fragment>,
    ]);
  });

  // If string has no newlines or is empty
  it("Should return string", () => {
    const content = "test with no newlines";

    const result = splitContent(id, content);

    expect(result).toEqual(content);
  });

  // If string is empty
  it("Should return empty string", () => {
    const content = "";

    const result = splitContent(id, content);

    expect(result).toEqual(content);
  });
});
