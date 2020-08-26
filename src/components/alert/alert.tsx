import { Component, Prop, h, Host, State, Listen, Element } from '@stencil/core';
import { createBem } from '../../utils/utils';
const b = createBem('lila-alert');

@Component({
  tag: 'ia-alert',
  styleUrl: 'alert.scss',
  shadow: true,
})
export class Alert {
  /**
   * 提示类型
   */
  @Prop() type: 'success' | 'error' | 'warning' | 'info' = 'success';
  /**
   * 提示文字内容
   */
  @Prop() content = '';
  /**
   * 当前提示的描述
   */
  @Prop() description = '';
  /**
   * 是否显示关闭按钮
   */
  @Prop() closeable = false;
  @Element() host: HTMLIaAlertElement;
  @State() open = false;
  @Listen('click', { capture: true })
  handleClick(): void {
    this.open = !this.open;
    console.log(this.open);
  }
  connectedCallback(): void {}
  componentDidLoad() {}
  render() {
    return (
      <Host
        class={{
          [b.m(this.type).c]: true,
        }}
      >
        <p>
          <ia-button>这是一个测试。</ia-button>
          <span class={b.e('icon').c}>xxssss</span>
          <slot name="icon" />
          <span class={b.e('content').c}>这是内容。。。。。</span>
          {this.closeable && 'x'}
        </p>
      </Host>
    );
  }
}
