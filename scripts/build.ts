// Modified off of https://github.com/catppuccin/discord/blob/0fcfe2e15ed91f8c5f1f3c6855f3b2024f78d86c/build.js

import * as sass from "sass";

import type { CatppuccinFlavor, ColorFormat } from "@catppuccin/palette";

const compileOptions: sass.Options<'sync'> = {
  loadPaths: ['node_modules'],
  quietDeps: true
}

const baseTemplateString = Deno.readTextFileSync('./template/main.scss')

function buildVariant(flavor: CatppuccinFlavor, accent: ColorFormat) {
  const templateString = baseTemplateString
  templateString.replace('');
  const compiled = sass.compileString(baseTemplateString, compileOptions)
  Deno.writeTextFile('./scss/', compiled.css)
  Deno.writeTextFile('./themes/', compiled.css)
}

// build()
