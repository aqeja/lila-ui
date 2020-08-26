import { Component, h } from '@stencil/core';

@Component({
  tag: 'app-root',
  styleUrl: 'app.scss',
  shadow: true,
})
export class Root {
  render() {
    return <ia-playground></ia-playground>;
  }
}
