import { StyledSidebar } from '../styled/Sidebar';

const Sidebar = ({ filter, setFilter }) => {
  const allHandler = checkboxFilter => {
    let tempFilter = { ...filter };
    tempFilter[checkboxFilter] = !tempFilter[checkboxFilter];
    if (checkboxFilter === 'all') {
      tempFilter = Object.fromEntries(
        Object.keys(tempFilter).map(current => {
          return [current, tempFilter[checkboxFilter]];
        })
      );
    } else {
      if (Object.keys(tempFilter).some(key => tempFilter[key] === false)) {
        tempFilter['all'] = false;
      }
      if (
        Object.keys(tempFilter).every(key => {
          if (key === 'all') return true;
          return tempFilter[key] === true;
        })
      ) {
        tempFilter['all'] = true;
      }
    }
    setFilter({ ...tempFilter });
  };

  return (
    <StyledSidebar>
      <h4>Количество пересадок</h4>
      <label>
        <input
          className='checkbox'
          type='checkbox'
          onChange={() => allHandler('all')}
          checked={filter.all}
        />
        <span className='check-style' />
        <strong>Все</strong>
      </label>
      <label>
        <input
          className='checkbox'
          type='checkbox'
          onChange={() => allHandler('without')}
          checked={filter.without}
        />
        <span className='check-style' />
        <strong>Без пересадок</strong>
      </label>
      <label>
        <input
          className='checkbox'
          type='checkbox'
          onChange={() => allHandler('one')}
          checked={filter.one}
        />
        <span className='check-style' />
        <strong>1 пересадка</strong>
      </label>
      <label>
        <input
          className='checkbox'
          type='checkbox'
          onChange={() => allHandler('two')}
          checked={filter.two}
        />
        <span className='check-style' />
        <strong>2 пересадки</strong>
      </label>
      <label>
        <input
          className='checkbox'
          type='checkbox'
          onChange={() => allHandler('three')}
          checked={filter.three}
        />
        <span className='check-style' />
        <strong>3 пересадки</strong>
      </label>
    </StyledSidebar>
  );
};

export default Sidebar;
