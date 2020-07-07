import React from 'react';
import PropTypes from 'prop-types';

import { Form } from 'antd';
import { validationError } from './helpers';
import { childrenPropTypes } from '@data-driven-forms/common/src/prop-types-templates';

const AntForm = ({ label, children, isRequired, FormItemProps, meta, validateOnMount, helperText, description, hideLabel }) => {
  const invalid = validationError(meta, validateOnMount);
  const help = invalid || helperText || description;

  return (
    <Form.Item validateStatus={!invalid ? '' : 'error'} help={help} label={!hideLabel && label} name={label} required={isRequired} {...FormItemProps}>
      <div>{children}</div>
    </Form.Item>
  );
};

AntForm.propTypes = {
  label: PropTypes.string,
  children: childrenPropTypes,
  help: PropTypes.string,
  isRequired: PropTypes.bool,
  invalid: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  FormItemProps: PropTypes.object,
  meta: PropTypes.object,
  validateOnMount: PropTypes.bool,
  helperText: PropTypes.node,
  description: PropTypes.node,
  hideLabel: PropTypes.bool
};

export default AntForm;
