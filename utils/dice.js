import { Alert } from 'react-native';

export default {
  roll: (numberOfDice, numberOfSides, modifier, description) => {
    const result = {
      roll: `${numberOfDice}D${numberOfSides}`,
      description,
      modifier,
      results: [],
      total: 0,
    };

    if (modifier) {
      result.roll += `${modifier > 0 ? '+' : ''}${modifier}`;
    } else {
      result.modifier = 0;
    }

    for (let i = 0; i < numberOfDice; i += 1) {
      const rollResult = Math.floor(Math.random() * numberOfSides) + 1;
      result.results.push(rollResult + result.modifier);
      result.total += rollResult + result.modifier;
    }
    return result;
  },

  alert: (rollResult) => {
    const header = rollResult.description || `Rolled ${rollResult.roll}`;

    let body = `Results: ${rollResult.results}`;
    if (rollResult.description) {
      body = `Rolled ${rollResult.roll}\n${body}`;
    }
    if (rollResult.results.length > 1) {
      body += `\nTotal: ${rollResult.total}`;
    }

    Alert.alert(header, body);
  },
};
