import * as React from 'react';
import { IShowProps } from './Main';

export class Education extends React.PureComponent<IShowProps> {
  public render() {
    const { show } = this.props;
    return (
      <div className={`fade ${show ? 'in' : ''}`}>
        <h2>EDUCATION</h2>
        <hr/>
        <p>
          <strong>
            2000-04: Pomona College, Claremont, CA<br/>
          </strong>
          BA in Chinese Language and Literature; minor in Philosophy; graduated <em>cum laude</em>.
        </p>
        <p>
          <strong>
            2002-03: National Chengchi University, Taipei, TAIWAN<br/>
          </strong>
          Mandarin Chinese, 3 quarters.
        </p>
      </div>
    );
  }
}
