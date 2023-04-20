'use client'

import { Editor } from '@tiptap/react';

import ListItem from '@tiptap/extension-list-item'

import { EditorContent, useEditor } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import React from 'react' 

interface EditorMenuBarProps {
    editor: Editor | null
}

const EditorMenuBar: React.FC<EditorMenuBarProps> = ({ editor }) => {
    if (!editor) {
      return null
    }
  
    return (
      <div className="flex gap-8">
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleBold().run()}
          disabled={
            !editor.can()
              .chain()
              .focus()
              .toggleBold()
              .run()
          }
          className={editor.isActive('bold') ? 'is-active' : ''}
        >
          bold
        </button>
        <button type="button" 
          onClick={() => editor.chain().focus().toggleItalic().run()}
          disabled={
            !editor.can()
              .chain()
              .focus()
              .toggleItalic()
              .run()
          }
          className={editor.isActive('italic') ? 'is-active' : ''}
        >
          italic
        </button>
        <button type="button" 
          onClick={() => editor.chain().focus().toggleStrike().run()}
          disabled={
            !editor.can()
              .chain()
              .focus()
              .toggleStrike()
              .run()
          }
          className={editor.isActive('strike') ? 'is-active' : ''}
        >
          strike
        </button>
        <button type="button" 
          onClick={() => editor.chain().focus().toggleCode().run()}
          disabled={
            !editor.can()
              .chain()
              .focus()
              .toggleCode()
              .run()
          }
          className={editor.isActive('code') ? 'is-active' : ''}
        >
          code
        </button>
        <button type="button"  onClick={() => editor.chain().focus().unsetAllMarks().run()}>
          clear marks
        </button>
        <button type="button"  onClick={() => editor.chain().focus().clearNodes().run()}>
          clear nodes
        </button>
        <button type="button" 
          onClick={() => editor.chain().focus().setParagraph().run()}
          className={editor.isActive('paragraph') ? 'is-active' : ''}
        >
          paragraph
        </button>
        <button type="button" 
          onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
          className={editor.isActive('heading', { level: 1 }) ? 'is-active' : ''}
        >
          h1
        </button>
        <button type="button" 
          onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
          className={editor.isActive('heading', { level: 2 }) ? 'is-active' : ''}
        >
          h2
        </button>
        <button type="button" 
          onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
          className={editor.isActive('heading', { level: 3 }) ? 'is-active' : ''}
        >
          h3
        </button>
       
      </div>
    )
  }
  

export default EditorMenuBar; 