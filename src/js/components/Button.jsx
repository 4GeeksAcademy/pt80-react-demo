/**
 * Components can live together in a file,
 * but I strongly recommend that you only put
 * components together if they are related in function.
 */

/**
 * Props are one-way bindings (we'll talk about that later)
 * letting you pass in data to your components
 * but not the other way around.
 */
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

// const LinkButton = ({ href, outline = false, variant = "primary" }) => {
//   return (
//     <a href={href} className={`btn btn-${outline ? "outline-" : ""}${variant}`}>
//       Button
//     </a>
//   );
// };

// const LabelButton = ({ htmlFor, outline = false, variant = "primary" }) => {
//   return (
//     <label
//       htmlFor={htmlFor}
//       className={`btn btn-${outline ? "outline-" : ""}${variant}`}
//     >
//       Button
//     </label>
//   );
// };

/**
 * children is a special prop, it's the stuff that's
 * between the opening and closing tag of your components
 * when you use it.
 */
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

/**
 * So, for example: you can use the children prop
 * to let you have components inside components
 * and build more complicated stuff like these
 * button groups and toolbars.
 */
const ButtonGroup = ({ children, size = null }) => {
  return (
    <div className={`btn-group ${size ? `btn-group-${size}` : ""}`}>
      {children}
    </div>
  );
};

/**
 * This component isn't a huge save tbh.
 * You could get away without it being its own thing.
 *
 * But it serves as another example of children.
 */
const ButtonToolbar = ({ children }) => {
  return <div className="btn-toolbar">{children}</div>;
};

export default Button;
export {
  ButtonGroup,
  ButtonToolbar,
  // LinkButton,
  // LabelButton,
  DivButton,
};
