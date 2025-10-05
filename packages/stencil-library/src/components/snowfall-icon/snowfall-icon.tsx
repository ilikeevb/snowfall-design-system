import { Component, Prop, State, Watch, getAssetPath, h } from '@stencil/core';

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
  @Prop() size: number | 'xsmall' | 'small' | 'medium' | 'large' = 'medium';

  @State() private href?: string;

  private setIconHref = () => {
    try {
      this.href = getAssetPath(`./icons/${this.name}.svg#path`);
    } catch {
      console.error(`Иконка ${this.name} не найдена!`);
      this.href = undefined;
    }
  };

  componentWillLoad() {
    return this.setIconHref();
  }

  @Watch('name')
  protected handleNameChange() {
    return this.setIconHref();
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
        <use href={this.href} xlinkHref={this.href}></use>
      </svg>
    );
  }
}
