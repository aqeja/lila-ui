import { Component, h, Host, Prop, Element } from '@stencil/core';

@Component({
  tag: 'ia-modal',
  styleUrl: 'modal.scss',
  shadow: true,
})
export class Modal {
  /** 是否将modal元素移动至body下 */
  @Prop() atRoot = false;
  @Element() host: HTMLElement
  componentDidLoad() {
    if (this.atRoot) {
      document.body.appendChild(this.host)
    }
  }
  render() {
    return <Host>
      <slot></slot>
    </Host>
  }
}