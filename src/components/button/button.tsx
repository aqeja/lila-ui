import { Component, Host, h, Prop, Element } from '@stencil/core';
import { createBem } from '../../utils/utils';

const b = createBem('ia-button');

/**
 * @slot spinner - loading加载指示器
 */

@Component({
  tag: 'ia-button',
  styleUrl: 'button.scss',
  shadow: true,
})
export class Button {
  @Element() host: HTMLIaButtonElement;
  /**
   * 是否正在加载中
   */
  @Prop() loading = false;
  /**
   * 按钮类型
   */
  @Prop() type: 'primary' | 'success' | 'info' | 'warning' | 'error' | 'text' = 'primary';
  /**
   * 是否设置圆角
   */
  @Prop() round = false;
  /**
   * 是否被禁用
   */
  @Prop() disabled = false;
  get _disabled() {
    return this.disabled || this.loading;
  }

  onClick(e: MouseEvent) {
    if (this.disabled || this.loading) {
      e.preventDefault();
      e.stopPropagation();
    }
  }
  render() {
    return (
      <Host class={b.c}>
        <button
          disabled={this._disabled}
          onClick={(e: MouseEvent) => this.onClick(e)}
          class={{
            round: this.round,
            [`${b.m(this.type).c}`]: true,
          }}
        >
          {this.loading && <slot name="spinner">loading...</slot>}
          <slot></slot>
        </button>
      </Host>
    );
  }
}
