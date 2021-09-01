import React from 'react';
import convert from 'convert-units';
import {EXCLUDED_UNITS} from '../../constants';
import UnitSelect from './unitSelect';
import {useSelector} from 'react-redux';

const BASE_PEOPLE = 2;

export function roundToPrecision(value, precision = 3) {
  return Number.parseFloat(Number.parseFloat(value).toPrecision(precision)) || '';
}

export function fractions(value) {
  const roundedValue = roundToPrecision(value, 2);
  switch (roundedValue) {
    case 0.25:
      return '1/4';
    case 0.33:
      return '1/3';
    case 0.5:
      return '1/2';
    default:
      return value;
  }
}

const Amount = ({measurement}) => {
  const system = useSelector((state) => state.system.value);
  const people = useSelector((state) => state.people.value);

  const _unit = () => {
    return measurement.unit?.abbr;
  };

  const knownUnit = () => {
    try {
      return !!convert().describe(_unit());
    } catch {
      return false;
    }
  };

  const handleConversion = (system) => {
    return convert(peopleAdjustedAmount()).from(_unit()).toBest({system, exclude: EXCLUDED_UNITS});
  };

  const unitPluralise = () => {
    if (peopleAdjustedAmount() === 1) {
      return measurement.unit?.singular;
    } else {
      return measurement.unit?.plural;
    }
  };

  const peopleAdjustedAmount = () => {
    if (measurement.unit?.relative) {
      return measurement.amount;
    }
    const amount = (measurement.amount / BASE_PEOPLE) * people;
    return amount || '';
  };

  return (
    <span>
      {knownUnit() && <UnitSelect {...handleConversion(system)} id={measurement.id} />}
      {!knownUnit() && (
        <React.Fragment>
          {fractions(roundToPrecision(peopleAdjustedAmount(), 3))} {unitPluralise()}
        </React.Fragment>
      )}
    </span>
  );
};

export default Amount;
