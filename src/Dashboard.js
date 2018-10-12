import React from 'react';

export default class Dashboard extends React.Component {
  render() {
    return (
      <div>
        <section className="catToAdopt">
          <header>
            Name: {this.props.cat.name}{' '}
            <img src="{this.props.cat.imageURL}" alt="it's a cat" />
          </header>
          <main>
            <dl>
              <dt>Age: {this.props.cat.age}</dt>
              <dt>Sex: {this.props.cat.sex}</dt>
              <dt>Breed: {this.props.cat.breed}</dt>
              <dt>Story: {this.props.cat.story}</dt>
            </dl>
            <button>Adopt</button>
          </main>
        </section>
        <section className="dogToAdopt">
          <header>
            Name: {this.props.dog.name}{' '}
            <img src="{this.props.dog.imageURL}" alt="it's a dog" />
          </header>
          <main>
            <dl>
              <dt>Age: {this.props.dog.age}</dt>
              <dt>Sex: {this.props.dog.sex}</dt>
              <dt>Breed: {this.props.dog.breed}</dt>
              <dt>Story: {this.props.dog.story}</dt>
            </dl>
            <button>Adopt</button>
          </main>
        </section>
      </div>
    );
  }
}
