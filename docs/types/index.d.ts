/*
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

// TypeScript Version: 4.1

/* eslint-disable max-lines */

import AsyncIteratorSymbol = require( './../../async-iterator' );
import Symbol = require( './../../ctor' );
import IteratorSymbol = require( './../../iterator' );

/**
* Interface describing the `symbol` namespace.
*/
interface Namespace {
	/**
	* Async iterator symbol.
	*
	* ## Notes
	*
	* -   This symbol specifies the default async iterator for an object.
	* -   The symbol is only supported in ES6/ES2015+ environments. For non-supporting environments, the value is `null`.
	*/
	AsyncIteratorSymbol: typeof AsyncIteratorSymbol;

	/**
	* Returns a symbol.
	*
	* ## Notes
	*
	* -   Unlike conventional constructors, this function does **not** support the `new` keyword.
	* -   This function is only supported in environments which support symbols.
	*
	* @param description - symbol description which can be used for debugging but not to access the symbol itself
	* @returns symbol
	*/
	Symbol: typeof Symbol;

	/**
	* Iterator symbol.
	*
	* ## Notes
	*
	* -   This symbol specifies the default iterator for an object.
	* -   The symbol is only supported in ES6/ES2015+ environments. For non-supporting environments, the value is `null`.
	*/
	IteratorSymbol: typeof IteratorSymbol;
}

/**
* Symbol.
*/
declare var ns: Namespace;


// EXPORTS //

export = ns;
