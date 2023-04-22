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
      // TODO: Why do I need to do this? Interpolation didn't work
      // `bg-[${backgroundColor}]`,
      style={{ backgroundColor: backgroundColor }}
      className={joinClasses([
        styles["featured-work-section"],
        "flex",
        "flex-col",
        "gap-6",
        "p-6",
        "ml-4",
        "mr-5",
      ])}
    >
      {children}
    </div>
  );
}
