import PropTypes from "prop-types";
/**
 * `CButton` is a customizable button component styled with Tailwind CSS.
 * Props:
 * - `onClick` (function): Callback function to handle the button click event.
 * - `children` (node): The content inside the button, such as text or other elements. This prop is required.
 * - `clasName` (string): Custom classes to override or add to the default styling.
 * - `...rest` (object): Any additional props passed to the button (e.g., `type`, `disabled`).
 */

export default function CButton({ onClick, children, clasName = "", ...rest }) {
  // دمج الأنماط الافتراضية مع الأنماط التي يمررها المستخدم
  const defaultClasses =
    "bg-main text-white border p-2 rounded-lg hover:bg-white hover:text-main hover:border-red-500 hover:shadow-md transition duration-100";
  const combinedClasses = `${defaultClasses} ${clasName}`;

  return (
    <button className={combinedClasses} onClick={onClick} {...rest}>
      {children}
    </button>
  );
}

CButton.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired,
  clasName: PropTypes.string,
};