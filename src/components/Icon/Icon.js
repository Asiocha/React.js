import React from 'react';
import PropTypes from 'prop-types';

Icon.propTypes = {
  name: PropTypes.node.isReguired,
};
const Icon = props => (<i className={`fas fa-${props.name}`}></i>);

export default Icon;
