import React, { Component } from 'react';
import './style.css';
import AbilityScoreCard from '../../components/AbilityScoreCard';
import HealthCard from '../../components/HealthCard';
import StatCard from '../../components/StatCard';
import SavingThrowsPane from '../../components/SavingThrowsPane';
import Profile from '../../components/Profile';
import skills from '../../stubs/skills';
import SkillProficienciesPane from '../../components/SkillProficienciesPane';
import ProficienciesPane from '../../components/ProficienciesPane';

class Sheet extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
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
        <div className="main-container">
          <Profile
            name="Tess Pearsons"
            race="Half Elf"
            classes={[
              { class: 'Fighter', level: 5 },
              { class: 'Rouge', level: 2 },
            ]}
          />

          <div className="top-container">
            <div>
              <HealthCard
                current={30}
                max={40}
                onDamage={() => {}}
                onHeal={() => {}}
              />
              <StatCard value="55ft" bottomText=" Movement speed" />
              <StatCard value="+4" bottomText="Proficiency bonus" />
              <StatCard value="+1" bottomText="Initiative" />
            </div>
            <div className="top-container__ability-score">
              <div>
                <AbilityScoreCard name="Strength" value={12} />
                <AbilityScoreCard name="Dexterity" value={12} />
                <AbilityScoreCard name="Constitution" value={12} />
              </div>
              <div>
                <AbilityScoreCard name="Intelligence" value={12} />
                <AbilityScoreCard name="Wisdom" value={12} />
                <AbilityScoreCard name="Charisma" value={12} />
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
                    { group: 'Languages', proficiencies: ['Common', 'Elvish'] },
                  ]}
                  onChange={console.log}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Sheet;
