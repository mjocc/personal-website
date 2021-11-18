const colorMapping = {
  blue: {
    DEFAULT: 'bg-blue-700',
    clicked: 'hover:bg-blue-800',
  },
};

export default function Button(props) {
  const { children, color, className = '', ...otherProps } = props;
  let mappedColor = colorMapping[color]; // mappedColor
  if (mappedColor == null) {
    mappedColor = colorMapping.blue;
  }
  return (
    <button
      className={`px-3 py-1.5 text-white disabled:opacity-50 ${mappedColor.DEFAULT} ${mappedColor.clicked} border border-transparent rounded active:ring ${className}`}
      {...otherProps}
    >
      {children}
    </button>
  );
}
