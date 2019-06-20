import * as React from 'react';
import { IShowProps } from './Main';

export class Stats extends React.PureComponent<IShowProps> {
  public render() {
    const { show } = this.props;
    return (
      <ul className={`fade ${show ? 'in' : ''}`}>
        <li><strong>Location:</strong> Santa Cruz, CA</li>
        <li><strong>Email:</strong> meredith.dodge@gmail.com</li>
        <li><strong>Phone:</strong> 408.348.7106</li>
        <li className="print-only"><strong>Web:</strong> meredithdodge.com</li>
        <li className="web-only">
          <strong>GitHub: </strong>
          <a
            href="https://github.com/mdodge1982"
            target="_blank"
            rel="noopener noreferrer"
          >
            github.com/mdodge1982
          </a>
        </li>
      </ul>
    );
  }
}
