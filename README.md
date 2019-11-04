# [Palette Picker](https://em-ja-palette-picker.herokuapp.com/)

Palette Picker is a semi random, color palette generating, web application. It was built by [Edgar Munoz](https://github.com/criteriamor) and I over the course of 9 days during the 4th quarter of Turing School of Software & Design.

[More information about original assignment can be found here](http://frontend.turing.io/projects/palette-picker.html)

[Link to Back End repository here](https://github.com/JakeAdmire/Palette-Picker_API)

## What were my goals for this project?

Throughout this project I maintained the usual goals of performing in an Agile environment while utilizing continuous integration testing.

Additionally, I focussed on maintaining strong and open communication with my project partner with paired programming and code review.

#### Technical Goals:
- Server-side testing using  `supertest`
- Furthering the understanding of CRUD endpoints
- Using CORS to connect the front and back end
- Using multiple environments (i.e. development, testing, CI, and production)

## Screenshots & Explanation:

<img width="1487" alt="palette picker full page screenshot" src="https://user-images.githubusercontent.com/44077214/68129305-8b989580-fed6-11e9-9817-3901401c684c.png">

This is an example of the Palette Picker application displaying a randomly generated palette. On each swatch you can see the displayed name, hex code, and a locked status indicator.

>Notice how the lightness value of the swatch information changes dependent of the color its sitting atop. This is to provide better visibility regardless of the displayed color

---
<img width="1487" alt="Screen Shot 2019-11-04 at 7 40 01 AM" src="https://user-images.githubusercontent.com/44077214/68129304-8b989580-fed6-11e9-95b3-c4ce25603acb.png">

When you click dropdown arrow a menu slides in to provide you with options to title and save the current palette, as well as open and edit palettes you'd previously saved.

---

<img width="1487" alt="Screen Shot 2019-11-04 at 7 40 16 AM" src="https://user-images.githubusercontent.com/44077214/68129303-8affff00-fed6-11e9-9c31-e0c5d2ec3508.png">

If the application provides a palette that you only partially enjoy, you can lock the swatches that you favor and regenerate the rest. Palette Picker's generation logic will ensure that the newly generated colors still fit in with the theme of the palette.

## Getting Started w/ Installation:

These instructions will get a copy of the project up and running on your local machine for usage and testing purposes.

### Front End instructions
clone down the repo: `$ git clone https://github.com/JakeAdmire/Palette-Picker`

cd into directory and `$ npm install`

launch in your browser: `$ npm start`

### BackEnd instructions
clone down the repo: ```$ git clone https://github.com/JakeAdmire/Palette-Picker_API```

cd into directory and ```$ npm install```

launch in your terminal: ```$ npm start ```

## Future Development Notes
- First off I plan to implement a responsive design in place of the current one. I believe in this modern day that there's no longer an excuse for a website that isn't both mobile and desktop friendly.

- I'd like to replace the current single user system with some kind of authentication, perhaps OAuth.

- Finally, I'd like to replace the current square representing swatch locked status with a true lock icon to improve UI

## Dependencies

Palette Picker was built using: 
- [React](https://reactjs.org/)
- [Redux](https://react-redux.js.org/)
- [SCSS](https://sass-lang.com/)

And tested using:
- Front End: [Enzyme](https://airbnb.io/enzyme/) & [Jest](https://airbnb.io/enzyme/docs/guides/jest.html)
- Back End: [Supertest](https://github.com/visionmedia/supertest)

## Credits
Credit for this project goes to: 
- [Jake Admire](https://github.com/JakeAdmire)
- [Edgar Munoz](https://github.com/criteriamor)

---
This project was assigned by David Whitaker and Will Mitchell

*@ Turing School of Software & Design in Denver, CO.*

---
**[Back to top](https://github.com/JakeAdmire/JA--RottenPotatoes/blob/master/README.md#palette-picker)**
