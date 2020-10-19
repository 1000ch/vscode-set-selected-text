# vscode-set-selected-text [![Dependency Status](https://david-dm.org/1000ch/vscode-set-selected-text.svg)](https://david-dm.org/1000ch/vscode-set-selected-text)
[![devDependency Status](https://david-dm.org/1000ch/vscode-set-selected-text/dev-status.svg)](https://david-dm.org/1000ch/vscode-set-selected-text?type=dev)

> An easy-to-use VS Code `#setSelectedText()` method

## Install

```bash
$ npm install --save vscode-set-selected-text
```

## Usage

```js
import setSelectedText from 'vscode-set-selected-text';

setSelectedText('new text');
```

## API

### setSelectedText(text, [editor])

Returns a promise.

#### text: `string`

Type: `string`

Text you want to set in the editor

#### editor: [`vscode.TextEditor`](https://code.visualstudio.com/api/references/vscode-api#TextEditor)

Editor to set the text in. This will be [`window.activeTextEditor`](https://code.visualstudio.com/api/references/vscode-api#window) if you omit.

## License

[MIT](https://1000ch.mit-license.org) © [Shogo Sensui](https://github.com/1000ch)
