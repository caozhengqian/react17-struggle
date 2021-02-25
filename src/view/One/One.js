import React from 'react';
import "./index.less";

export default class One extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {

    }
    _one(){
        // this.props.history.replace('/two');//不可以退回上一级
      this.props.history.push({pathname: '/two'})
    }
    render() {
        return (
            <div className="One">
                One
                <button onClick={()=>this._one()}>点击跳转到Two</button>
            </div>
        );
    }
}
