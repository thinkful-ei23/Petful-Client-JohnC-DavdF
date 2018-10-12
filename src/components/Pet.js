import React from 'react'

export default function Pet(props){
    return(
        <section className="toAdopt">
          <header>
            Name: {this.props.name}{' '}
            <img src="{this.props.imageURL}" alt="{this.props.imageDescription}" />
          </header>
          <main>
            <dl>
              <dt>Age: {this.props.age}</dt>
              <dt>Sex: {this.props.sex}</dt>
              <dt>Breed: {this.props.breed}</dt>
              <dt>Story: {this.props.story}</dt>
            </dl>
            <button onClick={()=>console.log('Fire!')}>Adopt</button>
          </main>
        </section>
    )
}