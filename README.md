# SVG Spritesheet Creation using Gulp

This set of tasks is meant to be a standalone SVG Spritesheet generator to be used locally. The completed spritesheets can then be copy/pasted into a project.

Alternatively, this setup can also be integrated into an existing gulp setup and run in the dev pipeline.

## Setup

```
npm install
```

## Usage

Bundle related raw SVGs into one folder (i.e. socials-spritesheet) and place entire folder into a folder in the root called `svg-src`.

Your folder structure may look something like this:
```
root
|-- svg-min
|   |-- socials-spritesheet
|   |   |-- facebook.svg
|   |   |-- twitter.svg
|   |   `-- linkedin.svg

```

Then, to create the spritesheet titled `socials-spritesheet.svg`, run this command:

```
gulp svg-sprites
```

This will create an `svg-min` folder as an intermediary, and an `svg` folder for the completed spritesheets.

## Implementation

To use in HTML, link each SVG like so:

```
<svg tabindex="-1" focusable="false" xmlns="http://www.w3.org/2000/svg" aria-labelledby="share-facebook-title"><title id="share-facebook-title">Share on Facebook</title>
    <use tabindex="-1" focusable="false" xlink:href="/path-to-spritesheet/socials-spritesheet.svg#facebook"></use>
</svg>

```
Note the double `focuseable="false"` (for IE) and `tabindex="-1"` since we're not intending to use the SVG as a link, even though the markup contains an href.