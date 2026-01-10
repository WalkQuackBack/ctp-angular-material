import * as sass from "sass";

const compileOptions: sass.Options<'sync'> = {
  loadPaths: ['node_modules'],
  quietDeps: true
}

function build() {
  const compiled = sass.compile('./template/main.scss', compileOptions)
  Deno.writeTextFile('./main.css', compiled.css)
}

build()
