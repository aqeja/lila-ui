# ia-modal



<!-- Auto Generated Below -->


## Properties

| Property               | Attribute         | Description | Type                                                         | Default      |
| ---------------------- | ----------------- | ----------- | ------------------------------------------------------------ | ------------ |
| `align`                | `align`           |             | `"bottom" \| "middle" \| "top"`                              | `'middle'`   |
| `justify`              | `justify`         |             | `"center" \| "end" \| "start"`                               | `'center'`   |
| `modal`                | `modal`           |             | `boolean`                                                    | `true`       |
| `transitionName`       | `transition-name` |             | `"from-bottom" \| "from-left" \| "from-right" \| "from-top"` | `'from-top'` |
| `visible` _(required)_ | `visible`         |             | `boolean`                                                    | `undefined`  |


## Events

| Event   | Description | Type                |
| ------- | ----------- | ------------------- |
| `close` |             | `CustomEvent<void>` |


## Dependencies

### Used by

 - [ia-dialog](../dialog)
 - [ia-playground](../playground)

### Graph
```mermaid
graph TD;
  ia-dialog --> ia-mask
  ia-playground --> ia-mask
  style ia-mask fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with love❤️!*
