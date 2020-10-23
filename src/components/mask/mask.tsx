import { Component, h, Host, Element, Prop, EventEmitter, Event, State, Watch } from '@stencil/core';
@Component({
  tag: 'ia-mask',
  styleUrl: 'mask.scss',
  shadow: true,
})
export class SetParams {
  @Element() host: HTMLIaMaskElement;
  @Event() close: EventEmitter<void>;
  @Prop() visible!: boolean;
  @State() scopeVisible = false;
  @State() closing = false;
  @State() showing = false;
  frozing = false
  onAnimationEnd() {
    if (this.closing) {
      this.scopeVisible = false;
      this.closing = false;
      this.froze()
      this.close.emit();
    }
    if (this.showing) {
      this.showing = false;
    }
  }
  closeSelf() {
    this.closing = true
  }
  froze() {
    this.frozing = true
    setTimeout(() => {
      this.frozing = false;
    })
  }
  @Watch('visible')
  onVisibleChange(visible: boolean) {
    if (visible) {
      this.showing = true
      this.scopeVisible = visible
    } else {
      if (!this.frozing) {
        this.closing = true
      }
    }
  }
  componentDidLoad() {
    this.scopeVisible = this.visible;
    this.showing = this.visible;
  }
  render() {
    return this.scopeVisible && <Host>
      <div class="wrapper">
        <div class={{mask: true, closing: this.closing, showing: this.showing}} onAnimationEnd={() => this.onAnimationEnd()}>
        </div>
        <div class={{main: true, closing: this.closing, showing: this.showing}}>
          <slot></slot>
        </div>
      </div>
    </Host>
  }
}
