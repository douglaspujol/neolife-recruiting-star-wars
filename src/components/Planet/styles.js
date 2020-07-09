import styled from 'styled-components';
import img from '../../assets/planets/2.jpg';

export const Container = styled.div`
  a {
    display: flex;
    flex-direction: column;
    align-items: center;
    color: inherit;
  }

  span {
    margin-top: 10px;
  }
`;
export const Image = styled.div`
  border: 1px solid #fff;
  width: 350px;
  height: 200px;

  background: ${(props) => (props.img ? `url(${props.img})` : `url(${img})`)};
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;
