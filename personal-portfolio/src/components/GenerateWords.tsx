"use client";

import { TextGenerateEffect } from "./ui/text-generate-effect";

const words = `HTML is the standard markup language for creating web pages, defining
their structure and content through elements and tags.`;

export function TextGenerateEffectDemo() {
  return <TextGenerateEffect words={words} />;
}
