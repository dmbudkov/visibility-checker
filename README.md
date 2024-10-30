# Visibility Checker

A lightweight JavaScript library for checking element visibility on the screen using IntersectionObserver.

## Installation

```bash
npm install visibility-checker
```

## Usage

```typescript
import VisibilityChecker from 'visibility-checker';

const onVisibilityChange = (element: Element, isVisible: boolean): void => {
    if (isVisible) {
        console.log(`${element.id} is visible`);
    } else {
        console.log(`${element.id} is not visible`);
    }
};

const checker = new VisibilityChecker(onVisibilityChange, {threshold: 0.5});
const myElement = document.getElementById('myElement');

if (myElement) {
    checker.observe(myElement);
}
```

# API

## new VisibilityChecker(callback, options)

Creates a new VisibilityChecker instance.

### Arguments

- **callback (element: Element, isVisible: boolean) => void**  
  A function that gets called whenever the visibility of an observed element changes.

    - **element**: The element being observed.
    - **isVisible**: A boolean indicating whether the element is visible.

- **options** `{ root?: Element | null, rootMargin?: string, threshold?: number }`  
  An optional object to configure the observer.

    - **root** *(optional)*: The element to use as the viewport for visibility checking. If null or omitted, defaults to
      the browser viewport.
    - **rootMargin** *(optional)*: A margin around the root. Can be specified in pixels or percentages (e.g., "0px 0px
      -50px 0px").
    - **threshold** *(optional)*: A number from 0 to 1 that indicates the proportion of the element's visibility needed
      to trigger the callback. For example, 0.5 triggers the callback when 50% of the element is visible.

## observe(element)

Starts observing the specified element.

- **element** `Element`  
  The DOM element to observe.

## unobserve(element)

Stops observing the specified element.

- **element** `Element`  
  The DOM element to stop observing.

## disconnect()

Stops the observer from monitoring all elements.