<img src="img/logo_full.png?raw=true" width="400">

## What is Roam Mosaic?

A framework for developing all of your Roam Research CSS themes and UX enhancements with ease using modern development tools.

### Features

- Development tooling with live reload
- Modular SCSS scaffolding for styling Roam components
- A modular framework for creating CSS UX enhancements
- Best practise suggestions for theme creation

## Getting Started

- Install [Node.js](https://nodejs.org/) and [Yarn](https://classic.yarnpkg.com/en/docs/install/) if you haven't already.

- Setup [Chrome DevTools Local Override](https://developers.google.com/web/updates/2018/01/devtools#overrides)

  Click "Select folder for overrides" and point to the `roam-nexus\dev\` folder

  ![Screenshot of code tab](/screenshots/1_roam_nexus_chrome_overrides.png?raw=true)

  Click "Allow" on the popup in Chrome

  ![Screenshot of issues tab](/screenshots/2_roam_nexus_chrome_overrides_allow.png?raw=true)

  Your override should now look like this

  ![Screenshot issue page](/screenshots/3_roam_nexus_chrome_overrides_folder_linked.png?raw=true)

  If the `\roamresearch.com\assets\css` folder structure does not exist in your `dev` folder you can configure it by selecting "Save for overrides" on the site.css

  ![Screenshot of organization page](/screenshots/4_roam_nexus_chrome_overrides_folder_not_linked.png?raw=true)

- Clone this repository
- Run `cd roam-mosaic` to navigate into your cloned repository
- Run `yarn` to install all dependencies
- Run `yarn watch` to build automatically when source files change.
- You are now ready to start building your own theme!

## How do I use Roam Mosaic?

### Folder Structure

Below is an overview of the important folders in this project you will need to build your own theme.

```js
├── build                       // built themes and features will be output here
├── dev                         // chrome devtools override location
├── scss                        // all scss goes here
│   ├── global                  // global styling that can apply to all themes
│   │   ├── features            // non theme specific UX improvements
│   │   │   ├── ...
│   │   │   ├── right-sidebar   // UI Area used for grouping features together
│   │   │   │   ├── masonry     // all styles required for this feature
│   │   │   │   └── ...
│   │   │   └── ...
│   │   ├── _mixins.scss        // useful mixins that can be used accross all themes
│   │   ├── _reset.scss         // global reset css for all themes
│   │   └── _variables.scss     // global variabls for all themes
│   ├── themes                  // folder containing all themes
│   │   ├── railscast           // a theme by Jeff Harris (https://github.com/jmharris903)
│   │   └── template            // a template to use as a base for new themes
│   │       ├── components      // scss files for UI components
│   │       ├── core            // scss files for core UI areas
│   │       ├── pages           // scss files for pages
│   │       ├── _icons.scss     // scss for icons (not implemented)
│   │       ├── _mixins.scss    // mixins created specifically for this theme (imports global/mixins)
│   │       ├── _reset.scss     // reset css for this theme only (imports global/reset)
│   │       ├── _resources.scss // resource variables (not implemented)
│   │       ├── _variables.scss // variable overrides for this theme
│   │       └── main.scss       // main entry point for this theme and `yarn build`
│   ├── dev.scss                // entry point for development css `yarn dev`
│   └── roam.css                // latest css from Roam Research needed for override
└── updates                     // Roam Research css and scss used for change tracking
```

### Creating your own theme

The easiest way to create your own theme is to make a copy of the `template` folder and rename it.

Assuming you're in the root directory of `roam-mosaic` you can run the follwing command to do this:

```bash
cp -R scss/themes/template scss/themes/my-new-theme
```

You're now ready to start customizing your theme!

> We recommend starting with changing some variables in `scss/themes/my-new-theme/_variables.scss`.

You can [follow these steps](#getting-started) to get live reload up and running. Renember to [open Chrome DevTools](#i-have-yarn-watch-running-but-live-reload-isnt-working) for live reload to work.

## Troubleshooting

### Live reload isn't working

Make sure you have `yarn watch` running in your console

### I have `yarn watch` running but live reload isn't working

You need to have Chrome Dev Tools (`F12` on Windows and `cmd+opt+i` on Mac) open for the file override to work.

### My screen is flashing!

You might have an `@import url()` somewhere in your code. This is currently not supported.
If you want to import something from a url, like fonts for example, [we recommend using `roam/css` for this](https://youtu.be/UY-sAC2eGyI).

## Thanks

[WinHub-98](https://github.com/3lo1i/WinHub-98) for the base framework

### Contributors

- [Palash Karia](https://github.com/palashkaria)
- [Jeff Harris](https://github.com/jmharris903)
