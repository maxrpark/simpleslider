![alt text](https://img.shields.io/badge/My%20first%20NPM%20package-1.0.0-red)  ![alt text](https://img.shields.io/badge/Made%20by-Max-brightgreen) ![alt text](https://img.shields.io/badge/NPM%20package-True-red)


# Simpleslider

Take a look at the docs and examples on [simpleCode](https://simple-code.netlify.app/carrousel/intro.html)

Take a look at the example on [codepen](https://codepen.io/maxrpark/pen/ExwXRPb).

This package is really simple to use and I let you display a slides-show or carousel on your website without having to worry at all.

All you need to do is to create a section or div tag with the class sliderContainer and inside it place as many div tags as you want your slides-show or carousel to have. This div needs to have the slide class to work.

## Installation

```bash
npm i @maxcoding/simpleslider
```

## Usage

### Register the packeget

```js
import simpleSlider from '@maxcoding/simpleslider';
```

or

```js
import simpleslider from './node_modules/@maxcoding/simpleslider/index.js';
```

#### Javascript

After registering the package inside your javascript file you just need to iniciate the simpleSlider like this:

```js
simpleslider();
```

##### Don't forget

```js
Your javascript file must be type="module".
```

#### Frameworks

For static data you can iniciate the package when the component is mouting. If you are going to use it with dynamic data read **_Dynamic data_** section at the end of file.

## Template

```html
<section class="sliderContainer">
  <div class="slide">
    <img src="cat1.jpg" alt="" />
  </div>
  <div class="slide">
    <img src="cat2.jpg" alt="" />
  </div>
  <div class="slide">
    <img src="cat3.jpg" alt="" />
  </div>
</section>
```

### Params

SimpelSlider have some basic params so you can start using it right away but also it gives you the chance to customize them.

| Param       | Description                       | Default | Notes        |
| ----------- | --------------------------------- | ------- | ------------ |
| height      | Control height of sliderContainer | 100%    | px, vh or %  |
| width       | Control width of sliderContainer  | 600px   | Use px or vh |
| color       | Change color of arrows            | black   | RGB hex name |
| arrowSize   | Size of arrows                    | 2       | From 1 to 5  |
| arrowWeight | Size of weight                    | 5       | From 1 to 10 |

<!--        | autoSlide                         | Run new slide every 3 seconds | false        |     |
| arrow       | Display arrows                    | true                          |              | -->

### Example

```html
<section
  class="sliderContainer"
  height="300px"
  width="300px"
  arrowSize="2"
  color="white"
>
  <div class="slide">
    <img src="cat1.jpg" alt="" />
  </div>
  <div class="slide">
    <img src="cat2.jpg" alt="" />
  </div>
  <div class="slide">
    <img src="cat3.jpg" alt="" />
  </div>
</section>
```

Take a look at the example on [codepen](https://codepen.io/maxrpark/details/BawMWGR).

## Dynamic data

To use Simple Slider with dynamic data, you need to initiate the package after you get the data. For example in plain javascript you need to do this:

1. Select the container
2. Fetch the data
3. After you get the data, you can map over it and create the slides
4. Initiate the package

## Code

```js
const sliderContainer = document.querySelector('.sliderContainer'); // Select the container
const fetchProjects = async () => {
  // your function
  try {
    const resp = await fetch(
      // Fetch the data
      'https://my-portfolio-blog-website.netlify.app/api/myProjects'
    );
    const data = await resp.json();
    const projectImg = data // Map over it and create the slides
      .map((project) => {
        return `
      <a class="slide" href="${project.pageUrl}" target="_blank"
        >visit
        <img src="${project.url}" alt="cateria" />
      </a>
        `;
      })
      .join('');
    sliderContainer.innerHTML = projectImg;
    simpleslider(); // Initiate the package
  } catch (error) {
    console.log(error);
  }
};

fetchProjects(); // Run your function
```

## Example

Take a look at the example on [codepen](https://codepen.io/maxrpark/pen/popjqxG)
