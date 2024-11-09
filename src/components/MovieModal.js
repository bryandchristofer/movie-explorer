import React from "react";
import Modal from "react-modal";
import MovieDetails from "./MovieDetails";
import "./MovieModal.css";

Modal.setAppElement("#root");

const MovieModal = ({ isOpen, onRequestClose, movie }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Movie Details"
      className="modal-content"
      overlayClassName="modal-overlay"
    >
      {movie && <MovieDetails movie={movie} />}
      <button onClick={onRequestClose} className="close-modal">
        Close
      </button>
    </Modal>
  );
};

export default MovieModal;
