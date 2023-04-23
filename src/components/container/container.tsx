import styles from "./container.module.css";
import joinClasses from "@/util/join-classes";

interface ContainerProps {
  children: React.ReactNode;
  backgroundColor?: string;
}

export default function Container({
  children,
  backgroundColor = "#b3e1bb",
}: ContainerProps) {
  return (
    <div
      className={joinClasses([
        styles["featured-work-section"],
        `bg-[${backgroundColor}]`,
        "flex",
        "flex-col",
        "gap-6",
        "p-6",
      ])}
    >
      {children}
    </div>
  );
}
