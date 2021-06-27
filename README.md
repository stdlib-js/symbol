<!--

@license Apache-2.0

Copyright (c) 2021 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

# Symbol

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] [![dependencies][dependencies-image]][dependencies-url]

> Symbol namespace.

<section class="installation">

## Installation

```bash
npm install @stdlib/symbol
```

</section>

<section class="usage">

## Usage

```javascript
var ns = require( '@stdlib/symbol' );
```

#### ns

Symbol namespace.

```javascript
var o = ns;
// returns {...}
```

The namespace contains the following:

<!-- <toc pattern="*"> -->

<div class="namespace-toc">

-   <span class="signature">[`AsyncIteratorSymbol`][@stdlib/symbol/async-iterator]</span><span class="delimiter">: </span><span class="description">async iterator symbol which specifies the default async iterator for an object.</span>
-   <span class="signature">[`Symbol( [description] )`][@stdlib/symbol/ctor]</span><span class="delimiter">: </span><span class="description">symbol factory.</span>
-   <span class="signature">[`IteratorSymbol`][@stdlib/symbol/iterator]</span><span class="delimiter">: </span><span class="description">iterator symbol which specifies the default iterator for an object.</span>

</div>

<!-- </toc> -->

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- TODO: better examples -->

<!-- eslint no-undef: "error" -->

```javascript
var objectKeys = require( '@stdlib/utils/keys' );
var ns = require( '@stdlib/symbol' );

console.log( objectKeys( ns ) );
```

</section>

<!-- /.examples -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2021. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/symbol.svg
[npm-url]: https://npmjs.org/package/@stdlib/symbol

[test-image]: https://github.com/stdlib-js/symbol/actions/workflows/test.yml/badge.svg
[test-url]: https://github.com/stdlib-js/symbol/actions/workflows/test.yml

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/symbol/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/symbol?branch=main

[dependencies-image]: https://img.shields.io/david/stdlib-js/symbol.svg
[dependencies-url]: https://david-dm.org/stdlib-js/symbol/main

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://gitter.im/stdlib-js/stdlib/

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/symbol/main/LICENSE

<!-- <toc-links> -->

[@stdlib/symbol/async-iterator]: https://github.com/stdlib-js/symbol/tree/main/async-iterator

[@stdlib/symbol/ctor]: https://github.com/stdlib-js/symbol/tree/main/ctor

[@stdlib/symbol/iterator]: https://github.com/stdlib-js/symbol/tree/main/iterator

<!-- </toc-links> -->

</section>

<!-- /.links -->
