import * as React from "react";
import { IShowProps } from "./Main";

export class Header extends React.PureComponent<IShowProps> {
  public render() {
    const { show } = this.props;
    return (
      <div className={`fade ${show ? "in" : ""}`}>
        <h1>Meredith Dodge</h1>
        <div className="row">
          <h3>Frontend Software Engineer</h3>
          <a
            href="Meredith-Dodge-Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="web-only"
          >
            PDF Version
          </a>
        </div>
        <hr />
      </div>
    );
  }
}
