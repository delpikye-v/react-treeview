# react-treeview-z

[![NPM](https://img.shields.io/npm/v/react-treeview-z.svg)](https://www.npmjs.com/package/react-treeview-z)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)
![Downloads](https://img.shields.io/npm/dt/react-treeview-z.svg)

A lightweight **React TreeView** component built with Hooks — supports nested nodes, checkboxes, and `perfect-scrollbar`.

🔹 Fully customizable
🔹 Supports nested nodes
🔹 Optional checkboxes
🔹 Expand/collapse nodes
🔹 Integrates with `perfect-scrollbar`

---

## 🚀 Live Demo

👉 [Codesandbox Example](https://codesandbox.io/s/react-treeview-z-rfbrp)

---

## 📦 Installation

```bash
npm install react-treeview-z
# or
yarn add react-treeview-z
```

Import in your project:

```js
import "react-treeview-z/build/styles.css";
import { TreeScrollView, TreeView, TreeItem } from "react-treeview-z";
```

---

## 🛠 Usage

```js
<TreeView>
  <TreeItem nodeContent={"Root Node"} isOpen>
    <TreeItem nodeContent={"Child 1"} />
    <TreeItem nodeContent={"Child 2"}>
      <TreeItem nodeContent={"Grandchild A"} />
      <TreeItem nodeContent={"Grandchild B"} />
    </TreeItem>
  </TreeItem>
</TreeView>

<TreeScrollView maxHeight={300}>
  <TreeItem nodeContent={"Scrollable Root"}>
    <TreeItem nodeContent={"Child 1"} />
    <TreeItem nodeContent={"Child 2"} />
  </TreeItem>
</TreeScrollView>
```

---

## ⚙️ `<TreeItem>` Props

| Prop                     | Type       | Default       | Description                         |
| ------------------------ | ---------- | ------------- | ----------------------------------- |
| `nodeContent`            | `any`      | —             | Content of the tree node            |
| `className`              | `string`   | —             | Custom class                        |
| `iconClassName`          | `string`   | —             | Custom icon class                   |
| `checkboxName`           | `string`   | —             | Checkbox `name` attribute           |
| `checkboxClassName`      | `string`   | —             | Checkbox class                      |
| `labelCheckboxText`      | `any`      | —             | Checkbox label                      |
| `labelCheckboxClassName` | `string`   | —             | Checkbox label class                |
| `isOpen`                 | `boolean`  | `false`       | Default open state                  |
| `disabled`               | `boolean`  | `false`       | Disable expand/collapse             |
| `selected`               | `boolean`  | `false`       | Node selected                       |
| `fullRowSelection`       | `boolean`  | `false`       | Highlight entire row when selected  |
| `selectedWhenToggle`     | `boolean`  | `false`       | Toggle selection on expand/collapse |
| `selectedColor`          | `string`   | `#000`        | Text color when selected            |
| `selectedBgColor`        | `string`   | `transparent` | Background color when selected      |
| `lineColor`              | `string`   | `#92adc0`     | Connector line color                |
| `showXLine`              | `boolean`  | `true`        | Show horizontal line                |
| `showYLine`              | `boolean`  | `true`        | Show vertical line                  |
| `hideNodeIcon`           | `boolean`  | `false`       | Hide plus/minus icon                |
| `showCheckbox`           | `boolean`  | `false`       | Show checkbox                       |
| `selfData`               | `any`      | —             | Custom node data                    |
| `onClick`                | `function` | —             | `(evt, isActive, selfData) => void` |
| `onToggle`               | `function` | —             | `(isActive, selfData) => void`      |

---

## ⚙️ `<TreeView>` & `<TreeScrollView>` Props

| Prop         | Type      | Description                          |
| ------------ | --------- | ------------------------------------ |
| `className`  | `string`  | Custom class for container           |
| `effectData` | `any`     | Optional data used for effects       |
| `maxHeight`  | `number`  | Max height (only TreeScrollView)     |
| `maxWidth`   | `number`  | Max width                            |
| `width`      | `number`  | Width                                |
| `height`     | `number`  | Height                               |
| `always`     | `boolean` | Keep scroll visible (TreeScrollView) |

---

## ✨ Features

- React **Hooks** based
- Nested tree nodes
- Optional **checkboxes**
- **Expandable/collapsible** nodes
- Integrates **perfect-scrollbar**
- Fully customizable styling

---

## RUN

[Live Example on Codesandbox](https://codesandbox.io/s/react-treeview-z-rfbrp)

---

## 📋 License

MIT / Delpi
