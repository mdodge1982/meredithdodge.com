import * as React from 'react';
import { IShowProps } from './Main';

export class Experience extends React.PureComponent<IShowProps> {
  public render() {
    const { show } = this.props;
    return (
      <div className={`fade ${show ? 'in' : ''}`}>
        <h2>EXPERIENCE</h2>
        <hr/>
        <p>
          <strong>2018-current: Frontend Developer<span>, </span>
            <a
              href="https://www.ontera.bio"
              target="_blank"
              rel="noopener noreferrer"
            >
              Ontera
            </a>
            , Santa Cruz, CA<br/>
          </strong>
          Owned UI development for software projects, including the control
          interface for a sample-to-answer nanopore diagnostic device and the
          in-house inventory management, QC, experiment analysis platform.
        </p>

        <p>
          <strong>2010-2018: Director, Frontend Development<span>, </span>
          <a
            href="https://www.youtech.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            YouTech
          </a>
          , Brisbane, CA<br/>
          </strong>
          Managed the front-end team of 5 developers responsible for the UI of a
          multi-tenant, multilingual digital offer management SaaS platform, as
          well as consumer-facing white label promotional offer sites handling
          into the hundreds of thousands of transactions per day.
        </p>
        <p>
          <strong>2006-2010: Web Designer/Developer<span>, </span>
            <a
              href="https://en.wikipedia.org/wiki/Actel"
              target="_blank"
              rel="noopener noreferrer"
            >
              Actel
            </a>
            , Mountain View, CA<br/>
          </strong>
          Developed and maintained the corporate website and software downloads
          portal, including internationalization; Designed and created interactive
          banner ads and graphics for digital and print media, HTML emails,
          landing pages, and internal sites.
        </p>
      </div>
    );
  }
}
