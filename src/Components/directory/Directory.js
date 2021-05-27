import MenuItem from "../menu-item/MenuItem";
import "./directory.scss";
import { createStructuredSelector } from "reselect";
import { selectDirectorysections } from "../../Redux/directory/directory.selector";
import { connect } from "react-redux";

const Directory = ({ sections }) => {
  return (
    <div className="directory-menu">
      {sections.map(({ id, ...otherSectionProps }) => (
        <MenuItem key={id} {...otherSectionProps} />
      ))}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorysections,
});

export default connect(mapStateToProps)(Directory);
