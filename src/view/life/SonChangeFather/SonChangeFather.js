import React from 'react';
import "./index.less";
import Son from './Son'
export default class SonChangeFather extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {

  }

  render() {
    return (
        <div className="sonChangeFather">
          SonChangeFather
          <Son/>
        </div>
    );
  }
}
