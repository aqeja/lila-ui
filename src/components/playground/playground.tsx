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
  @State() dialogVisible = false;
  changeState(e: MouseEvent) {
    console.log(e);
    this.loading = !this.loading;
  }
  onSwitch(e: CustomEvent<{ value: boolean }>) {
    console.log(e.detail.value);
  }
  sss() {
    this.dialogVisible = true
  }
  onClose() {
    this.dialogVisible = false
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
        <ia-button color="red" size="mini">
          普通putton mini
        </ia-button>
        <ia-button color="red" size="small" loading={true}>
          普通putton small
        </ia-button>
        <ia-button color="blue">
          普通putton
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
        <ia-button type="warning" disabled loading={true}>
          warning按钮
        </ia-button>
        <ia-button type="text" disabled>
          text按钮
        </ia-button>
        <ia-button type="text" onClick={() => this.sss()}>text按钮</ia-button>
        <br />
        <ia-button type="success">success按钮</ia-button>
        {/* <ia-dialog>
          <p slot="title">
            今天天气怎样？
          </p>
        </ia-dialog> */}
          <ia-mask visible={true} onClose={() => this.dialogVisible = false} modal={false}>
            <h1>
              ddddd
            </h1>
          </ia-mask>
      </Host>
    );
  }
}
