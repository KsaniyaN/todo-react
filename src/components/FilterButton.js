import React from "react";

function FilterButton(props) {
    return (
        /*Accessibility - aria-pressed tells assistive technology (like screen readers) that the button can be in one of two states: pressed or unpressed.
                Think of these as analogs for on and off.*/
        <button type="button" className="btn toggle-btn"
                aria-pressed={props.isPressed}
                onClick={() => props.setFilter(props.name)}>
            {/*Accessibility - any element with class 'visually-hidden' will be hidden from sighted users and still available to screen reader users*/}
            <span className="visually-hidden">Show </span>
            <span>{props.name}</span>
            <span className="visually-hidden"> tasks</span>
        </button>
    )
}

export default FilterButton;