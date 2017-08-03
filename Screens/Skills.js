import React from 'react';
import { ScrollView } from 'react-native';
import BaseStyleSheet from '../Styles/Base';

import SkillRow from '../Components/SkillRow';

export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Ivan',
      acr: { text: 'Acrobatics', mod: -1, typ: '(DEX)' },
      ani: { text: 'Animal Handling', mod: -1, typ: '(WIS)' },
      arc: { text: 'Arcana', mod: -1, typ: '(INT)' },
      ath: { text: 'Athletics', mod: -1, typ: '(DEX)' },
      dec: { text: 'Deception', mod: -1, typ: '(CHA)' },
      his: { text: 'History', mod: -1, typ: '(INT)' },
      ins: { text: 'Insight', mod: -1, typ: '(WIS)' },
      int: { text: 'Intimidation', mod: -1, typ: '(CHA)' },
      inv: { text: 'Investigation', mod: -1, typ: '(INT)' },
      med: { text: 'Medicine', mod: -1, typ: '(WIS)' },
      nat: { text: 'Nature', mod: -1, typ: '(WIS)' },
      per: { text: 'Perception', mod: -1, typ: '(WIS)' },
      prf: { text: 'Performance', mod: -1, typ: '(WIS)' },
      prs: { text: 'Persuasion', mod: -1, typ: '(WIS)' },
      rel: { text: 'Religion', mod: -1, typ: '(WIS)' },
      sle: { text: 'Sleight of Hand', mod: -1, typ: '(WIS)' },
      ste: { text: 'Stealth', mod: -1, typ: '(WIS)' },
      sur: { text: 'Survivial', mod: -1, typ: '(WIS)' },
    };
  }

  render() {
    // this is unused due to breaking android
    // const { navigate } = this.props.navigation;
    return (
      <ScrollView style={BaseStyleSheet.card2}>
        <SkillRow skill={this.state.acr} />
        <SkillRow skill={this.state.ani} />
        <SkillRow skill={this.state.arc} />
        <SkillRow skill={this.state.ath} />
        <SkillRow skill={this.state.dec} />
        <SkillRow skill={this.state.his} />
        <SkillRow skill={this.state.ins} />
        <SkillRow skill={this.state.int} />
        <SkillRow skill={this.state.inv} />
        <SkillRow skill={this.state.med} />
        <SkillRow skill={this.state.nat} />
        <SkillRow skill={this.state.per} />
        <SkillRow skill={this.state.prf} />
        <SkillRow skill={this.state.prs} />
        <SkillRow skill={this.state.rel} />
        <SkillRow skill={this.state.sle} />
        <SkillRow skill={this.state.ste} />
        <SkillRow skill={this.state.sur} />
      </ScrollView>
    );
  }
}

