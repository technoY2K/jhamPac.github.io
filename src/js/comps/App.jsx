import React from 'react';

export default class App extends React.Component {

  render() {
    return (
      <main id="main">
        <section className="row profile">
          <div className="col s12">
            <p>Hello, my name is...</p>
            <h1>Kevia Cloud</h1>
          </div>
        </section>

        <section className="row other">
          <div className="col s3 hobbies"></div>
          <div className="col s9"></div>
        </section>
      </main>
    );
  }

}
