import react from "react";
import classNames from "classnames";
import styles from "./index.module.less";

export default function(props) {
  const { color = "red", children, className } = props;

  return (
    <button style={{ color }} className={classNames(className)}>
      {children}
    </button>
  );
}
