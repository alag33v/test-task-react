import check from '../assets/images/check.svg';
import styled from 'styled-components';

const Sidebar = () => {
  return (
    <StyledSidebar>
      <h4>Количество пересадок</h4>
      <label>
        <input className='checkbox' type='checkbox' />
        <span className='check-style'></span>
        <strong>Все</strong>
      </label>
      <label>
        <input className='checkbox' type='checkbox' />
        <span className='check-style'></span>
        <strong>Без пересадок</strong>
      </label>
      <label>
        <input className='checkbox' type='checkbox' />
        <span className='check-style'></span>
        <strong>1 пересадка</strong>
      </label>
      <label>
        <input className='checkbox' type='checkbox' />
        <span className='check-style'></span>
        <strong>2 пересадки</strong>
      </label>
      <label>
        <input className='checkbox' type='checkbox' />
        <span className='check-style'></span>
        <strong>3 пересадки</strong>
      </label>
    </StyledSidebar>
  );
};

const StyledSidebar = styled.div`
  width: 25%;
  padding: 15px;
  border: 1px solid rgba(0, 0, 0, 0.125);
  border-radius: 0.25rem;
  max-height: 335px;
  h4 {
    font-size: 18px;
    margin: 10px 0 22px;
  }
  label {
    display: block;
    margin-bottom: 22px;
    padding-left: 35px;
    cursor: pointer;
  }
  strong {
    font-weight: 400;
  }
  .checkbox {
    position: absolute;
    width: 1px;
    height: 1px;
    overflow: hidden;
    clip: rect(0 0 0 0);
    padding-left: 20px;
  }
  .check-style {
    width: 22px;
    height: 22px;
    border: 1px solid #bcd2de;
    border-radius: 2px;
    position: absolute;
    margin-left: -35px;
  }
  .checkbox:checked + .check-style {
    border: 1px solid #39a1f4;
  }
  .checkbox:checked + .check-style::before {
    content: '';
    width: 14px;
    height: 14px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: url(${check});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    position: absolute;
  }
  @media (max-width: 767px) {
    width: 100%;
    margin-bottom: 20px;
  }
  @media (max-width: 600px) {
    width: 95%;
    max-width: 100%;
    margin: 0 auto 20px;
  }
`;

export default Sidebar;
