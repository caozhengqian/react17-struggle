import React from 'react';

export default class GrandSon extends React.Component {
  constructor(props) {
    console.log(`%c            GrandSon-->1、constructor`, "color:#600000");
    super(props);
    this.state = {};
  }

  static getDerivedStateFromProps(props, state){
    console.log(`%c            GrandSon-->2、getDerivedStateFromProps`, "color:#600000");
    return null;
  }
  componentDidMount() {
    console.log(`%c            GrandSon-->3、componentDidMount`, "color:#600000");
  }
  shouldComponentUpdate(){
    console.log(`%c            GrandSon-->4、shouldComponentUpdate`, "color:#600000");
  }
  getSnapshotBeforeUpdate(){
    console.log(`%c            GrandSon-->5、getSnapshotBeforeUpdate`, "color:#600000");
  }
  componentDidUpdate(){
    console.log(`%c            GrandSon-->6、componentDidUpdate`, "color:#600000");
  }
  componentWillUnmount(){
    console.log(`%c            GrandSon-->7、componentWillUnmount`, "color:#600000");
  }
  render() {
    return (
        <div className="GrandSon" style={{marginLeft:'40px',border:'1px solid #ce0000'}}>
          GrandSon
        </div>
    );
  }
}
