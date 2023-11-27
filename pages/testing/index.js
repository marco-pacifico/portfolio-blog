import React from "react";
import styled from "styled-components";
import Switch from "../../components/ui/Switch";
import Slider from "../../components/ui/Slider";
import GraphPaper from "../../components/ui/GraphPaper";

export default function Testing() {
  const [checked, setChecked] = React.useState(false);
  const handleChange = (event) => {
    setChecked(event.target.checked);
  };
  const [value, setValue] = React.useState(50);
  return (
    <Wrapper>
      <GraphPaper>
        <Controls>
          <Switch checked={checked} onChange={handleChange}>
            Switch is {checked ? "on" : "off"}
          </Switch>
          <Slider
            label="Slider"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
        </Controls>
      </GraphPaper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  padding: var(--space-8);
  height: 80vh;
`;

const Controls = styled.div`
  display: grid;
  place-content: center;
  gap: var(--space-8);
  height: 100%;
`;
