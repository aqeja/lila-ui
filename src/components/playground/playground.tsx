import { Component, Host, h, State } from '@stencil/core';
import { createBem } from '../../utils/utils';

const b = createBem('ia-playground');

@Component({
  tag: 'ia-playground',
  styleUrl: 'playground.scss',
  shadow: true,
})
export class Playground {
  @State() loading = false;
  changeState(e: MouseEvent) {
    console.log(e);
    this.loading = !this.loading;
  }
  onSwitch(e: CustomEvent<{ value: boolean }>) {
    console.log(e.detail.value);
  }
  render() {
    return (
      <Host class={b.c}>
        <ia-switch onIaChange={(e: CustomEvent) => this.onSwitch(e)}></ia-switch>
        <br />
        <ia-switch disabled checked></ia-switch>
        <br />
        <ia-switch disabled checked={false}></ia-switch>
        <br />
        <ia-button loading={this.loading} round={true}>
          按钮测试
        </ia-button>
        <br />
        <button onClick={(e: MouseEvent) => this.changeState(e)}>设置为loading</button>
        <br />
        <ia-button disabled>被禁用</ia-button>
        <br />
        <ia-button type="info">info按钮</ia-button>
        <br />
        <ia-button type="primary">primary按钮</ia-button>
        <br />
        <ia-button type="error">error按钮</ia-button>
        <br />
        <ia-button type="warning">warning按钮</ia-button>
        <br />
        <ia-button type="warning" disabled>
          warning按钮
        </ia-button>
        <ia-button type="text" disabled>
          text按钮
        </ia-button>
        <ia-button type="text">text按钮</ia-button>
        <br />
        <ia-button type="success">success按钮</ia-button>
        {/* <ia-dialog>
          <p slot="title">
            今天天气怎样？
          </p>
        </ia-dialog> */}
      </Host>
    );
  }
}
