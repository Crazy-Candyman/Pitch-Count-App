# Baseball Pitch Counter ⚾

## About the Project

This web app is a simple baseball pitch counter where you can log the number of pitches thrown by the pitcher. After counting, you can log the pitches and it will be displayed below the counter.

## Screenshot

![](/screenshot/pitch_counter_screenshot.png)

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

This is a project aided by Scrimba while completing the Learn JavaScript Course.

By Scrimba <br/>
Edited by [@Crazy-Candyman](https://github.com/Crazy-Candyman)
