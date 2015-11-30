# sass-json-export [![npm version](https://badge.fury.io/js/sass-json-export.svg)](https://badge.fury.io/js/sass-json-export) [![Circle CI](https://circleci.com/gh/oddbird/sass-json-export.svg?style=svg)](https://circleci.com/gh/oddbird/sass-json-export)

`sass-json-export` allows you to export your Sass data structures as JSON.

It is based on Hugo Giraudel's
[SassyJSON](https://github.com/HugoGiraudel/SassyJSON), which is
[no longer maintained](https://github.com/HugoGiraudel/SassyJSON/issues/91). It
is simplified to include only the JSON exporter from SassyJSON, and not the
(much more complex) JSON parser.

## Install

sass-json-export is available on [npm](https://npmjs.org/).

### Git

``` git
git clone https://github.com/oddbird/sass-json-export.git && cd sass-json-export
```

### npm

``` bash
npm install sass-json-export --save-dev
```

## Example

### Encoding Sass to JSON

#### Sass

``` scss
$map: ((a: (1 2 ( b : 1 )), b: ( #444444, false, ( a: 1, b: test ) ), c: (2 3 4 string)));

@include json-encode($map);
```

#### CSS

``` css
/*! json-encode: '{"a": [1, 2, {"b": 1}], "b": ["#444444", false, {"a": 1, "b": "test"}], "c": [2, 3, 4, "string"]}' */

body::before {
  display:block;
  width:0;height:0;
  overflow:hidden;
  content: '{"a": [1, 2, {"b": 1}], "b": ["#444444", false, {"a": 1, "b": "test"}], "c": [2, 3, 4, "string"]}';
}

head {
  font-family: '{"a": [1, 2, {"b": 1}], "b": ["#444444", false, {"a": 1, "b": "test"}], "c": [2, 3, 4, "string"]}';
}

@media -json-encode {
  json {
    json: '{"a": [1, 2, {"b": 1}], "b": ["#444444", false, {"a": 1, "b": "test"}], "c": [2, 3, 4, "string"]}';
  }
}
```

If you want to restrict the output to only one of the three drivers (comment,
media query or regular output) you can pass a flag as the second parameter with
one of the four following keywords: `all`, `comment`, `media` or
`regular`. Default is `all`.

## Requirements

All you need is Sass 3.3+. Otherwise it's just pure Sass madness.

## Development

### You need

  * [NodeJS](http://nodejs.org)
  * Sass 3.3
  * `grunt-cli` via `npm install -g grunt-cli`

### How to

  1. Fork this repository
  2. Run `npm install`
  3. `grunt dev`
  4. Make your changes + write tests
  5. Commit + Pull request

## Credits

* [Fabrice Weinberg](http://twitter.com/fweinb)
* [Hugo Giraudel](http://twitter.com/hugogiraudel)
