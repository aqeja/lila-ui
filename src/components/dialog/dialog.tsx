import { Component, h, Prop } from '@stencil/core';
import { createBem } from '../../utils/utils';

const b = createBem('ia-dialog');

@Component({
  tag: 'ia-dialog',
  styleUrl: 'dialog.scss',
  shadow: true,
})
export class Dialog {
  /** 是否将modal元素移动至body下 */
  @Prop() atRoot = false;
  @Prop() tilte = '';
  render() {
    return <ia-modal atRoot={this.atRoot} class="h">
      <div class={b.e('wrapper').c}>
        <p class={b.e('header').c}>
          <span class="title">
            <slot name="title">
              { this.tilte }
            </slot>
          </span>
          <span>
            x
          </span>
        </p>
        <div class={b.e('body').c}>

        </div>
      </div>
    </ia-modal>
  }
}