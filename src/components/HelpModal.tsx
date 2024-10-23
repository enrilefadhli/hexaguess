// HelpModal.tsx
import React from 'react';

interface HelpModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const HelpModal: React.FC<HelpModalProps> = ({ isOpen, onClose }) => {
    return (
        <>
            {/* Modal */}
            <div className={`modal fade ${isOpen ? 'show' : ''}`} style={{ display: isOpen ? 'block' : 'none' }} tabIndex={-1} role="dialog" aria-labelledby="helpModalLabel" aria-hidden={!isOpen}>
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="helpModalLabel">Help</h5>
                            <button type="button" className="close" onClick={onClose} aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <p>It's simple, Guess the hex code of the displayed color</p>
                            <h1> 
                                #
                                <span style={{color: 'red'}}>RR</span>
                                <span style={{color: 'green'}}>GG</span>
                                <span style={{color: 'blue'}}>BB</span>
                            </h1>
                            <div className="row">
                            <div className="col text-start">
                                <ul>Split the Hexcode into three parts:
                                    <li className="ml-4">The first two digits are for red (RR).</li>
                                    <li className="ml-4">The second two digits are for green (GG).</li>
                                    <li className="ml-4">The third two digits are for blue (BB).</li>
                                </ul>
                                <ul className="mr-4">Each pair is a two-digit hexadecimal number ranging from 00 to FF, where 00 is the lowest intensity (none of that color) and FF is the highest intensity (full color).</ul>
                            </div>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" onClick={onClose}>Close</button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Backdrop */}
            {isOpen && <div className="modal-backdrop fade show" onClick={onClose}></div>}
        </>
    );
};

export default HelpModal;
