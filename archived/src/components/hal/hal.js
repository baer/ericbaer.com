import { useEffect, useState, useRef } from "react";
import FixieLogo from "./fixie-logo";

import styles from "./hal.module.css";

const ROTATION_MAX = 40;
const TRANSLATION_MAX = 43;

const getElementOffsets = (viewportWidth, viewportHeight, ref) => {
  const elementHeight = ref?.current?.clientHeight || 0;
  const elementTopOffsetFromViewportTop = ref?.current?.offsetTop || 0;

  const elementWidth = ref?.current?.clientHeight || 0;
  // TODO: This is broken if HAL isn't centered. because
  // ref?.current?.offsetLeft === 0 Maybe a margins thing? I dono.
  const elementLeftOffsetFromViewportLeft = viewportWidth / 2;

  const elementCenterOffsetTop =
    elementTopOffsetFromViewportTop + elementHeight / 2;
  const elementCenterOffsetBottom = viewportHeight - elementCenterOffsetTop;

  const elementCenterOffsetLeft =
    elementLeftOffsetFromViewportLeft + elementWidth / 2;
  const elementCenterOffsetRight = viewportWidth - elementCenterOffsetLeft;

  return {
    elementCenterOffsetTop,
    elementCenterOffsetLeft,
    elementCenterOffsetBottom,
    elementCenterOffsetRight,
  };
};

// TODO: Use negative numbers
const getXOffsetFromElementCenter = (
  mousePosX,
  centerOffsetLeft,
  centerOffsetRight
) => (mousePosX <= centerOffsetLeft ? centerOffsetLeft : centerOffsetRight);

// TODO: Use negative numbers
const getYOffsetFromElementCenter = (
  mousePosY,
  centerOffsetTop,
  centerOffsetBottom
) => (mousePosY <= centerOffsetTop ? centerOffsetTop : centerOffsetBottom);

const getXMousePositionRelativeToElementCenter = (
  mousePosX,
  centerOffsetLeft
) =>
  mousePosX <= centerOffsetLeft
    ? (centerOffsetLeft - mousePosX) * -1
    : mousePosX - centerOffsetLeft;

const getYMousePositionRelativeToElementCenter = (
  mousePosY,
  elementCenterOffsetTop
) =>
  mousePosY <= elementCenterOffsetTop
    ? (elementCenterOffsetTop - mousePosY) * -1
    : mousePosY - elementCenterOffsetTop;

export default function Hal({ shouldAnimateHal }) {
  const logoRef = useRef();
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [viewportHeight, setViewportHeight] = useState(0);
  const [viewportWidth, setViewportWidth] = useState(0);

  const {
    elementCenterOffsetTop,
    elementCenterOffsetLeft,
    elementCenterOffsetBottom,
    elementCenterOffsetRight,
  } = getElementOffsets(viewportWidth, viewportHeight, logoRef);

  const xRotationIncrement =
    getYOffsetFromElementCenter(
      mousePos.y,
      elementCenterOffsetTop,
      elementCenterOffsetBottom
    ) / ROTATION_MAX;

  // TODO: Why do I have to invert this?
  const xRotation =
    (getYMousePositionRelativeToElementCenter(
      mousePos.y,
      elementCenterOffsetTop
    ) /
      xRotationIncrement) *
      -1 || 0;

  const xTranslationIncrement =
    getXOffsetFromElementCenter(
      mousePos.x,
      elementCenterOffsetLeft,
      elementCenterOffsetRight
    ) / TRANSLATION_MAX;

  const xTranslation =
    getXMousePositionRelativeToElementCenter(
      mousePos.x,
      elementCenterOffsetLeft
    ) / xTranslationIncrement || 0;

  const yRotationIncrement =
    getXOffsetFromElementCenter(
      mousePos.x,
      elementCenterOffsetLeft,
      elementCenterOffsetRight
    ) / ROTATION_MAX;

  const yRotation =
    getXMousePositionRelativeToElementCenter(
      mousePos.x,
      elementCenterOffsetLeft
    ) / yRotationIncrement || 0;

  const yTranslationIncrement =
    getYOffsetFromElementCenter(
      mousePos.y,
      elementCenterOffsetTop,
      elementCenterOffsetBottom
    ) / TRANSLATION_MAX;

  const yTranslation =
    getYMousePositionRelativeToElementCenter(
      mousePos.y,
      elementCenterOffsetTop
    ) / yTranslationIncrement || 0;

  useEffect(() => {
    setViewportHeight(window.innerHeight);
    setViewportWidth(window.innerWidth);

    const handleMouseMove = (event) => {
      setMousePos({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div>
      <div className={`${styles.base} ${styles.circle}`}>
        <div
          className={`${styles.lens} ${styles.circle}`}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div ref={logoRef} style={{ width: "135px" }}>
            <FixieLogo
              xRotation={xRotation}
              yRotation={yRotation}
              xTranslation={xTranslation}
              yTranslation={yTranslation}
            />
          </div>
        </div>
        <div
          className={`${shouldAnimateHal && styles.animation} ${styles.circle}`}
        ></div>
      </div>
    </div>
  );
}
