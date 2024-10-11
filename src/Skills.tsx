import * as React from "react";
import { IShowProps } from "./Main";

export class Skills extends React.PureComponent<IShowProps> {
  public render() {
    const { show } = this.props;
    return (
      <div className={`fade ${show ? "in" : ""}`}>
        <h2>SKILLS</h2>
        <hr />
        <ul>
          <li>
            <strong>Languages:</strong> TypeScript, CSS, HTML
          </li>
          <li>
            <strong>Frameworks:</strong> React, Angular, Vega
          </li>
          <li>
            <strong>Design:</strong> UX, Design Systems, Responsive, Data
            Visualization, Accessibility
          </li>
        </ul>
      </div>
    );
  }
}
