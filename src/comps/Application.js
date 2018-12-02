import React, { Component } from 'react'

export default class Application extends Component {
  render() {
    return(
      <main id="UI">
        <div className="row">
          <div className="col s12">
            <p className="left-align huge-font">hello, my name is kevia. I am a web application developer based out of <span className="grey-it-up">SCOTTSDALE ARIZONA</span></p>
          </div>
        </div>
        <div className="row container bio-container">
          <div className="col s12">
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
          </div>
        </div>
      </main>
    )
  }
}
