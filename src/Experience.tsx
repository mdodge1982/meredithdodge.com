import * as React from "react";
import { IShowProps } from "./Main";

export class Experience extends React.PureComponent<IShowProps> {
  public render() {
    const { show } = this.props;
    return (
      <div className={`fade ${show ? "in" : ""}`}>
        <h2>EXPERIENCE</h2>
        <hr />
        <p>
          <strong>
            2019-current: Senior Software Engineer<span>, </span>
            <a
              href="https://cloud.google.com/looker/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Looker (Google)
            </a>
            , Santa Cruz, CA
            <br />
          </strong>
          Worked on various aspects of the Looker and Looker Studio UI,
          including Components, Filters, and Visualizations.
        </p>
        <p>
          <strong>
            2018-2019: Frontend Developer<span>, </span>
            <a
              href="https://www.ontera.bio"
              target="_blank"
              rel="noopener noreferrer"
            >
              Ontera
            </a>
            , Santa Cruz, CA
            <br />
          </strong>
          Owned UI development for software projects, including the control
          interface for a sample-to-answer nanopore diagnostic device and the
          in-house inventory management, QC, experiment analysis platform.
        </p>

        <p>
          <strong>
            2010-2018: Director, Frontend Development<span>, </span>
            <a
              href="https://www.youtech.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              YouTech
            </a>
            , Brisbane, CA
            <br />
          </strong>
          Managed the front-end team of 5 developers responsible for the UI of a
          multi-tenant, multilingual digital offer management SaaS platform, as
          well as consumer-facing white label promotional offer sites handling
          into the hundreds of thousands of transactions per day.
        </p>
      </div>
    );
  }
}
