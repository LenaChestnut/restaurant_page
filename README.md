# Restaurant page
This restaurant page project is created as part of the Odin Project curriculum.

[Link to project description](https://www.theodinproject.com/courses/javascript/lessons/restaurant-page?ref=lnav#student-solutions)

## Webpack and npm
This project uses webpack and npm.

[Webpack setup tutorial](https://webpack.js.org/guides/getting-started/)

### Webpack - updates
If you run `npx webpack --watch`, you will not have to rerun webpack every time you make a change.

### .gitignore
Since node_modules folder can get very big, it's added to .gitignore file.

## JS
### Clearing the page
In order not to use innerHtml to clear the page, the following method can be used instead:

``` javascript
        while (content.firstChild) {
            content.removeChild(content.firstChild);
        }
```

## Assets
### Images
* [Green Dragon Inn Photo from Hobbiton tours](https://www.hobbitontours.com/en/discover/the-green-dragon-inn/)

### Fonts
* [Ringbearer by Pete Klassen](https://www.dafont.com/ringbearer.font)