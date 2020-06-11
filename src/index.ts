'use strict';
import { window, TextEditor } from 'vscode';

export default function(text: string, editor?: TextEditor): Thenable<void> {
  editor = editor || window.activeTextEditor;

  if (!editor) {
    return Promise.resolve();
  }

  return new Promise<void>(resolve => {
    editor.edit(builder => {
      builder.replace(editor.selection, text);
      resolve();
    });
  });
}
