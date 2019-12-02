import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { loadCharacter } from '../../store/actions/characterSheet';

import CharacterSheetPage from './index.page';

const mapStateToProps = state => {
  const { character } = state.characterSheet;
  return { character };
};

const mapDispatchToProps = dispatch =>
  bindActionCreators({ loadCharacter }, dispatch);

const PageContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(CharacterSheetPage);

export default PageContainer;
