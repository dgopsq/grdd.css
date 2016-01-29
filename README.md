#grdd.css
A lightweight [SASS](http://sass-lang.com/) grid built using [BEMIT](http://csswizardry.com/2015/08/bemit-taking-the-bem-naming-convention-a-step-further/) (by [Harry Roberts](https://twitter.com/csswizardry)), [OOCSS](http://oocss.org/) and a lot of love ❤

##Disclaimer

I built this grid *just for fun*, I know there are many others (maybe too many) better than *grdd*.
I really wanted to use [PostCSS](https://github.com/postcss) but I thought that [SASS](http://sass-lang.com/) would provide a better environment.

##Specs

* *grdd* weights **1.810 bytes** with one breakpoint
* *grdd* **uses inline-block** just because is fully supported from any browser
* *grdd* has **6 columns**
* *grdd* **uses fractions**: `.grdd__item--1/2`
* *grdd* uses **@ for breakpoints**: `.grdd__item--1/1@sm`
* *grdd* is **infinitely nestable**
* *grdd* **respects BEM** naming convention
* *grdd* **respects OOCSS** philosophy
* *grdd* is written in only **60 lines of SASS**, including *comments* and *extra spaces*

##Features

You can customize *grdd* changing the variables in the top lines and recompiling it.
*grdd* uses [Gulp](http://gulpjs.com/), so the only thing you have to do in order to recompile it is:
```
$ cd grdd.css/
$ npm i
$ gulp compile
```

### Namespaces
*grdd* is a component, so, following the conventions of *BEMIT* we should append a `.c-` to the selector, however, you can change that prefix or even delete it.
```SASS
$grdd-namespace: "whatever-"; // Whatever namespace
$grdd-namespace: "";          // No namespace
```

### Gutter
The default gutter between columns is `.625em`.
```SASS
$grdd-gutter: 0; // No gutter
```

### Sizes
Probably you don't want the default sizes (`.grdd__item--1/2, ...`) because you already have a list of sizes in your own project. Turning `$grdd-sizes` to `false` allows you to have only the *grdd* component without all the fractions, saving a lot of space.
```SASS
$grdd-sizes: false; // No fractions
```

### Breakpoints
You can easily add and remove breakpoints but remember that the more breakpoints you add, the more *grdd* will weight.
```SASS
$grdd-breakpoints: ( 
  "sm": 48em,
  "lg": 75em
);
```

## Usage
*grdd* is simple to use!
```HTML
<div class="c-grdd">
  <div class="c-grdd__item c-grdd__item--1/2 c-grdd__item--1/1@sm"></div><!--
  --><div class="c-grdd__item c-grdd__item--1/2 c-grdd__item--1/1@sm"></div>
</div>
```
This grid has two 50% columns by default, and two 100% columns when the viewport will be < 48em.
Remember to add a comment from the end of each *grid__item* to the start of the next one, this because *grdd* uses [inline-block](https://css-tricks.com/fighting-the-space-between-inline-block-elements/).

## License
The MIT License (MIT)

Copyright (c) 2016 Diego Pasquali

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.