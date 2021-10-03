import React, { Component } from 'react';
import { Box, Button } from '@mui/material';

class Counter extends Component {
  constructor(){
    super();
    this.state = { count: 5 };
  }

  increment() {
    this.setState({ count: this.state.count + 1})
  }

  decrement() {
    this.setState({ count: this.state.count - 1})
  }

  render() {
    return (
      <div>
        <Button varient='contained' color='primary' size='large' onClick={this.increment.bind(this)}> + </Button>
        <Box component='span' m={5}> {this.state.count} </Box>
        <Button varient='contained' color='secondary' size='large' onClick={this.decrement.bind(this)}> - </Button>
      </div>
    )
  }
}

export default Counter;