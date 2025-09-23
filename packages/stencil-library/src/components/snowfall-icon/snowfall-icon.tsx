import { Component, Prop, getAssetPath, h } from '@stencil/core';

type IconSize = number | 'xsmall' | 'small' | 'medium' | 'large';

@Component({
  tag: 'snowfall-icon',
  styleUrl: 'snowfall-icon.css',
  shadow: true,
  assetsDirs: ['icons'],
})
export class SnowfallIcon {
  /** Название иконки */
  @Prop() name!: string;

  /** Вариант размера элемента */
  @Prop() size: IconSize = 'medium';

  private get href() {
    return getAssetPath(`./icons/${this.name}.svg#path`);
  }

  render() {
    const isNumericSize = typeof this.size === 'number';

    return (
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        class={{
          "icon": true,
          [`icon--${this.size}`]: !isNumericSize,
        }}
        style={{
          width: isNumericSize ? `${this.size}px` : '',
          height: isNumericSize ? `${this.size}px` : '',
        }}
      >
        <use href={this.href} xlinkHref={this.href}></use>
      </svg>
    );
  }
}
