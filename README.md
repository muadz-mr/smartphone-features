## Portrait and Landscape Orientation Experiment for Mobile Viewing

Small personal project to get the orientation detection on msmartphones.

The project is about experimenting with orientation of the viewport in the browser on mobile devices and working with animations.

You can test the webpage on your mobile devices in portrait and landscape orientation, as well as on desktop of course, with additional toggle buttons for switching the orientation of the cool smartphone. The features I listed there are my top personal features I would love to have on my smartphone.

Major issue:

- Placing the keys of the keyboard with background image (SVG)s, quite a lot of them, which resulted in very slow and stuttered animations

Solution:

- Replaced the whole keyboard as a single PNG image. Apparently, having a lot of SVGs (complex SVGs) could effect the website performance like lagging and stuttered animations, and unresponsive site.
