import { Fragment } from "react";

export function splitContent(id: string, content: string) {
  return content.split("\n").map((line, index) => (
    <Fragment key={id + "_" + index}>
      {line}
      <br />
    </Fragment>
  ));
}
