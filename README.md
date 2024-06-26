
# react-zider-ui

> reusable pro react components package

## Installation

### NPM

```sh
$ npm install react-zider-ui

```

### YARN


```sh
$ yarn add react-zider-ui
```

## using the component:

```tsx
import React from 'react';
import InfiniteTypewriter from 'infinite-typewriter';

const App = () => {
  return (
    <div>
      <InfiniteTypewriter
        text="Hello, World!"
        headerLevel="h1"
        gradientType="linear"
        gradient={true}
        gradientColor1="#ff0000"
        gradientColor2="#00ff00"
        gradientColor3="#0000ff"
        gradientDirection="to right"
        cursor="|"
        typingDelay={100}
        eraseDelay={2000}
        loopDelay={1000}
        fontSize="2rem"
        fontStyle="italic"
        onComplete={() => console.log('Typing complete!')}
      />
    </div>
  );
};

export default App;
```

## PROPS

| PropName           | Type      | Default    | Description                                                                        |
|--------------------|-----------|------------|------------------------------------------------------------------------------------|
| text               | string    | required   | The text to be displayed in the typewriter effect.                                 |
| headerLevel        | string    | 'p'        | The HTML header level for the text (e.g., 'h1', 'h2', 'h3', etc.).                 |
| gradientType       | string    | 'linear'   | The type of gradient to apply ('linear' or 'radial').                               |
| gradient           | boolean   | false      | Whether to apply a gradient effect to the text.                                     |
| gradientColor1     | string    | '#ff0000'  | The first color in the gradient effect (in hexadecimal format).                     |
| gradientColor2     | string    | '#00ff00'  | The second color in the gradient effect (in hexadecimal format).                    |
| gradientColor3     | string    | '#0000ff'  | The third color in the gradient effect (in hexadecimal format).                     |
| gradientDirection  | string    | 'to right' | The direction of the linear gradient effect.                                        |
| cursor             | string    | `''`       | The cursor style to be shown during typing.                                         |
| typingDelay        | number    | 100        | The delay (in milliseconds) between each character being typed.                     |
| eraseDelay         | number    | 2000       | The delay (in milliseconds) before the text starts erasing after it's fully typed.  |
| loopDelay          | number    | 1000       | The delay (in milliseconds) before the typewriter effect loops after erasing text.   |
| fontSize           | string    | '1rem'     | The font size of the text.                                                          |
| fontStyle          | string    | 'normal'   | The font style of the text.                                                         |
| onComplete         | function  | undefined  | A callback function to be called when the typewriter effect completes a loop.        |

## UPDATE

To update the component to the latest version, run:

### NPM

```sh
$ npm update react-zider-ui

```

### YARN


```sh
$ yarn add react-zider-ui
```
