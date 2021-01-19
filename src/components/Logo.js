import logo from '../assets/images/logo.PNG';
import styled from 'styled-components';

const Logo = () => {
  return (
    <StyledLogo>
      <img src={logo} alt='logo' />
    </StyledLogo>
  );
};

const StyledLogo = styled.div`
  text-align: center;
  img {
    display: inline-block;
    margin: 30px auto;
    cursor: pointer;
  }
`;

export default Logo;
