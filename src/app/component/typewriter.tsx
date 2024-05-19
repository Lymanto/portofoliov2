'use client';
import * as React from 'react';
import Typewriter from 'typewriter-effect';

export default function TypewriterComponent() {
  return (
    <Typewriter
      options={{
        strings: ['Full-stack Developer', 'Mobile Developer', 'UI/UX Designer'],
        autoStart: true,
        loop: true,
        deleteSpeed: 70,
      }}
    />
  );
}
