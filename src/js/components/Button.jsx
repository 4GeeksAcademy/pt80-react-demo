const Button = ({
  onClick = () => undefined,
  label = "Button",
  outline = false,
  variant = "primary",
}) => {
  return (
    <button
      onClick={(ev) => onClick(ev)}
      className={`btn btn-${outline ? "outline-" : ""}${variant}`}
    >
      {label}
    </button>
  );
};

const LinkButton = ({ href, outline = false, variant = "primary" }) => {
  return (
    <a href={href} className={`btn btn-${outline ? "outline-" : ""}${variant}`}>
      Button
    </a>
  );
};

const LabelButton = ({ htmlFor, outline = false, variant = "primary" }) => {
  return (
    <label
      htmlFor={htmlFor}
      className={`btn btn-${outline ? "outline-" : ""}${variant}`}
    >
      Button
    </label>
  );
};

const DivButton = ({
  onClick = () => undefined,
  children,
  outline = false,
  variant = "primary",
}) => {
  return (
    <div
      onClick={(ev) => onClick(ev)}
      className={`btn btn-${outline ? "outline-" : ""}${variant}`}
    >
      {children}
    </div>
  );
};

const ButtonGroup = ({ children, size = null }) => {
  return (
    <div className={`btn-group ${size ? `btn-group-${size}` : ""}`}>
      {children}
    </div>
  );
};

const ButtonToolbar = ({ children }) => {
  return <div className="btn-toolbar">{children}</div>;
};

export default Button;
export { ButtonGroup, ButtonToolbar, LinkButton, LabelButton, DivButton };
