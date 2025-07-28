import { Component, Host, State, h } from '@stencil/core';
import { MessageType, Rating } from '../../utils/type';

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.css',
  shadow: true,
})
export class MyComponent {
  @State() message: MessageType = {
    id: '1',
    text: 'Hello, World!',
    rating: null,
  };

  @State() mounted: boolean = true;

  render() {
    return (
      <Host>
        <div class="my-component">
          <button
            onClick={() => {
              this.message = {
                ...this.message,
                id: (parseInt(this.message.id, 10) + 1).toString(),
              };
            }}
          >
            Increase ID
          </button>
          <select
            onChange={event => {
              const value = (event.target as HTMLSelectElement).value;
              this.message = {
                ...this.message,
                rating: value as Rating,
              };
            }}
          >
            <option selected={this.message.rating === 'good'} value="good">
              Good
            </option>
            <option selected={this.message.rating === 'bad'} value="bad">
              Bad
            </option>
            <option selected={this.message.rating === 'neutral' || this.message.rating === null} value="neutral">
              Neutral
            </option>
          </select>

          <button
            onClick={() => {
              this.mounted = !this.mounted;
            }}
          >
            Toggle Component 2
          </button>
        </div>
        {this.mounted && <my-component-2 message={this.message}></my-component-2>}
      </Host>
    );
  }
}
