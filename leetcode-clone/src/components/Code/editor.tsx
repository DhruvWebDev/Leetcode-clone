'use client'
import Editor, { DiffEditor, useMonaco, loader } from '@monaco-editor/react';

export function EditorComponent() {
    return <Editor className="rounded-lg" width="80vw" height=" 70vh" defaultLanguage="javascript" defaultValue="// some comment"  theme='vs-dark'/>;
  }
  