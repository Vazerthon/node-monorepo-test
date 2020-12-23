import PropTypes from 'prop-types';

export default function Currency({ value }) {
  return Intl.NumberFormat('en-GB', {
    style: 'currency',
    currency: 'GBP',
  }).format(value);
}

Currency.propTypes = {
  value: PropTypes.number.isRequired,
};

