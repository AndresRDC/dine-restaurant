import PropTypes from "prop-types";
import "./index.css";

function Button({
  children,
  className,
  fill,
  size,
  color,
  fontColor,
  type,
  onClick,
}) {
  let classNameAll = "btn";
  classNameAll += className ? " " + className : "";
  classNameAll += fill ? " btn--" + fill : "";
  classNameAll += size ? " btn--" + size : "";
  classNameAll += color ? " btn--" + color : "";
  classNameAll += fontColor ? " btn--font-" + fontColor : "";

  return (
    <button className={classNameAll} type={type} onClick={onClick}>
      {children}
    </button>
  );
}

Button.propTypes = {
  fill: PropTypes.oneOf(["outline", "solid"]),
  size: PropTypes.oneOf(["small", "default", "large", "full"]),
  color: PropTypes.oneOf(["primary", "opposite-primary", "danger", "warning"]),
  fontColor: PropTypes.oneOf([
    "primary",
    "opposite-primary",
    "danger",
    "warning",
  ]),
  type: PropTypes.oneOf(["button", "submit", "reset"]),
  onClick: PropTypes.func,
};

Button.defaultProps = {
  fill: "solid",
  fontColor: "primary",
  color: "primary",
  size: "default",
  type: "button",
  onClick: () => {},
};
export default Button;
