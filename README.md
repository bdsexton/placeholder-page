# Placeholder Page

Sometimes one needs a placeholder page, but default placeholder pages like the ones used by web hosts tend to be less than pretty and they might even be full of other people's logos and links. This is a clean, pretty alternative.

I'll probably do something more interesting with this at some point—add a build script or maybe even make a generator web site—but for now there's HTML, CSS, a PNG image file, and a shortcut image file for you to customize or replace as you like.

## Live Demo

There should be a live demo running [here](https://bdsexton.github.io/placeholder-page/ "Placeholder Page"), but GitHub Pages does not seem to be serving the local stylesheet or image files. I am looking into it.

The "docs" folder contains a minified version of the placeholder page that you can run locally. Either open index.html in your browser directly or, if you have both npm and Browsersync installed, type "npm demo" from the project folder on your command line.

## About the Background Photos

The background photos are loaded from [Unsplash Source](https://source.unsplash.com/ "Unsplash Source | A Simple API for Embedding Free Photos from Unsplash"), which selects them at random from their featured mountain and lake pictures. Look for this line in **placeholder.css** if you want to change that:

```css
background: #ccc url(https://source.unsplash.com/featured/?mountain,lake) center center/cover fixed;
```

## Options

The HTML and CSS include both featured-image and initial-text options, so you can easily add a logo or a picture of your smiling mug if you prefer.

There are also some combo buttons to use or remove as you prefer. If you do remove them and you haven't added anything else that uses Bootstrap, you can go ahead and remove the BootstrapCDN stylesheet link too.

## Local Testing

I like to use [Browsersync](https://browsersync.io/ "Browsersync - Time-saving synchronised browser testing") for local testing. You can use it with a task runner such as [Grunt](https://gruntjs.com/ "Grunt: The JavaScript Task Runner") or directly like so:

```shell
browser-sync start --server build
```

That "build" value after the --server argument tells Browsersync we want it to serve files from the "build" directory, which is created when building the project via the Gruntfile.

If you want Browsersync to start with a page other than index.html just tell it what page to use with an --index argument like so:

```shell
browser-sync start --server build --index hello.html
```

If you would like to learn more about Browsersync's command line options, see [Browsersync Command Line Usage](https://browsersync.io/docs/command-line "Browsersync Command Line Usage").

## Credits

This project was designed and developed by [Brian Sexton](https://briansexton.com/).

The lovely background images are provided by [Unsplash](https://unsplash.com/ "Unsplash | Beautiful Free Photo Community") and their kind and excellent contributors via [Unsplash Source](https://source.unsplash.com/ "Unsplash Source | A Simple API for Embedding Free Photos from Unsplash").

Button styling is provided by [Bootstrap](https://getbootstrap.com/) via [BootstrapCDN](https://www.bootstrapcdn.com/ "Quick Start · BootstrapCDN by MaxCDN").

The [Bree Serif](https://fonts.google.com/specimen/Bree+Serif "Bree Serif - Google Fonts") font is provided by [Type Together](http://www.type-together.com/ "Type Together : High quality fonts and custom type design") via [Google Fonts](https://fonts.google.com/).