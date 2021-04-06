import React from 'react';
import { Info, Label } from './styles';

// eslint-disable-next-line import/prefer-default-export
export const DisplayInfoComponent = ({ name = '', value = '' }) => (
  <Info>
    <Label> {name} - </Label>
    <p> {value}</p>
  </Info>
);
