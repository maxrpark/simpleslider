# simpleslider

This package is really simple to use and I let you display a slides-show or carousel on your website without having to worry at all.

All you need to do is to create a section or div tag with the class slidesContainer and inside it place as many div tags as you want your slides-show or carousel to have. This div needs to have the slide class to work.
Installation

```
npm i @maxcoding/simpleslider
```

## Usage

### Register the packeget

import simpleSlider from '@maxcoding/simpleslider'
or
import simpleslider from './node_modules/@maxcoding/simpleslider/index.js';

#### Javascript

After registering the package you just need to initiate like this

simpleslider()

#### Vue

```
  mounted() {
    simpleSlider();
  },
```

## Template

```
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

### params

simpelSlider have some basic params so you can start using it right away but also it gives you the chance to customize them

- height: control height of sliderContainer, default it 60vh you can use vh or px
- width: control height of sliderContainer default it 60vw you can use vh or px
- autoSlide: The default is true which new a new slide every 3 seconds if autoSlide is false, there is no auto slide
- arrow: The default is true, you want to have an auto carrousel and don't let the user click to the next slidarrow="false"
- color: The default is #000000, but you can change the color of the arrow using RGB, color name or hex color.
- arrowSize:
- arrow:
