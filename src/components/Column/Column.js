import style from './Column.module.scss';

const Column = props => {
  return (
    <article className={style.column}>
      <h3 className={style.title}>
        <span className={style.icon + ' fa fa-' + props.icon}></span>+
        {props.title}
      </h3>
    </article>
  );
};

export default Column;