import './select-menu.styles.scss';

function SelectMenu() {
  return (
    <div className="select__item-menu active">
      <div className="item-wrap">
        <div className="item__list">
          <div className="item__checkbox-mark" />
          <label htmlFor="size-xs">
            XS
            <input id="size-xs" type="checkbox" />
          </label>
        </div>
        <div className="item__list">
          <div className="item__checkbox-mark" />
          <label htmlFor="size-s">
            S
            <input id="size-s" type="checkbox" />
          </label>
        </div>
        <div className="item__list">
          <div className="item__checkbox-mark" />
          <label htmlFor="size-m">
            M
            <input id="size-m" type="checkbox" />
          </label>
        </div>
        <div className="item__list">
          <div className="item__checkbox-mark" />
          <label htmlFor="size-l">
            L
            <input id="size-l" type="checkbox" />
          </label>
        </div>
      </div>
    </div>
  );
}

export default SelectMenu;
