import React from "react";
import styled from "styled-components";
import tinycolor from "tinycolor2";

const StyledColourBlock = styled.div`
  height: 100%;
  flex: auto;
  display: flex;
  padding: 20px;
  justify-content: center;
  align-items: flex-end;
  font-weight: bold;
  text-transform: uppercase;
  ${(props) => `
    background: ${props.colour};
    colour: ${
      props.isDark
        ? tinycolor(props.colour).lighten(25)
        : tinycolor(props.colour).darken(25)
    };
  `};
`;

class ColourBlock extends React.PureComponent {
  render() {
    const { colour } = this.props;
    const isDark = tinycolor(colour).isDark();

    return (
      <StyledColourBlock colour={colour} isDark={isDark} onClick={()=>{console.log('click')}}>
        <h3>{colour}</h3>
      </StyledColourBlock>
    );
  }
}

export default ColourBlock;
