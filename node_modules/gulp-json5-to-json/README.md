# gulp-json5-to-json

[![NPM Version][npm-image]][npm-url]
[![Minimum Node.js Version][nodejs-image]][nodejs-url]
[![License][license-image]][license-url]

## Installation

```
$ npm install --save-dev gulp-json5-to-json
```

## Usage

```js
const gulp = require('gulp');
const json5 = require('gulp-json5-to-json');

gulp.task('default', () => {
  return gulp.src('src/**/*.json5')
    .pipe(json5({ beautify: true }))
    .pipe(gulp.dest('./build'));
});
```

### Options

- `beautify` - Causes the resulting file to be pretty-printed.

## License

[MIT](LICENSE)

[npm-image]: https://img.shields.io/npm/v/gulp-json5-to-json.svg?style=flat-square
[npm-url]: https://npmjs.org/package/gulp-json5-to-json
[nodejs-image]: https://img.shields.io/badge/Node.js-%3E%3D%206.0-669B64.svg?style=flat-square
[nodejs-url]: https://nodejs.org/
[license-image]: https://img.shields.io/github/license/miusuncle/gulp-json5-to-json.svg?style=flat-square
[license-url]: LICENSE
