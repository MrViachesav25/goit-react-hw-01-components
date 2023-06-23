import PropTypes from 'prop-types';
import { Container, StatTitle, StatList, StatItem, StatLabel, StatPercentage, StatContainer } from './Statistics.styled'

export const Statistics = ({title, stats}) => {
    return (
        <Container>
            {title && <StatTitle>{title}</StatTitle>}
            <StatList>
                {stats.map(item => (
                    <StatItem key = {item.id}>
                           <StatContainer>
                                <StatLabel>{item.label}</StatLabel>
                                <StatPercentage>{item.percentage}%</StatPercentage>
                           </StatContainer>
                    </StatItem>)
                )}
            </StatList>
        </Container>
    )
};
Statistics.propTypes = {
    title: PropTypes.string.isRequired,
    stats: PropTypes.arrayOf(
      PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })).isRequired,
  };
