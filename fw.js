function generateFrame(frame) {
  // Header HTML template
  const headerTemplate = `
      <div class="header">
        <div class="src">
          <span><a href="http://herc.se/">[herc.se]</a> / </span>${frame.name}
          / ${frame.header.src}
        </div>
        <div class="tool">
          ${frame.header.menu}
        </div>
      </div>`;

  // Footer HTML template
  const footerTemplate = `
      <div class="footer">
        <div class="display">
          <div class="info">
            <label for="">[!] <input type="checkbox" name="" id="" /></label>
          </div>
          <div class="copyright">
            Copyright © ${new Date().getFullYear()} Hercse. All rights reserved.
          </div>
        </div>
        <div class="about">
          ${frame.Info}
        </div>
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
const styles = `
.header{z-index:10;position:fixed;top:0;left:0;padding:calc(var(--dot)*1);font-weight:normal;background-color:#000;width:100%;display:grid;grid-template-columns:repeat(4, 1fr)}.header span{opacity:.3}.header .src{grid-column-end:span 3}.header .tool{text-align:right}.header .tool>div{display:inline-block}.footer{z-index:10;position:fixed;bottom:0;left:0;padding:calc(var(--dot)*1);font-weight:normal;background-color:#000;width:100%;transition:transform 1s}.footer:has(input:checked){border-top:1px solid #fff}.footer:has(input:checked) .about{display:block}.footer .about{margin-top:calc(var(--dot)*10);max-height:50vh;overflow-y:scroll;display:none;max-width:calc(var(--dot)*100)}.footer .about>*{margin-top:calc(var(--dot)*1);margin-bottom:0}.footer .display{display:grid;grid-template-columns:repeat(2, 1fr)}.footer .display .info{position:relative}.footer .display .info input{left:0;top:0;height:100%;width:100%}.footer .display .copyright{text-align:right}/*# sourceMappingURL=frame.min.css.map */
`;

addStyles(styles);
