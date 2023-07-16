'use client';
import * as React from 'react';
import Typewriter from 'typewriter-effect';

export default function TypewriterComponent() {
  return (
    <Typewriter
      options={{
        strings: ['Front-End Developer', 'Mobile Developer', 'UI/UX Designer'],
        autoStart: true,
        loop: true,
        deleteSpeed: 70,
      }}
    />
  );
}
