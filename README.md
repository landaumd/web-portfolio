# Configuration

## Content

To use `redux-cra/src/config/PhillContent.json` contents, search and replace all instances of `MeganContent`. 
There should only be 6 instances of `MeganContent` in the following files:
- Grid.js
- Navigation.js
- RightFocus.js

## Images Folder

### Phill
`redux-cra/src/config/Config.json` file setup:
```
{
     "logo" : "logo-phill.svg",
     "path-to-images-folder" : "images-phill/"
}
   ```
   
### Megan

`redux-cra/src/config/Config.json` file setup:
```
{
     "logo" : "logo-phill.svg",
     "path-to-images-folder" : "images-megan/"
}
   ```
   
### TODO List:
- Refactor MeganContent so that we don't have to manually change it back and forth -- will cause merge conflicts eventually.
- Add more content!
- Config the CSS and Fonts so our websites are not the same