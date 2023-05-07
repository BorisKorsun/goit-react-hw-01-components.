import PropTypes from 'prop-types';

const Statistics = ({title, stats}) => {
    return (
<section className="statistics">
  {title && <h2 className="title">{title}</h2>}

  <ul className="stat-list">
  {parseData(stats)}
  </ul>
</section>
    )
};

const parseData = (stats) => {
  return stats.map(({ id, label, percentage}) => {
    return (
    <li key={id} className="item">
      <span className="label">{label}</span>
      <span className="percentage">{percentage}%</span>
    </li>
    )
  })
};

export default Statistics;

Statistics.propType = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  )
}