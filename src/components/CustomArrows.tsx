const PrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div className={className} style={{ ...style, display: 'block', background: 'grey' }} onClick={onClick}>
      Previous
    </div>
  );
};

const NextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div className={className} style={{ ...style, display: 'block', background: 'grey' }} onClick={onClick}>
      Next
    </div>
  );
};

export { PrevArrow, NextArrow };
