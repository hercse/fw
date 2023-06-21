# Detailed English Documentation of the `fw` Framework

This documentation covers how to use, set up and understand the technical details of the `fw` framework. It is designed to provide a clear and thorough understanding of the framework's functionality.

## Setup

To utilize the `fw` framework, include the external CDN link in your HTML file:

```html
<script src="https://fw.herc.se/fw.js"></script>
```

## Usage

The `fw` framework can be configured with an object called `const fw`. This object contains properties that determine the appearance and behavior of components like header and footer. Here's an example of how to call and configure the `fw` framework:

```javascript
const fw = {
  name: "Comic Collocation",
  Info: `...`,
  header: {
    src: ` * <input
    type="text"
    id="search-input"
    name="search-input"
    placeholder="Search..."
  />`,
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

### Explanation of Example Code

1. `const fw`: Define a constant object named `fw` containing properties that configure the framework.
2. `name`: Set the name of the application or website. This will be displayed in the header.
3. `Info`: Set the content that appears in the footer when the `[!]` icon is clicked.
4. `header`: Contains properties to configure the header components.
   - `src`: Set the left content of the header. In this example, it contains an input element for searching.
   - `menu`: Set the right-aligned text appearing in the header's top-right corner. This example includes a mode toggle and collapse feature.
5. `generateFrame(fw)`: Call the function with the configured `fw` object to generate and insert the HTML into the document.

## Properties

The following table displays the property types for the `fw` object:

| Property | Type    | Description                                               |
|----------|---------|-----------------------------------------------------------|
| name     | String  | Name of the application or website; appears in the header |
| Info     | String  | Content displayed in the footer when `[!]` icon is clicked |
| header   | Object  | Configures header components                               |
| src      | String  | Left content of the header                                 |
| menu     | String  | Right-aligned text appearing in the header's top-right corner |

## Execution Cycle

When using the `fw` framework, ensure that it is loaded before any other JavaScript relying on components within the framework. This ensures that objects defined within the `fw` framework are accessible by other scripts. Simply include the `<script src="https://fw.herc.se/fw.js"></script>` tag before other script tags.

## Technical Details

Here's a breakdown of the framework's source code:

```javascript
function generateFrame(frame) {
  // Header HTML template
  const headerTemplate = `
      <div class="header">
        ...
      </div>`;

  // Footer HTML template
  const footerTemplate = `
      <div class="footer">
        ...
      </div>`;

  // Insert the generated HTML into the page
  document.body.innerHTML += headerTemplate + footerTemplate;
}

function addStyles(css) {
  const style = document.createElement("style");
  style.type = "text/css";
  style.appendChild(document.createTextNode(css));
  document.head.appendChild(style);
}
const styles = `...`;

addStyles(styles);
```

1. `generateFrame(frame)`: This function generates the HTML for the header and footer based on the given configuration object (`frame`). It inserts the generated HTML into the document's body.
2. `addStyles(css)`: This function adds the specified CSS to the document by creating a `<style>` element and appending it to the document head.
3. `styles`: This constant contains the necessary CSS for styling framework components.
4. `addStyles(styles)`: Call the `addStyles` function with the defined CSS to apply the styles to the framework components.

The provided example demonstrates how to configure and use the `fw` framework, making it easy to create custom header and footer elements tailored to your application or website.
