# Koch curve
Koch curve's points generator

## Install
```npm i koch-curve```

## Use
The function processLine receives 3 parameters: the first two are the points that define the line, and the third one is the number of levels to process. It returns a list of points.
```
const {processLine} = require('koch-curve');

const points = processLine({x:-200, y:0}, {x:200, y:0}, 6);
```

Visualization using Three.js:

![Image](https://i.imgur.com/J8ne2lP.png)



