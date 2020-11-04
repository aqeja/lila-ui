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
  @Prop() modal = true;
  @Prop() transitionName:'from-bottom' | 'from-top' | 'from-left' | 'from-right'= 'from-top';
  @Prop() justify: 'start' | 'center' | 'end' = 'center';
  @Prop() align: 'top' | 'middle' | 'bottom' = 'middle';
  @State() scopeVisible = false;
  @State() closing = false;
  @State() showing = false;
  mask: HTMLDivElement;
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
  componentWillLoad() {
    this.scopeVisible = this.visible;
    this.showing = this.visible;
  }
  componentDidLoad() {
    this.setModalOpacity();
  }
  setModalOpacity() {
    if (!this.modal) {
      this.mask.style.display = 'none';
    }
  }
  render() {
    return this.scopeVisible && <Host>
      <div class={{wrapper: true, [`justify__${this.justify}`]: true, [`align__${this.align}`]: true}}>
        <div class={{mask: true, closing: this.closing, showing: this.showing}} onAnimationEnd={() => this.onAnimationEnd()} ref={el => this.mask = el}>
        </div>
        <div class={{main: true, closing: this.closing, showing: this.showing, [this.transitionName]: true}}>
          <slot></slot>
        </div>
      </div>
    </Host>
  }
}
