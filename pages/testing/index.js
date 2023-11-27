import React from "react";
import styled from "styled-components";
import Switch from "../../components/ui/Switch";
import Slider from "../../components/ui/Slider";

export default function Testing() {
  const [checked, setChecked] = React.useState(false);
  const handleChange = (event) => {
    setChecked(event.target.checked);
  };
  const [value, setValue] = React.useState(50);
  return (
    <Wrapper>
      <Switch checked={checked} onChange={handleChange}>
        Switch is {checked ? "on" : "off"}
      </Switch>
      <Slider
        label="Slider"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: grid;
  place-content: center;
  height: 80vh;
  gap: var(--space-8);
`;
