import styled from 'styled-components';
import img from '../../assets/planets/2.jpg';

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

  li {
    width: 350px;
    display: flex;
    flex-direction: column;
    align-items: center;
    span {
      margin-top: 10px;
    }
  }
`;

export const Planet = styled.div`
  border: 1px solid #fff;
  width: 100%;
  height: 200px;

  background: ${(props) => (props.img ? `url(${props.img})` : `url(${img})`)};
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;
