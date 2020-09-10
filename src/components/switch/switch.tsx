import { Component, h, Host, Prop, Event, EventEmitter } from '@stencil/core';
import { createBem } from '../../utils/utils';

const b = createBem('ia-switch');
export interface IaCheckbox {
  value: boolean;
}
@Component({
  tag: 'ia-switch',
  styleUrl: 'switch.scss',
  shadow: true,
})
export class Switch {
  id = 'switch-node';
  inputElement: HTMLInputElement;
  /**
   * 是否被禁用
   */
  @Prop() disabled = false;
  /**
   * 是否开启
   */
  @Prop({ mutable: true }) checked = false;
  /**
   * 改变事件
   */
  @Event() iaChange: EventEmitter<IaCheckbox>;
  onChange() {
    this.checked = this.inputElement.checked;
    this.emitEvent();
  }
  emitEvent() {
    this.iaChange.emit({
      value: this.checked,
    });
  }
  render() {
    return (
      <Host>
        <label
          htmlFor={this.id}
          class={{
            [b.c]: true,
            [b.m('disabled').c]: this.disabled,
            [b.m('on').c]: this.checked,
            [b.m('off').c]: !this.checked,
          }}
        >
          <input
            type="checkbox"
            hidden
            class={b.e('input').c}
            id={this.id}
            checked={this.checked}
            disabled={this.disabled}
            ref={el => (this.inputElement = el)}
            onChange={() => this.onChange()}
          />
          <span class={b.e('track').c}>
            <span class={b.e('block').c}></span>
          </span>
        </label>
      </Host>
    );
  }
}
