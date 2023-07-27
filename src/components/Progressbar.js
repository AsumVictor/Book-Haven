import PropTypes from 'prop-types';

const ProgressBar = ({ progress, classAddtion }) => (
  <div className={`relative  ${classAddtion}`}>
    <div className="w-24 h-24">
      <svg className="transform -rotate-90" viewBox="0 0 24 24">
        <circle
          className=" stroke-gray-200"
          cx="12"
          cy="12"
          r="10"
          fill="transparent"
          strokeWidth="2"
        />
        <circle
          className="stroke-_blue"
          cx="12"
          cy="12"
          r="10"
          fill="transparent"
          strokeWidth="2"
          strokeDasharray={`${progress} 63`}
        />
      </svg>
    </div>
  </div>
);

export default ProgressBar;

ProgressBar.propTypes = {
  progress: PropTypes.number,
  classAddtion: PropTypes.string.isRequired,
};

ProgressBar.defaultProps = {
  progress: 31,
};
