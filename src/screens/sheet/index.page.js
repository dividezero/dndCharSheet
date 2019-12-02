import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Pane, Spinner } from 'evergreen-ui';
import './style.css';

import AbilityScoreCard from '../../components/AbilityScoreCard';
import HealthCard from '../../components/HealthCard';
import StatCard from '../../components/StatCard';
import SavingThrowsPane from '../../components/SavingThrowsPane';
import Profile from '../../components/Profile';
import skills from '../../stubs/skills';
import SkillProficienciesPane from '../../components/SkillProficienciesPane';
import ProficienciesPane from '../../components/ProficienciesPane';
import { calculateInitiative, formatModifier } from '../../utils';

import testCharacter from '../../stubs/test-character';

class Sheet extends Component {
  constructor(props) {
    super(props);
    const { loadCharacter } = props;
    this.state = {};

    loadCharacter(testCharacter);
  }

  render() {
    const { character } = this.props;
    const {
      name,
      race,
      classes,
      health: { current, max, temp },
      abilityScore,
    } = character;

    return (
      <div
        className="root-container"
        style={{
          backgroundImage:
            'url(https://background-tiles.com/overview/blue/patterns/large/1063.png)',
          backgroundRepeat: 'repeat',
          backgroundAttachment: 'fixed',
        }}
      >
        {name ? (
          <div className="main-container">
            <div className="header-container">
              <Profile name={name} race={race} classes={classes} />
              <StatCard
                value={calculateInitiative(abilityScore.dex.value)}
                bottomText="Initiative"
              />
            </div>
            <div className="primary-container">
              <div>
                <HealthCard
                  current={current}
                  max={max}
                  temp={temp}
                  onDamage={() => {}}
                  onHeal={() => {}}
                />
                <StatCard value="55ft" bottomText=" Movement speed" />
                <StatCard value="+4" bottomText="Proficiency bonus" />
                <StatCard value="+1" bottomText="Initiative" />
              </div>
              <div className="primary-container__ability-score">
                <div>
                  {['str', 'dex', 'con'].map(score => (
                    <AbilityScoreCard
                      name={abilityScore[score].name}
                      value={abilityScore[score].value}
                    />
                  ))}
                </div>
                <div>
                  {['int', 'wis', 'cha'].map(score => (
                    <AbilityScoreCard
                      name={abilityScore[score].name}
                      value={abilityScore[score].value}
                    />
                  ))}
                </div>
              </div>
            </div>

            <div className="secondary-container">
              <div>
                <SkillProficienciesPane skills={skills} />
              </div>
              <div className="secondary-container__left-pane">
                <SavingThrowsPane
                  savingThrows={{
                    Strength: {
                      proficiency: 'expertise',
                      value: '+7',
                    },
                    Dexterity: {
                      proficiency: 'proficient',
                      value: '+5',
                    },
                    Constitution: {
                      proficiency: 'not',
                      value: '+2',
                    },
                    Intelligence: {
                      proficiency: 'not',
                      value: '+2',
                    },
                    Wisdom: {
                      proficiency: 'not',
                      value: '+2',
                    },
                    Charisma: {
                      value: '+2',
                    },
                  }}
                />
                <div className="secondary-container__left-pane__proficiencies-pane">
                  <ProficienciesPane
                    proficiencyGroups={[
                      {
                        group: 'Armor',
                        proficiencies: ['Light armor', 'Medium armor'],
                      },
                      {
                        group: 'Weapons',
                        proficiencies: [
                          'Longbow',
                          'Shortsword',
                          'Simple weapons',
                        ],
                      },
                      {
                        group: 'Tools',
                        proficiencies: ["Brewer's supplies", 'Drums'],
                      },
                      {
                        group: 'Languages',
                        proficiencies: ['Common', 'Elvish'],
                      },
                    ]}
                    onChange={console.log}
                  />
                </div>
              </div>
            </div>
          </div>
        ) : (
          <Pane
            display="flex"
            alignItems="center"
            justifyContent="center"
            height={400}
          >
            <Spinner />
          </Pane>
        )}
      </div>
    );
  }
}
Sheet.propTypes = {
  character: PropTypes.shape({
    name: PropTypes.string,
    race: PropTypes.string,
    classes: PropTypes.array,
    abilityScore: PropTypes.shape({ dex: { value: PropTypes.number } }),
    health: PropTypes.shape({
      current: PropTypes.number,
      max: PropTypes.number,
      temp: PropTypes.number,
    }),
  }).isRequired,
  loadCharacter: PropTypes.func.isRequired,
};

export default Sheet;
