import PropTypes from "prop-types";

export default function Slide({ bgImage, children }) {
  return (
    <div
      className="h-full w-full bg-cover bg-center flex items-center p-2"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        maxHeight: "100vh",
      }}
    >
      {children}
    </div>
  );
}

Slide.propTypes = {
  bgImage: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
