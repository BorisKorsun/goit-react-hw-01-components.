import PropTypes from 'prop-types';
import { StatBox, StatTitle, StatList, StatItem, ItemLabel, Itempercantage } from './Statistics.styled';

const Statistics = ({title, stats}) => {
    return (
<StatBox>
  {title && <StatTitle>{title}</StatTitle>}

  <StatList>
  {parseData(stats)}
  </StatList>
</StatBox>
    )
};

const parseData = (stats) => {
  return stats.map(({ id, label, percentage}) => {
    return (
    <StatItem key={id}>
      <ItemLabel>{label}</ItemLabel>
      <Itempercantage>{percentage}%</Itempercantage>
    </StatItem>
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