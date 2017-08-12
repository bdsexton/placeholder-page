# Placeholder Page

Sometimes one needs a placeholder page, but default placeholder pages like the ones used by web hosts tend to be less than pretty and they might even be full of other people's logos and links. This is a clean, pretty alternative.

I'll probably do something more interesting with this at some point—add a build script or maybe even make a generator web site—but for now there's HTML, CSS, a PNG image file, and a shortcut image file for you to customize or replace as you like.

## Live Demo

You can see a live demo running [here](https://bdsexton.github.io/placeholder-page/ "Placeholder Page").

### Running the Live Demo Locally

GitHub Pages serves the above linked page from the "docs" folder, which contains a minified version of the placeholder page with a "Fork me on GitHub" banner. If you would like to run that already-built version locally, either open index.html in your browser directly or, if you have both npm and Browsersync installed, enter the following at your command line:

```shell
npm run demo
```

## About the Background Photos

The background photos are loaded from [Unsplash Source](https://source.unsplash.com/ "Unsplash Source | A Simple API for Embedding Free Photos from Unsplash"), which selects them at random from their featured mountain and lake pictures. Look for this line in **placeholder.css** if you want to change that:

```css
background: #ccc url(https://source.unsplash.com/featured/?mountain,lake) center center/cover fixed;
```

## Options

The HTML and CSS include both featured-image and initial-text options, so you can easily add a logo or a picture of your smiling mug if you prefer.

There are also some combo buttons to use or remove as you prefer. If you do remove them and you haven't added anything else that uses Bootstrap, you can go ahead and remove the BootstrapCDN stylesheet link too.

## Getting Started

### Quick Start: Ready-to-Use Files

The files in the "source" folder are ready to customize and use. They do not require any assembly or processing. Feel free to use them as you like with the tools of your choice.

### The Completely Optional Build System

Even though this is a simple project, there is a build script to minify the HTML and CSS, make copies of everything in a new folder, apply some finishing touches, and respond to changes. There are a few reasons I've set things up this way, including:

* Minified files take less bandwidth. How much less depends upon the sizes of the source files, but this project loads large images, so I'll take every little bit of bandwidth savings I can get.
* Modifying the HTML automatically allows the ready-to-use and built versions of the placeholder page to use different stylesheets without requiring a manual change.
* The CSS can be minified without losing its header comments.
* Customizing the placeholder page can be an easier and more pleasurable experience when Grunt and Browsersync keep things updated for you as you work.
* I would like to experiment with some tool-assisted customizations.

First you'll need to make sure you have the project's dependencies.

```shell
npm install
```

After that, building manually is easy.

```shell
grunt build
```

If you would like to work in the source folder and have your changes automatically built and displayed in your browser via Browsersync, just use the default Grunt task.

```shell
grunt
```

*Warning: The default Grunt task starts by deleting the "build" folder.*

## Local Testing

I like to use [Browsersync](https://browsersync.io/ "Browsersync - Time-saving synchronised browser testing") for local testing. You can use it with a task runner such as [Grunt](https://gruntjs.com/ "Grunt: The JavaScript Task Runner") as mentioned above or you can use it directly like so:

```shell
browser-sync start --server build
```

That "build" value after the --server argument tells Browsersync we want it to serve files from the "build" directory, which is created when building the project via the Gruntfile.

If you want Browsersync to start with a page other than index.html just tell it what page to use with an --index argument like so:

```shell
browser-sync start --server build --index hello.html
```

If you would like to learn more about Browsersync's command line options, see [Browsersync Command Line Usage](https://browsersync.io/docs/command-line "Browsersync Command Line Usage").

## Room for Improvement

I have a few thoughts:

* There could probably be some further mobile optimization, especially with regard to background image sizes.
* It might be nice to have an easy way to select whether to use a featured image or initial text as part of the build process rather than editing the HTML directly. That might be overkill, though.
* I really like the idea of making a browser-based tool to make placeholder pages.
* Perhaps I should offer a download of just the essential files without the tooling.

## Credits

This project was designed and developed by [Brian Sexton](https://briansexton.com/).

The lovely background images are provided by [Unsplash](https://unsplash.com/ "Unsplash | Beautiful Free Photo Community") and their kind and excellent contributors via [Unsplash Source](https://source.unsplash.com/ "Unsplash Source | A Simple API for Embedding Free Photos from Unsplash").

Button styling is provided by [Bootstrap](https://getbootstrap.com/) via [BootstrapCDN](https://www.bootstrapcdn.com/ "Quick Start · BootstrapCDN by MaxCDN").

The [Bree Serif](https://fonts.google.com/specimen/Bree+Serif "Bree Serif - Google Fonts") font is provided by [Type Together](http://www.type-together.com/ "Type Together : High quality fonts and custom type design") via [Google Fonts](https://fonts.google.com/).