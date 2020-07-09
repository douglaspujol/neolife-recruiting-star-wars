import styled from 'styled-components';

export const Container = styled.main`
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const GridCards = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 50px;
`;
