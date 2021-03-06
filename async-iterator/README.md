<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

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

# Async Iterator Symbol

> Async iterator [symbol][mdn-symbol] which specifies the default async iterator for an object.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var AsyncIteratorSymbol = require( '@stdlib/symbol/async-iterator' );
```

#### AsyncIteratorSymbol

Async iterator [`symbol`][mdn-symbol] which specifies the default async iterator for an object.

```javascript
var s = typeof AsyncIteratorSymbol;
// e.g., returns 'symbol'
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

## Notes

-   The [symbol][mdn-symbol] is only supported in environments which support [symbols][mdn-symbol] and async iterators. In non-supporting environments, the value is `null`.

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var AsyncIteratorSymbol = require( '@stdlib/symbol/async-iterator' );

if ( AsyncIteratorSymbol === null ) {
    console.log( 'Environment does not support Symbol.asyncIterator.' );
} else {
    console.log( 'Environment does support Symbol.asyncIterator.' );
}
```

</section>

<!-- /.examples -->

<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/symbol/ctor`][@stdlib/symbol/ctor]</span><span class="delimiter">: </span><span class="description">symbols.</span>
-   <span class="package-name">[`@stdlib/symbol/iterator`][@stdlib/symbol/iterator]</span><span class="delimiter">: </span><span class="description">symbol iterator.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[mdn-symbol]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol

<!-- <related-links> -->

[@stdlib/symbol/ctor]: https://github.com/stdlib-js/symbol/tree/main/ctor

[@stdlib/symbol/iterator]: https://github.com/stdlib-js/symbol/tree/main/iterator

<!-- </related-links> -->

</section>

<!-- /.links -->
