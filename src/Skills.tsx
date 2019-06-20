import * as React from 'react';
import { IShowProps } from './Main';

export class Skills extends React.PureComponent<IShowProps> {
  public render() {
    const { show } = this.props;
    return (
      <div className={`fade ${show ? 'in' : ''}`}>
        <h2>SKILLS</h2>
        <hr/>
        <ul>
          <li><strong>Code:</strong> JavaScript (es6), TypeScript, CSS3</li>
          <li>
            <strong>Frameworks:</strong> React/React Native, Jest, Mocha, Apollo, Plotly, D3
          </li>
          <li><strong>API:</strong> REST, GraphQL, WebSocket</li>
          <li><strong>Tools:</strong> Git, GitLab CI/CD, npm, webpack, Sketch</li>
          <li><strong>Design:</strong> UX, Responsive/Mobile, Typography, Accessibility</li>
        </ul>
      </div>
    );
  }
}
