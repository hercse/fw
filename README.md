# fw
Frame Work Base, Tools for harming a unified web framework.

The `generateFrame` function is used to create a customizable header and footer for a web page. It can be easily called and configured with the desired content. In order to use this, you will first need to include the `fw.js` script in your HTML file:

```html
<script src="fw.js"></script>
```

## Usage

To call the `generateFrame` function, you need to create an object containing the necessary information and pass it as a parameter. Here's an example of how to define the object:

```javascript
const fw = {
    name: "Comic Collocation",
    Info: `...`,
    header: {
        src: ` * <input type="text" id="search-input" name="search-input" placeholder="Search..." />`,
        menu: `<div id="toggle-mode-container">
            <input type="checkbox" id="toggle-mode-checkbox" />
            <label for="toggle-mode-checkbox">[三/㗊]</label>
          </div>
          <div id="select-all-container">
            <input type="checkbox" id="select-all-checkbox" />
            <label for="select-all-checkbox">[Collapse]</label>
          </div>`
    }
};
```

After defining the `fw` object, call the `generateFrame` function like this:

```javascript
generateFrame(fw);
```

## Configuration

The `fw` object consists of several properties that control the appearance of the header and footer:

- **name**: The title of the web page. Appears in the header's left section.
- **Info**: The content of the footer. This can be any valid HTML content.
- **header**: An object containing two properties:
  - **src**: HTML content that will appear on the left side of the header, after the path and title.
  - **menu**: HTML content that will appear on the right side of the header, aligned to the right.

All properties, except for the `name`, can include any valid HTML content to be embedded in the respective sections of the header and footer.
