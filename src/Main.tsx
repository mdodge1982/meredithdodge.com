import * as React from 'react';
import { Education } from './Education';
import { Experience } from './Experience';
import { Header } from './Header';
import { Skills } from './Skills';
import { Stats } from './Stats';

import './Main.css';

export interface IShowProps {
  show: boolean;
}
export interface IMainState {
  phase: number;
}

export class Main extends React.PureComponent<{}, IMainState> {
  private int: any;
  private maxPhase = 5;
  public constructor(props: {}) {
    super(props);
    this.state = { phase: 0 };
  }

  public componentDidMount() {
    this.startUpdatingPhase();
  }

  public render() {
    const { phase } = this.state;
    return (
      <div className="Main">
        <Header show={phase > 0}/>
        <Stats show={phase > 1}/>
        <Skills show={phase > 2}/>
        <Experience show={phase > 3}/>
        <Education show={phase > 4}/>
      </div>
    );
  }

  private startUpdatingPhase() {
    this.int = window.setInterval(
      () => {
        const phase = this.state.phase + 1;
        if (phase === this.maxPhase) {
          window.clearInterval(this.int);
        }
        this.setState({ phase });
      },
      200,
    );
  }
}
