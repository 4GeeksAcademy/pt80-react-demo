import { useEffect } from "react";

const Container = ({ fluid = false, children }) => {
  useEffect(() => {
    console.log("I get run on component mount!");
  }, []);

  return <div className={`container${fluid ? "-fluid" : ""}`}>{children}</div>;
};

const Row = ({ cols = null, children }) => {
  const colsClass = cols ? `row-cols-${cols}` : "";

  return <div className={`row ${colsClass}`}>{children}</div>;
};

const Col = ({ width = {}, offset = {}, children }) => {
  let colsClasses = "";

  useEffect(() => {
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
  }, []);

  // const colsClasses = () => {
  //   let classes = "";

  //   for (const breakpoint in width) {
  //     if (width[breakpoint]) {
  //       classes += `col-${breakpoint}-${width[breakpoint]} `;
  //     }
  //   }

  //   for (const breakpoint in offset) {
  //     if (offset[breakpoint]) {
  //       classes += `offset-${breakpoint}-${offset[breakpoint]} `;
  //     }
  //   }

  //   return classes;
  // };

  return <div className={`col ${colsClasses}`}>{children}</div>;
};

export default Container;
export { Row, Col };
