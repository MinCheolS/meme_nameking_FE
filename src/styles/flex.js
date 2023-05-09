import { css } from "styled-components";

const flex = ({ jusify = "center", align = "center", direction = "row", content = "center" }) => {
  return css`
    display: flex;
    align-items: ${align};
    justify-content: ${jusify};
    flex-direction: ${direction};
    align-content: ${content};
  `;
};

export default flex;
