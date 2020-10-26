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
  host: HTMLButtonElement;
  /**
   * 是否正在加载中
   */
  @Prop() loading = false;
  /**
   * 按钮类型
   */
  @Prop() type: 'primary' | 'success' | 'info' | 'warning' | 'error' | 'text' | 'plain' = 'plain';
  @Prop() color: string;
  @Prop() size: 'mini' | 'small' | 'medium' = 'medium'
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
  componentDidLoad() {
    if (this.color) {
      this.host.style.color = this.color
      this.host.style.borderColor = this.color
    }
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
          ref={el => this.host= el}
          disabled={this._disabled}
          onClick={(e: MouseEvent) => this.onClick(e)}
          class={{
            round: this.round,
            [this.size]: true,
            [`${b.m(this.type).c}`]: true,
          }}
        >
          {this.loading && <img src="http://ttt.iulab.xyz/g3zux.svg" class="loading-spinner" alt=""/>}
          <slot></slot>
        </button>
      </Host>
    );
  }
}
