export function DarkScriptTag() {
    let codeToRunOnClient = `
    (function() {
        // Check if there is a theme value is stored in local storage
        const storedTheme = localStorage.getItem("theme");
        // If theme value is not null or undefined, return a string equal to either "dark" or "light"
        if (storedTheme) {
            // This ensures that on refresh or next visit, data-theme attribute will be applied rather than prefers-color-scheme media query in global styles
            document.documentElement.setAttribute("data-theme",storedTheme);
            // Return the stored theme: a string equal to either "dark" or "light"
            return storedTheme;
        }
    
        // Check if the user has a prefered color scheme of dark set at the browser level
        // perersDark will return either true or false
        const prefersDark = 
            window.matchMedia &&
            window.matchMedia("(prefers-color-scheme: dark)").matches;
    
        // If prefersDark is exists, return the a string equal to either "dark" or "light" depending on if prefersDark is true or not
        if (typeof prefersDark === 'boolean') {
            return prefersDark ? "dark" : "light";
        }
    })()
      `;
    // eslint-disable-next-line react/no-danger
    return <script dangerouslySetInnerHTML={{ __html: codeToRunOnClient }} />;
  };
  