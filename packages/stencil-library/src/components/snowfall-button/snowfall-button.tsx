import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'snowfall-button',
  styleUrl: 'snowfall-button.css',
  shadow: true,
})
export class SnowfallButton {
  @Prop() label!: string;

  @Prop() size: 'small' | 'medium' | 'large' = 'medium';

  @Prop() theme: 'primary' | 'secondary' = 'primary';

  render() {
    return (
      <button
        class={{
          button: true,
          [`button--${this.size}`]: true,
          [`button--${this.theme}`]: true,
        }}
      >
        {this.label}
      </button>
    );
  }
}
