const Animate = ({ type, types, children }) => {
  let className = 'animate__animated ';
  if (type) {
    className = className.concat(`animate__${type}`);
  } else if (types) {
    className = className.concat(
      types.map((type) => `animate__${type}`).join(' ')
    );
  }
  return <div className={className}>{children}</div>;
};

export default Animate;
