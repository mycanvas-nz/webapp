import React, { Component } from 'react'

import ReactPlayer from 'react-player'

import { connect } from 'react-redux';


export class MusicPlayer extends Component {

  onProgress = state => {
    this.props.onProgress(state.played);
  }

  onEnded = () => {
    this.props.nextSong();
  }



  ref = player => {
    this.player = player
  }

  render() {
    return (
        <div className="display-music">
          <ReactPlayer          
            ref={this.ref}
            controls ={true}
            url={this.props.musicPlayer.url}
            playing={this.props.musicPlayer.playing}
            muted={this.props.musicPlayer.muted}
            onProgress={this.onProgress}
            onEnded={this.onEnded}
          />
        </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
      musicPlayer: state.Music,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
      loadSong: (value) => { dispatch({type: 'MUSIC_LOAD_SONG', value: value })},
      playPause: () => { dispatch({type: 'MUSIC_PLAY_PAUSE'})},
      mute: () => { dispatch({type: 'MUSIC_MUTE'})},
      nextSong: () => { dispatch({type: 'MUSIC_NEXT_SONG'})},
      backSong: () => { dispatch({type: 'MUSIC_BACK_SONG'})},
      seeking: (value) => { dispatch({type: 'MUSIC_SEEKING', value: value })},
      seek: (value) => { dispatch({type: 'MUSIC_SEEK_CHANGE', value: value })},
      onProgress: (value) => { dispatch({type: 'MUSIC_onProgress', value: value })},
  }
}


export default connect(mapStateToProps,mapDispatchToProps)(MusicPlayer);
