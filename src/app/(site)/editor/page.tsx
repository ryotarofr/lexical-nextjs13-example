"use client"

import React from 'react';
import "@/app/(site)/editor/styles.css"
import { Editor } from '@/app/(site)/editor/text-editor'
import { TypingAnimation } from '@/app/components/typing-animation';
import NavBar from '@/app/components/Navbar';

export default function Home() {

  return (
    <div className="App">
      {/* <Header /> */}
      <NavBar />
      {/* <TypingAnimation /> */}
      <Editor />
    </div>
  )
}
