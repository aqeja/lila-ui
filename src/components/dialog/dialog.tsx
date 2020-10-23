import { Component, h, Prop, Element, Event, EventEmitter } from '@stencil/core';

@Component({
  tag: 'ia-dialog',
  styleUrl: 'dialog.scss',
  shadow: true,
})
export class Dialog {
  /** 是否将modal元素移动至body下 */
  @Prop() atRoot = false;
  /** title */
  @Prop() tilte = '';
  @Prop() visible!: boolean;
  @Event() close: EventEmitter;
  @Element() host: HTMLIaDialogElement;
  componentWillLoad() {}
  onCloseDialog() {
    this.close.emit()
  }
  render() {
    return (
      <ia-mask class="root" visible={this.visible}>
        <div class="wrapper">
          <p class="header">
            <span class="title">
              <slot name="title">{this.tilte}</slot>
            </span>
          </p>
          <div class="body">
            <slot></slot>
          </div>
          <div class="footer">
            <slot name="footer"></slot>
          </div>
        </div>
      </ia-mask>
    );
  }
}
