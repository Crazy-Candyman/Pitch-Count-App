# Baseball Pitch Counter ⚾

## About the Project

This web app is a simple baseball pitch counter where you can log the number of pitches thrown by pitchers. The app
features a count for both, the Home and Away teams. The pitches are logged and saved via local storage and it will be
displayed even if you refresh the web app or switch sides. To reset the counter, click "New Pitcher", it will only reset
the count for the current side that is being displayed.

## Screenshot

![https://crazy-candyman.github.io/Pitch-Count-App/](/screenshot/pitch_counter_screenshot.png)

## Links

Live URL: [Preview Site](https://crazy-candyman.github.io/Pitch-Count-App/)

## Built With

    - HTML
    - CSS
    - JavaScript

**JavaScript code from the solution**

```javascript
function increment() {
  count += 1;
  countEl.textContent = count;
}

function save() {
  let countStr = " " + count + " - ";
  saveEl.textContent += countStr;
  countEl.textContent = 0;
  count = 0;
}
```

## Atrribution

This is a project that originally started off as a increment counter while completing the
<a href="https://scrimba.com/learn/learnjavascript">Learn Java Script Course from Scrimba</a>.

Baseball glove and ball icon found at <a href="https://www.flaticon.com/free-icons/baseball" title="baseball icons">
Baseball icons created by justicon - Flaticon</a>
<br/>
<br/>
<br/>

Created by [@Crazy-Candyman](https://github.com/Crazy-Candyman)
