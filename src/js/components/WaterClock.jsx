import "./WaterClock.css";

const WaterClock = ({
  fill,
  fillColor = "hsl(5 65% 35%)",
  bgColor = "hsla(266, 34%, 38%, 0.5)",
}) => {
  return (
    <div className="waterclock mt-2" style={{ background: bgColor }}>
      <div
        className="water"
        style={{ height: `${fill}%`, background: fillColor }}
      ></div>
    </div>
  );
};

export default WaterClock;
