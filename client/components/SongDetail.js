import React, { Component } from 'react';

class SongDetail extends Component {

    

  render() {
   const { song} = this.props.data;
   if(!song) return (<><h2> Loading</h2></>)

    return (
      <div>
        <Link to="/">Back</Link>
        <h3>Song Detail</h3>
        <LyricCreate />
      </div>
    );
  }
}

export default SongDetail;
