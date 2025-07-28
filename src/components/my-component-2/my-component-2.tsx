import { Component, Prop, State, Watch, h } from '@stencil/core';
import { MessageType, Rating } from '../../utils/type';

@Component({
  tag: 'my-component-2',
  styleUrl: 'my-component-2.css',
  shadow: true,
})
export class MyComponent2 {
  @Prop() message: MessageType;
  @State() rating: Rating = null;

  componentWillLoad() {
    console.log('componentWillLoad called');
    this.syncRating();
  }

  @Watch('message')
  watchMessage(newValue: MessageType) {
    console.log('watchMessage called with newValue:', newValue);
    this.syncRating(newValue);
  }

  syncRating(message: MessageType = this.message) {
    console.log('syncRating called with message:', message);
    this.rating = message.rating || null;
  }

  render() {
    return (
      <div class="my-component-2">
        <h1>My Component 2</h1>
        <p>ID: {this.message.id}</p>
        <p>Message: {this.message.text}</p>
        <p>Rating: {this.rating ? this.rating : 'No rating'}</p>
      </div>
    );
  }
}
