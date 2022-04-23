# Pre-work - *Memory Game*

**Memory Game** is a Light & Sound Memory game to apply for CodePath's SITE Program. 

Submitted by: Luca Capaldi

Time spent: 6.5 hours spent in total

Link to project: https://glitch.com/edit/#!/excited-pear-grade

## Required Functionality

The following **required** functionality is complete:

* [X] Game interface has a heading (h1 tag), a line of body text (p tag), and four buttons that match the demo app
* [X] "Start" button toggles between "Start" and "Stop" when clicked. 
* [X] Game buttons each light up and play a sound when clicked. 
* [X] Computer plays back sequence of clues including sound and visual cue for each button
* [X] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess. 
* [X] User wins the game after guessing a complete pattern
* [X] User loses the game after an incorrect guess

The following **optional** features are implemented:

* [ ] Any HTML page elements (including game buttons) has been styled differently than in the tutorial
* [ ] Buttons use a pitch (frequency) other than the ones in the tutorial
* [ ] More than 4 functional game buttons
* [X] Playback speeds up on each turn
* [X] Computer picks a different pattern each time the game is played
* [ ] Player only loses after 3 mistakes (instead of on the first mistake)
* [ ] Game button appearance change goes beyond color (e.g. add an image)
* [ ] Game button sound is more complex than a single tone (e.g. an audio file, a chord, a sequence of multiple tones)
* [ ] User has a limited amount of time to enter their guess on each turn

The following **additional** features are implemented:

- [ ] List anything else that you can get done to improve the app!

## Video Walkthrough (GIF)

If you recorded multiple GIFs for all the implemented features, you can add them here:
![ezgif com-gif-maker](https://user-images.githubusercontent.com/104174523/164868914-3d650869-cccc-47b4-8b86-31b7b045122e.gif)
![ezgif com-gif-maker (1)](https://user-images.githubusercontent.com/104174523/164868919-ee9a1c0a-7bc2-4cb0-80d8-30e1c304a35f.gif)


## Reflection Questions
1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here. 
CSCI 1300 Introduction to Programming - CU Boulder

2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words) 
The largest challenge I faced was working with 3 languages I have not yet encountered. I have only been trained in C++ so far, so getting familiar with JavaScript, CSS, and HTML was very fascinating and daunting at the same time. Though the general walkthrough of the project was very helpful, when it got time to be creative about solutions, I started to struggle to apply the concepts in my head to the code itself. One of the most specific examples of this was figuring out how to randomize the pattern for the game. When I was first given only the function Math.random(), I began by trying to solve the problem too complexly. I tried to use the modulo function to find the remainder after dividing by the number of options I wanted to generate (in this case, 4). However, with a lack of knowledge about the programming language itself, I couldn’t apply this concept I had learned in C++. I had to think on my feet and go back to basics, so I came up with a simple 4 option if statement that checked the probability produced by Math.random(). It felt incredibly rewarding to solve this problem on my own, and to have to do it under such time constraints made it even more satisfying.

3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words) 
One of the most important questions I thought of was how to create the advanced designs of websites. We barely broke the surface of what is possible with CSS I believe, and I would be incredibly grateful to learn about the advanced techniques in that language. 
Another interesting question I had is how do developers balance the different aspects of web development? With a responsibility to functionality, design, and user experience, I think it could be quite difficult to balance. 

4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words) 
I would focus on making the user experience for this game the best it could be. I would change the sounds/frequencies so that they are more comfortable for a longer period of time. If this game is to be focused on an audio and visual experience, that has to be the priority. On the note of visuals, I would spend the rest of the time focusing on the design of the website. Aspects as simple as font and centering of the game could make it much more pleasing to look at. Finally, adding harder levels or a longer sequence could make the playability of the game much better. 


## Interview Recording URL Link

[My 5-minute Interview Recording]https://www.loom.com/share/517b54a5fcc94fc68fc90466c25d3c13

## License

    Copyright Luca Capaldi

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
