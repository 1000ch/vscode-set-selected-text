import {window, type TextEditor} from 'vscode';

export default function (text: string, editor?: TextEditor): Thenable<void> {
  const textEditor = editor ?? window.activeTextEditor;

  if (!textEditor) {
    return Promise.resolve();
  }

  return new Promise<void>(resolve => {
    textEditor.edit(builder => {
      builder.replace(textEditor.selection, text);
      resolve();
    });
  });
}
