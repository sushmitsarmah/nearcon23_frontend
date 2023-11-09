'use client';
import GridLayout from "react-grid-layout";
import styled from "styled-components";

const layout = [
  { i: "blue-eyes-dragon", x: 0, y: 0, w: 1, h: 1 },
  { i: "dark-magician", x: 1, y: 0, w: 1, h: 1 },
  { i: "kuriboh", x: 0, y: 1, w: 1, h: 1 },
  { i: "spell-caster", x: 1, y: 1, w: 1, h: 1 },
  // { i: "summoned-skull", x: 4, y: 0, w: 1, h: 1 }
];

const GridItemWrapper = styled.div`
  background: #f5f5f5;
`;

const GridItemContent = styled.div`
  padding: 8px;
`;

const Root = styled.div`
  padding: 16px;
`;

const GridComponent = () => {
  return (
    <Root>
      <GridLayout isDraggable={false} layout={layout} cols={2} width={500} style={{ border: '1px solid black', width: '500px'}}>
        <GridItemWrapper key="blue-eyes-dragon">
          <GridItemContent>Blue Eyes Dragon</GridItemContent>
        </GridItemWrapper>
        <GridItemWrapper key="dark-magician">
          <GridItemContent>Dark Magician</GridItemContent>
        </GridItemWrapper>
        <GridItemWrapper key="kuriboh">
          <GridItemContent>Kuriboh</GridItemContent>
        </GridItemWrapper>
        <GridItemWrapper key="spell-caster">
          <GridItemContent>Spell Caster</GridItemContent>
        </GridItemWrapper>
        {/* <GridItemWrapper key="summoned-skull">
          <GridItemContent>Summoned Skull</GridItemContent>
        </GridItemWrapper> */}
      </GridLayout>
    </Root>
  );
};

export default GridComponent;
