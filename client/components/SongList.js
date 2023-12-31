import React, { Component } from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import { Link, hashHistory } from 'react-router';
import query from '../queries/fetchSongs';

class SongList extends Component {
  onSongDelete(id) {
    this.props.mutate({ variables: { id } });
  }
  onSongDetail(id) {
    this.props.mutate({ variables: { id } });

    this.props.mutate({
        variables: { id } 
       
      }).then(() => hashHistory.push(`/songs/${id}`)); //navigatiing back to root
  }

  renderSongs() {
    return this.props.data.songs.map(song => {
      return (
        <li key={song.id} className="collection-item" onClick={()=>this.onSongDetail(song.id)}>
        <Link to={`/songs/${id}`} >
        {song.title}
        </Link> 
          <i
            className="material-icons"
            onClick={() => this.onSongDelete(song.id)}
          >
            delete
          </i>
        </li>
      );
    });
  }

  render() {
    if (this.props.data.loading) { return <div>Loading...</div>; }

    return (
      <div>
        <ul className="collection">
          {this.renderSongs()}
        </ul>
        <Link
          to="/songs/new"
          className="btn-floating btn-large red right"
        >
          <i className="material-icons">add</i>
        </Link>
      </div>
    );
  }
}

const mutation = gql`
  mutation DeleteSong($id: ID) {
    deleteSong(id: $id) {
      id
    }
  }
`;

export default graphql(mutation)(
  graphql(query)(SongList)
);
