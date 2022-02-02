import PropTypes from 'prop-types';
import logo from '../../assets/arrow_down.svg';
import './select-item.styles.scss';
import SelectMenu from '../select-menu/select-menu.component';

function SelectItem({ name }) {
  return (
    <div className="select__item">
      <span>{name}</span>
      {name === 'SIZE' && <SelectMenu />}
      <div
        className="select__logo"
        style={{ backgroundImage: `url(${logo})` }}
      />
    </div>
  );
}

SelectItem.defaultProps = {
  name: '',
};

SelectItem.propTypes = {
  name: PropTypes.string,
};

export default SelectItem;
