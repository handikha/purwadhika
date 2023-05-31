import React from "react";
import propTypes from "prop-types";
import { Link } from "react-router-dom";

export default function Button(props) {
  const className = [props.className];

  props.isBlock && className.push("block");
  props.hasShadow && className.push("shadow-md");
  props.isButton &&
    className.push("font-medium px-6 py-2 rounded-lg text-white");
  props.isPrimary &&
    className.push(
      "bg-primary border-[1-px] hover:bg-teal-600 duration-200 active:scale-95"
    );
  props.isSecondary &&
    className.push(
      "bg-transparent text-primary hover:bg-slate-200 border-primary border-[1px] duration-200 active:scale-95"
    );
  const onClick = () => {
    props.onClick && props.onClick();
  };

  if (props.isLink) {
    if (props.isExternal) {
      return (
        <a
          href={props.path}
          className={className.join(" ")}
          target={props.target === "_blank" ? "_blank" : undefined}
          rel={props.target === "_blank" ? "noopener noreferrer" : undefined}
        >
          {props.label}
        </a>
      );
    } else {
      return (
        <Link to={props.path} className={className.join(" ")} onClick={onClick}>
          {props.label}
        </Link>
      );
    }
  }

  return (
    <button className={className.join(" ")} type={props.type} onClick={onClick}>
      {props.label}
    </button>
  );
}

Button.propTypes = {
  type: propTypes.oneOf(["button", "submit"]),
  label: propTypes.string,
  className: propTypes.string,
  onClick: propTypes.func,
  path: propTypes.string,
  target: propTypes.string,
  isButton: propTypes.bool,
  isLink: propTypes.bool,
  isDisabled: propTypes.bool,
  isLoading: propTypes.bool,
  isPrimary: propTypes.bool,
  isSecondary: propTypes.bool,
  isExternal: propTypes.bool,
  isBlock: propTypes.bool,
  hasShadow: propTypes.bool,
};
