const Container = ({ fluid = false, children }) => {
  return <div className={`container${fluid ? "-fluid" : ""}`}>{children}</div>;
};

const Row = ({ cols = null, children }) => {
  const colsClass = cols ? `row-cols-${cols}` : "";

  return <div className={`row ${colsClass}`}>{children}</div>;
};

const Col = ({ width = {}, offset = {}, children }) => {
  let colsClasses = "";

  for (const breakpoint in width) {
    if (width[breakpoint]) {
      colsClasses += `col-${breakpoint}-${width[breakpoint]} `;
    }
  }

  for (const breakpoint in offset) {
    if (offset[breakpoint]) {
      colsClasses += `offset-${breakpoint}-${offset[breakpoint]} `;
    }
  }
  return <div className={`col ${colsClasses}`}>{children}</div>;
};

export default Container;
export { Row, Col };
