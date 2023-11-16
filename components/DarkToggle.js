import { useEffect, useState } from "react";
import styled from "styled-components";
import { NavWrapperStyles } from "./nav/NavLink";
import NavButton from "./nav/NavButton";

export default function DarkToggle() {
  // The value of the theme variable starts off as undefined when site is generated on server.
  // Need to do this because cannot access window object on the server therefore cannot run code in getPreferredTheme.
  const [theme, setTheme] = useState(undefined);

  // useEffect only fires after the component has mounted, not when it's server-side rendered.
  // This solves for re-hydration issue, because the server rendered DOM will match what the React app runs on the client for the first time.
  // https://www.joshwcomeau.com/react/the-perils-of-rehydration/
  useEffect(() => {
    // Check to see the user's preferred theme and set the value of theme accordingly
    // Only need to do this to ensure the checkbox is in the right state
    // The colors will already be set based the CSS within the html tag and media query in globalstyles.
    setTheme(getPreferredTheme);

    // Listen for a change in OS or browser theme preference and setTheme if it changes.
    // If a user changes theme after site loads, the checkbox state will update.
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    mediaQuery.onchange = () => {
      setTheme(getPreferredTheme);
      disableAnimation();
    };
  }, []);

  // Function that gets called when the checkbox value changes and passes an event that's either checked or not checked
  // If the checkbox has changed to checked, update set and store the value of theme to dark; light if changed to unchecked.
  const toggleTheme = (e) => {
    setAndStoreTheme(e.target.checked ? "dark" : "light");
  };

  // Helper function that sets the value of theme and also saves the value to local storage.
  // This way local storage will only be used when checkbox is clicked, not when user changes OS or browser theme preference.
  // https://www.joshwcomeau.com/react/dark-mode/
  const setAndStoreTheme = (value) => {
    // Update the value of theme to the value that's passed in
    setTheme(value);

    // Saves the value of theme to local storage
    localStorage.setItem("theme", value);

    // Change the value of the data attribute "data-theme" on the html tag to be the value of the theme variable
    // This will cause CSS in global styles will be applied html[data-theme:"dark"] or html[data-theme:"light"]
    document.documentElement.setAttribute("data-theme", value);

    disableAnimation();
  };

  // For slow connection speeds, the checkbox will only display once the value of theme is known.
  // Prevents showing the checkbox in an incorrect state i.e. an unchecked checkbox that should actually be checked.
  // https://www.joshwcomeau.com/react/dark-mode/
  if (!theme) {
    return null;
  }

  return (

    // <NavButton onClick={toggleTheme} size="small">🌗</NavButton>
    <StyledLabel theme={theme}>
      <input
        type="checkbox"
        id="checkbox"
        // The checkbox will display as checked when the value of theme is "dark"
        checked={theme === "dark"}
        // Call the toggleTheme function when checked value changes
        onChange={toggleTheme}
      />
      🌗
    </StyledLabel>
  );
}

const StyledLabel = styled.label`
  ${NavWrapperStyles}
  /* background-color: var(--color-nav-background);
  border: 1px solid var(--color-nav-border);
  &:hover {
    background-color: var(--color-nav-background-hover);
  } */

  cursor: pointer;
  transition: background-color 200ms ease-in;
  & #checkbox {
    display: none;
  }

`;

// Function that returns a value for theme of either light or dark
function getPreferredTheme() {
  // Check if there is a theme value is stored in local storage
  const storedTheme = localStorage.getItem("theme");
  // If theme value is not null or undefined, return a string equal to either "dark" or "light"
  if (storedTheme) {
    // This ensures that on refresh or next visit, data-theme attribute will be applied rather than prefers-color-scheme media query in global styles
    document.documentElement.setAttribute("data-theme", storedTheme);
    // Return the stored theme: a string equal to either "dark" or "light"
    return storedTheme;
  }

  // Check if the user has a prefered color scheme of dark set at the browser level
  // perersDark will return either true or false
  const prefersDark =
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches;

  // If prefersDark is exists, return the a string equal to either "dark" or "light" depending on if prefersDark is true or not
  if (typeof prefersDark === "boolean") {
    return prefersDark ? "dark" : "light";
  }

  // Do not need a fallback value since it's already set based the css within the html tag in globalstyles.
  // // If user doesn't have preference on localStorage or at the browser level, then defualt to light
  // // return "light";
}

// Function that disables css animations when the theme changes (from https://github.com/pacocoursey/next-themes/blob/main/src/index.tsx)
const disableAnimation = () => {
  const css = document.createElement("style");
  css.appendChild(
    document.createTextNode(
      `*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}`
    )
  );
  document.head.appendChild(css);

  // Wait for next tick before removing
  setTimeout(() => {
    document.head.removeChild(css);
  }, 1);
};
