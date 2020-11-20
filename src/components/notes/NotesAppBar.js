import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { startSaveNote, startUploading } from "../../actions/notes";
import moment from "moment";

export const NotesAppBar = () => {
  const dispatch = useDispatch();
  const { active, date } = useSelector((state) => state.notes);
  const noteDate = moment(date);

  const handleSave = () => {
    dispatch(startSaveNote(active));
  };

  const handlePictureClick = () => {
    document.querySelector("#fileSelector").click();
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      dispatch(startUploading(file));
    }
  };
  return (
    <div className="notes__appbar">
      <span>{noteDate.format("dddd, Do MMMM ")}</span>

      <input
        id="fileSelector"
        type="file"
        name="file"
        style={{ display: "none" }}
        onChange={handleFileChange}
      />

      <div>
        <button className="btn" onClick={handlePictureClick}>
          <h3>Picture</h3>
        </button>

        <button className="btn" onClick={handleSave}>
          <h3>Save</h3>
        </button>
      </div>
    </div>
  );
};
