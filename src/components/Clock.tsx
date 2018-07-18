import * as React from 'react';

export interface IState {
  date: Date;
}

class Clock extends React.Component<any, IState> {
  private timerID: NodeJS.Timer;
  constructor(props: any) {
    super(props);
    this.state = { date: new Date() } as any;
  }

  public componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  public componentWillUnmount() {
    clearInterval(this.timerID);
  }

  public render() {
    return (
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
    );
  }

  private tick() {
    this.setState({
      date: new Date()
    });
  }
}

export default Clock;
