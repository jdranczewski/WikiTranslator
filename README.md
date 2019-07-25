![WikiTranslator logo](img/wt_h.png "WikiTranslator")

A translator for single words/terms based on the language links interconnecting articles on Wikipedia, making it fit for scientific purposes. Visit at [wikitranslator.github.io](https://wikitranslator.github.io)!

## The idea
Millions of Wikipedia articles in different languages are linked together by volunteers to provide the ability to switch between them. WikiTranslator uses Wikipedia's APIs to let you use these links like a more classic translator product.

The trnslations are accurate and easily verifiable, often even for very obscure terminology, as the app displays Wikipedia summaries for both the original term and the translation.

Using the app also saves bandwidth, as only the necessary information is downloaded through Wikipedia's API.

## The code
The logic behind the app is contained in [`js/main.js`](js/main.js). The core of the operation is an `Article` class, which allows for fetching metadata and a summary text for a given Article. It also distinguishes between normal articles and disambiguation pages. There is also a `Search` class, allowing for autocompletion on input.
