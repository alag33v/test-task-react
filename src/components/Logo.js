import logo from '../assets/images/logo.PNG';
import { StyledLogo } from '../styled/Logo';

const Logo = () => {
  return (
    <StyledLogo>
      <img src={logo} alt='logo' />
    </StyledLogo>
  );
};

export default Logo;
