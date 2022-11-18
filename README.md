# Natours-Tours-Agency---Landing-Page

- Landing page for a fictional business that offers green outdoor tours in the Carpathian mountains called "Natours"

## Used Front-end Concepts

- Float Grid Layout implemented for cross-browser compatibility
- Object Oriented Programming in JavaScript
- Component-based development
- '7-1 Sass Architecture' folder structure adapted as per project requirements
- BEM for CSS class naming convention and architecture
- DRY coding principles

## Closely followed the pillars of GOOD HTML and CSS

### Responsive design

- Fluid grids and layouts - to allow content to easily adapt to the current viewport width used to browse the website
- Media queries - to change styles on certain viewport widths (breakpoints), allowing us to create different version of our website for different widths
- Responsive/Flexible images - images behave differently than text content, and so we need to ensure that they also adapt nicely to th current viewport
- Correct units
- Mobile-first VS Desktop-first
- Progressive enhancement VS Graceful degradation

#### Mobile-First PROS & CONS

##### PROS

- 100% optimized for mobile experience;
- reduces websites and aps to the absolute essentials;
- results in smaller, faster and more efficient products;
- prioritizes content over aesthetic design, which may be desirable;

##### CONS

- the desktop version might feel overly empty and simplistic;
- more difficult and counterintuitive to develop;
- less creative freedom, making it more difficult to create distinctive products;
- clients are used to see a desktop version of the sire as a prototype;
- do our users even use the mobile internet? what is the purpose se of the website?

#### Responsive / Flexible images

> the goal of responsive images is to serve **right image** to the **right screen size** and device, in order o avoid downloading unnecessary large images on smaller screens

##### When to use Responsive images

- Resolution switching - decrease image resolution on smaller screens;
- Density switching - half the image resolution on `@1x` screen (low res) and full image resolution `@2x` screen (high res);
- Art direction - different image on smaller screen - in this case you only want to show specific details of the image without (cropping the image in pre-production stages);

### Maintainable and scalable code

- Clean
- Easy-to-understand and modular
- Ready for growth
- Reusable
- HOW to organize files
- How to name classes
- How to structure HTML

#### Think - Build - Architect Mindset

##### Think

**Think** about the layout of your webpage or web app before writing code.
**Component-Driven Design**

- **Modular building blocks** that make up interfaces
- Held together by the **layout** of the page
- **Re-usable** across a project, and between different projects
- **Independent**, allowing us to use them anywhere on the page
  > this "Component-Driven Design" is very similar to the "Atomic Design" philosophy and strategy of Brad Frost (Organisms are the corespondent of Components)

##### Build

- **Build** your layout in HTML and CSS with a consistent structure for naming classes.
  **BEM**

* **B**lock **E**lement **M**odifier
* **BLOCK**: standalone component hat is meaningful on its own
* **ELEMENT**: part of a block hat has no standalone meaning
* **MODIFIER**: a different version of a block or an element
* **BEM** is easy to maintain, reusable and helps maintain a low specificity
* `block__element--modifier {} `

##### Architect

- Create a logical **architecture** for you CSS and JS with files and folders.
  > there are several CSS architecture patterns like ITCSS, SMACSS, OOCSS or 7-1 Pattern
- **The 7-in-1 Pattern**

* 7 different folders for partial Sass/Less/Stylus files, ad 1 main file to import all other files into a compiled CSS stylesheet

### Web performance

- Less HTTP requests
- Less considered
- Compress code
- Use a CSS preprocessor
- Less images
- Compress images
