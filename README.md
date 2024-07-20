<div align="center">
    <h1>react-treeview-z</h1>
    <a href="https://codesandbox.io/s/react-treeview-z-rfbrp">LIVE EXAMPLE</a>
</div>

---

#### Description

+ React treeview. (Customize / dynamic)
+ Apply `perfect-scrollbar`

---

#### Preview
![Treeview](https://github.com/delpikye-v/react-treeview/blob/main/demo.png)


<br />

#### Usage
```js
// require
npm install react-perfect-scrollbar-z // // >=version 2
npm install react-treeview-z
```

Import the module in the place you want to use:
```js
// App.js
import 'react-treeview-z/build/styles.css'; // for TreeScrollView
import "react-perfect-scrollbar-z/build/styles.css"; // >=version 2

// import in module
import { TreeScrollView, TreeView, TreeItem } from "react-treeview-z";

```

#### Snippet

###### simple `TreeItem`

```js
    <TreeItem ...props1 nodeContent={<div>level 1</div>}>
        <TreeItem nodeContent={'Content1'} />
        <TreeItem nodeContent={<span>Ab</span>}>
            ... more
        </TreeItem>
        ... more
    </TreeItem>
    ... more
    <TreeItem ...props1 >
        {item somthing} // customize child
    </TreeItem>
```
<br />

###### simple `TreeView`

```js
    // ********************
    // no scrollbar
    <TreeView>
        <TreeItem nodeContent={'Content1'} />
        ...
    </TreeView>

    // { abc.map(() => <TreeItem /> ) }...
```
<br />

###### `TreeScrollView`

```js
<TreeScrollView ...props2 > // apply perfect scrollbar
    <TreeItem nodeContent={<div>level 1</div>}>
        {... more}
    </TreeItem>
    {... more}
</TreeScrollView>
```

---

#### props
###### TreeItem
| **props1**              | **type** | **description**                                                                  |
|-------------------------|----------|------------------------------------------------------------                      |
| nodeContent             | Any      | Content tree item                                                                |
| className               | String   |                                                                                  |
| iconClassName           | String   |                                                                                  |
| checkboxName            | String   |                                                                                  |
| checkboxClassName       | String   |                                                                                  |
| labelCheckboxClassName  | String   |                                                                                  |
| labelCheckboxText       | Any      |                                                                                  |
| isOpen                  | boolean  | expand state (default `false`)                                                   |
| disabled                | boolean  | disabled toggle `expand`/`collapse` (default `false`)                            |
| selected                | boolean  | selected of tree-item (default `false`)                                          |
| fullRowSelection        | boolean  | full row background color when selected (default `false` only label)             |
| selectedWhenToggle      | boolean  | active event `onClick` item when click `expand`/`collapse` (default `false`)     |
| selectedColor           | String   | color when selected (default: `#000`)                                            |
| selectedBgColor         | String   | background color when selected (default: `transparent`)                          |
| lineColor               | String   | lineX - lineY color (parent vs child)                                            |
| showXLine               | boolean  | line path from parent node to child node (default `true`)                        |
| showYLine               | boolean  | line path from parent node to child node (default `true`)                        |
| hideNodeIcon            | boolean  | hidden plus and minus icon                                                       |
| showCheckbox            | boolean  | showCheckbox                                                                     |
| selfData                | any      | tree-item's data [`onClick` = hanleClick(evt, `isSelect`, selfData)]             |
| onClick                 | function | item click event (use update `selected` [your handler])                          |
| onToggle                | function | item onToggle event (`expand`/`collapse`)                                        |

#####

```
```

<br />

**props2**
using props
[
    `className`,
    `effectData`,
    `maxHeight`,
    `maxWidth`,
    `width`,
    `height`,
    `always`, (true)
]

of [react-perfect-scrollbar-z](https://www.npmjs.com/package/react-perfect-scrollbar-z)

<br />

#### Note
This library does not apply some css the cases where you `customize` yourself.

<br />

#### RUN

<a href="https://codesandbox.io/s/react-treeview-z-rfbrp">LIVE EXAMPLE</a>

```js
npm install
```
```js
npm run dev
npm run start
```

### License

MIT
