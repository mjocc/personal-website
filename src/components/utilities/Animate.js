const Animate = ({ type, types, children }) => (
    let className = 'animate__animated ';
    if (animationType) {
        className = className.concat(`animate__${animationType}`);
    } else if (animationTypes) {
        className = className.concat(animationTypes.map((type) => `animate__${type}`).join(' '));
    }
    return (<div className={className}>{children}</div>);
)

export default Animate;