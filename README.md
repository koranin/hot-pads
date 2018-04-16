# Zillow Group HotPads

1. Create a react project with webpack configuration that fulfills the following requirements:

    - [x] Create single JavaScript file as the entrypoint into the application.
    
    - [x] Transpile JavaScript/ES6/React code with both .js and .jsx file extensions to a single ES5 .js bundle with a unique hash added to the filename.
    
    - [x] Compile SCSS code with .scss extensions to a single .css file with a unique hash added to the file name.
    
    - [x] Handle IMG file with .jpeg, .jpg, .png, and .gif extentions; should return a link referencing the file.
    
    - [x] Handle SVG file with .svg extension; return a base-64 data-encode string if the file is less than 1MB and a link to the file otherwise. 

2. Create PhotoGallery component with the following requirements:
    
    - [ ] The PhotoGallery should take an array of images.

    - [ ] Each image has url and caption.

    - [ ] The caption should be displayed over the image.

    - [ ] The PhotoGallery either click or swipe through images.

    - [ ] Smoothly animating the swipe and transition between images.

    - [ ] Handle edge cases.