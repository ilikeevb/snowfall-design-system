import { Component, Prop, h, getAssetPath } from '@stencil/core';

@Component({
  tag: 'snowfall-icon',
  styleUrl: 'snowfall-icon.css',
  shadow: true,
})
export class SnowfallIcon {
  /** Название иконки */
  @Prop() name?: string;

  /** Вариант размера элемента */
  @Prop() size: number | 'small' | 'medium' | 'large' = 'medium';

  private get href() {
    const iconName = this.name?.trim();

    if (!iconName) {
      return undefined;
    }

    const iconPath = getAssetPath(`./assets/icons/${iconName}.svg`);

    return `${iconPath}#path`;
  }

  render() {
    const isNumericSize = typeof this.size === 'number';

    return (
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        class={{
          icon: true,
          [`icon--${this.size}`]: !isNumericSize,
        }}
        style={{
          width: isNumericSize ? `${this.size}px` : '',
          height: isNumericSize ? `${this.size}px` : '',
        }}
      >
        {this.href ? <use href={this.href} xlinkHref={this.href}></use> : null}
      </svg>
    );
  }
}
