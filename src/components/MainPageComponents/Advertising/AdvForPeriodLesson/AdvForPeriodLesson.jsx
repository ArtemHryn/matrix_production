import { useEffect, useState } from "react";
import CloseBtn from "./CloseBtn";
import {
  About,
  AdvertisingContainer,
  CloseBtnS,
  Desc,
  LinkToCourse,
  MatrixP,
  MatrixY,
  Receipt,
  Table,
  TextContainer,
  Title,
} from "./AdvForPeriodLesson.styled";

import matrixP from "images/Advertising/matrixP.webp";
import matrixY from "images/Advertising/matrixY.webp";
import receipt from "images/Advertising/receipt.webp";
import table from "images/Advertising/table.webp";

const AdvForPeriodLesson = () => {
  const [visible, setVisible] = useState(false);

  const now = new Date();
  const cutoff = new Date("2026-01-01T00:00:00");

  useEffect(() => {
    const closedAt = localStorage.getItem("closedAt");
    if (!closedAt) {
      setTimeout(() => {
        setVisible(true);
      }, 5000);
      return;
    }

    if (new Date() <= new Date(closedAt)) return;

    setTimeout(() => {
      setVisible(true);
    }, 5000); // Show the component after 5 seconds
  }, []);

  const onClose = () => {
    setVisible(false);
    const closedAt = localStorage.getItem("closedAt");

    const now = new Date();

    const minutesToAdd = closedAt ? 60 : 10;
    const futureTime = new Date(now.getTime() + minutesToAdd * 60 * 1000); // +10 хвилин

    localStorage.setItem("closedAt", futureTime.toISOString());
  };

  if (now > cutoff) {
    return null;
  }
  return (
    <AdvertisingContainer $visible={visible}>
      <CloseBtnS onClick={onClose}>
        <CloseBtn />
      </CloseBtnS>
      <Table src={table} alt="таблиця" />
      <MatrixY src={matrixY} alt="матриця" />
      <MatrixP src={matrixP} alt="матриця" />
      <Receipt src={receipt} alt="рецепт" />
      <About>Всё плохое — это просто нереализованное хорошее!</About>
      <TextContainer>
        <Title>
          <span>ВСЕ СЕКРЕТЫ</span> ПРОГНОЗА НА 2026
        </Title>
        <Desc>
          как не терять себя в сложные моменты И САМОСТОЯТЕЛЬНО КОРРЕКТИРОВАТЬ
          СОБЫТИЯ
        </Desc>
      </TextContainer>
      <LinkToCourse href="https://beacons.ai/darikarma.course/periodcodes">
        К УРОКУ{" "}
        <svg viewBox="0 0 14 17" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M13.0703 8.35111L-0.00166702 16.7023L-0.00166702 -6.19888e-05L13.0703 8.35111Z"
            fill="white"
          />
        </svg>
      </LinkToCourse>
    </AdvertisingContainer>
  );
};

export default AdvForPeriodLesson;
