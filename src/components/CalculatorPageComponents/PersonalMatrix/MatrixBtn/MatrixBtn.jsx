import { useTranslation } from "react-i18next";
import { BtnItem, BtnList, Link } from "./MatrixBtn.styled";
import { useMatrix } from "pages/Calculator";
import { useNavigate } from "react-router-dom";

const MatrixBtn = () => {
  const { setMatrixType, matrixType } = useMatrix();
  const { i18n } = useTranslation();
  const navigate = useNavigate();
  const btnList = (lng) => {
    return [
      {
        name: lng === "ua" ? "Матриця долі" : "Матрица Судьбы",
        to: "fateMatrix",
      },
      {
        name: lng === "ua" ? "Кармічні задачі" : "кармические задачи",
        to: "karmaIssues",
      },
      {
        name: lng === "ua" ? "Матриця Здоров’я" : "Матрица Здоровья",
        to: "healthMatrix",
      },
      { name: lng === "ua" ? "Прогностика" : "Прогностика", to: "prognostic" },
    ];
  };
  return (
    <BtnList>
      {btnList(i18n.language).map(({ name, to }) => (
        <BtnItem key={name}>
          <Link
            className={matrixType === to ? "active" : null}
            onClick={() => {
              setMatrixType(to);
              navigate(`?type=${to}`);
            }}
          >
            {name}
          </Link>
        </BtnItem>
      ))}
    </BtnList>
  );
};

export default MatrixBtn;
