import React from 'react';
import "./index.less";
import Son from "./Son";


export default class ForLife extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list:['a','b']
    };
  }

  componentDidMount() {

  }
  handleClick(){
    if (JSON.stringify(this.state.list) === JSON.stringify(['a', 'b'])) {
      this.setState({list:['b', 'c']})
    } else {
      this.setState({list:['a', 'b']})
    }
  }
  render() {
    return (
        <div className="forLife">
          ForLife
          <button  onClick={() => this.handleClick()}>切换组件</button>
          {
            this.state.list.map((value,key)=>{
              return(
                  <Son value={value} key={key}/>
                  )

            })
          }

        </div>
    );
  }
}
