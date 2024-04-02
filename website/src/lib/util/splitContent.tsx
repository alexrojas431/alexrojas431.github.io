import { Fragment } from "react";

/**
 * splitContent
 *
 * @what
 * Parses through string for a newline character.
 * For every newline, a new br tag is produced within a React Fragment to produce a newline within HTML
 *
 * @why
 * Some blocks of text will need a newline but can't have HTML tags within the string.
 * This functions allows the string to add newline character (\n) without HTML <br> tags
 *
 * @param id - map function needs a unique id.
 * In the implementation, an additional differentation should be added to make sure it stays unqiue.
 * @param content - String that may or may not have a newline
 * @returns React Fragment with added br tag.
 * The final result result should be the content with br tags where the newline characters were.
 */

export function splitContent(id: string, content: string) {
  return content.split("\n").map((line, index) => (
    <Fragment key={id + "_" + index}>
      {line}
      <br />
    </Fragment>
  ));
}
