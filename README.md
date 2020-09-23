
# Ask Apps Academy - Session 3

### Summary:
In this exercise, you will build a React application that allows us to view a playlist of videos

The necessary structure and styling for the application has already been provided, but there are several parts of the application logic that don't work yet.

No CSS/HTML changes are required to complete this exercise. The goal is to focus on JavaScript and React.

This application has a VideoPlayer component at its root, which renders a VideoList component, in addition to some other elements to represent the video viewer and some option buttons.

The VideoList component renders a collection of VideoButton components.

The VideoButton component renders an element that allows the user to select a video.

Refer **Solution-Image.PNG** for how the final solution should look

## Exercise 1 - `/src/utilities.js`
* This file contains a number of opportunities for additional challenges after completing the base exercise, but at first, the only part of this file that needs to be changed is the `getVideoIdFromPageUrl` function.
* This function takes in a page URL, like `'https://vimeo.com/315518030'`, and needs to be written so that it separates out just the video ID, like `'315518030'`, and returns it.
* For helpful String methods you can use to achieve this goal, try referencing [the String documentation on MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String#Methods_2) for more information.

## Exercise 2 - `/src/VideoPlayer.js`
* This file requires a number of different changes. After familiarizing yourself with the file as a whole to understand the structure of the component, direct your attention to the `render` function.
* Make sure the proper props are passed to VideoList. You need to take a look at the props that are accepted in VideoList.js to understand what props need to be passed.

## Exercise 3 - `/src/VideoList.js`
* This component is much less complex than the VideoPlayer component. In this file, update the `render` function so that it passes the correct values to the components that it renders. (More details are in the code comments of the function itself.)

## Exercise 4 - `/src/VideoButton.js`
* Just like in the VideoList component, this component needs some updates to its `render` function. Update this function so that it passes the appropriate values to the elements it renders depending on the values in its props. (More details are in the code comments of the function itself.)
* Run the application and make sure you are able to see the results on the screen

## Exercise 5 (Optional)

* Try changing the main video that is rendered to one of the videos from the list
* Try playing around with styles to enhance your video player
