import React, { Component } from "react";
import PropTypes from 'prop-types';
class Test extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this)
  }
  shouldComponentUpdate(nextProps,nextState){
    if(nextProps.content !== this.props.content){
      return true
    }else{
       return false
    }
  }
  render() {
    console.log('child - render')
    return <li onClick={this.handleClick}>{this.props.avname} - {this.props.content}</li>;
  }
  handleClick() {
    this.props.deleteItem(this.props.index)
  }
}

Test.propTypes = {
  avname: PropTypes.number.isRequired,
  content: PropTypes.number,
  index: PropTypes.number,
  deleteItem: PropTypes.func
}

Test.defaultProps = {
  avname: 1
}

export default Test; 
