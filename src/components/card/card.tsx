import styles from "./card.module.css";
import joinClasses from "../../util/join-classes";
import Link from "next/link";

interface CardProps {
  title: string;
  description: string;
  url: string;
  imgURI: string;
  imgAlt: string;
  imgWidth?: string;
  imgHeight?: string;
}

export default function Card(props: CardProps) {
  return (
    <div
      className={joinClasses([
        "flex-col",
        "flex",
        "gap-4",
        "items-center",
        "md:flex-row",
        "md:items-start",
        "md:space-x-4",
        "text-slate-700",
      ])}
    >
      <div
        className={joinClasses([styles.card__image, "align-center", "mr-1"])}
      >
        <Link href={props.url}>
          <img
            className="mx-auto h-auto w-full"
            style={{
              ...(props.imgWidth ? { width: props.imgWidth } : {}),
              ...(props.imgHeight ? { height: props.imgHeight } : {}),
            }}
            src={props.imgURI}
            alt={props.imgAlt}
          />
        </Link>
      </div>

      <div className={joinClasses(["flex-1"])}>
        <Link
          href={props.url}
          className={joinClasses([styles["card__link"], "text-lg"])}
        >
          {props.title}
        </Link>
        <p className="mt-3">{props.description}</p>
      </div>
    </div>
  );
}
