# Restaurant page
This restaurant page project is created as part of the Odin Project curriculum.

[Link to project description](https://www.theodinproject.com/courses/javascript/lessons/restaurant-page?ref=lnav#student-solutions)

[Link to live demo](https://lenachestnut.github.io/restaurant_page/)

## Webpack and npm
This project uses webpack and npm.

[Webpack setup tutorial](https://webpack.js.org/guides/getting-started/)

### Webpack - updates
If you run `npx webpack --watch`, you will not have to rerun webpack every time you make a change.

### .gitignore
Since node_modules folder can get very big, it's added to .gitignore file.

## JS
### Clearing the page
In order to not use innerHtml to clear the page, the following method can be used instead:

``` javascript
        while (content.firstChild) {
            content.removeChild(content.firstChild);
        }
```

## Assets
### Images
* [Green Dragon Inn Photo from Hobbiton tours](https://www.hobbitontours.com/en/discover/the-green-dragon-inn/)
* [Tawa Fish with White Rice by Amna Akram](https://unsplash.com/photos/KIL9suHFp6s)
* [Potatos photo by Monika Grabkowska](https://unsplash.com/photos/N-xhCO5gY7s)
* [Glass of IPA by mnm.all](https://unsplash.com/photos/46Yad80Ynp4)
* [Map of the Shire](http://www.visionsofthering.com/images/map_shire.jpg)

### Fonts
* [Ringbearer by Pete Klassen](https://www.dafont.com/ringbearer.font)