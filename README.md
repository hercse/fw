# Frame Generator Documentation

## Overview
The Frame Generator is a JavaScript-based script that can help you create a dynamic web frame with customizable headers and footers. The generated frame features an embedded `header` at the top, including two components `src` and `menu`, and a `footer` at the bottom containing additional information.

## How to use
To use the Frame Generator, follow these steps:

1. Include the external CDN in the head of your HTML document:
```html
<script src="https://fw.herc.se/fw.js"></script>
```

2. Add the following JavaScript code right before the closing `</body>` tag in your HTML document:

```javascript
const fw = {
  name: "Comic Collocation",
  Info: "Additional footer info...",
  header: {
    src: ' * <input type="text" id="search-input" name="search-input" placeholder="Search..." />',
    menu: `<div id="toggle-mode-container">
      <input type="checkbox" id="toggle-mode-checkbox" />
      <label for="toggle-mode-checkbox">[三/㗊]</label>
    </div>
    <div id="select-all-container">
      <input type="checkbox" id="select-all-checkbox" />
      <label for="select-all-checkbox">[Collapse]</label>
    </div>`,
  },
};

// Call the function to generate and insert the HTML
generateFrame(fw);
```

Make sure to replace the values inside `fw` object according to your needs.


## Configuration

You can customize the frame by modifying the properties of the `fw` object:

- `name`: (Required) The main title of the frame.
- `Info`: (Optional) Additional information to be displayed in the footer.
- `header.src`: (Optional) Any HTML content to show on the left side of the header.
- `header.menu`: (Optional) Any HTML content to show on the right side of the header.

## Technical Details

The Frame Generator uses two functions, `generateFrame()` and `addStyles()`, to create the frame by generating and inserting the necessary HTML and CSS into the document.

### Function: generateFrame(frame)

This function accepts a single parameter, `frame`, which is an object containing the configuration data for the frame. It generates the header and footer HTML templates and inserts them into the page.

### Function: addStyles(css)

This function takes a single parameter, `css`. It creates a new `<style>` element within the document's head and appends the provided CSS styles.

The default styling for the frame is provided as a string. To add custom styles, simply modify the `styles` variable or include your own additional stylesheet in the HTML document.

## Example Usage

For example, if you want to create a frame with a different title, update the `name` property in the `fw` object:

```javascript
const fw = {
  name: "My Custom Frame",
  Info: "Additional footer info...",
  header: {
    src: ' * <input type="text" id="search-input" name="search-input" placeholder="Search..." />',
    menu: `<div id="toggle-mode-container">
      <input type="checkbox" id="toggle-mode-checkbox" />
      <label for="toggle-mode-checkbox">[三/㗊]</label>
    </div>
    <div id="select-all-container">
      <input type="checkbox" id="select-all-checkbox" />
      <label for="select-all-checkbox">[Collapse]</label>
    </div>`,
  },
};

// Call the function to generate and insert the HTML
generateFrame(fw);
```

This will generate a frame with the title "My Custom Frame" instead of "Comic Collocation".
