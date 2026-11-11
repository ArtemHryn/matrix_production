import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import {
  allData,
  authorHealthCard,
  getCompatData,
  getHealthInfo,
} from "helper/calculateMatrix";
import { useMatrix } from "pages/Calculator";
import DataInput from "./DataInput/DataInput";
import { Box } from "components/Box";
import ResultMatrix from "../Partners/ResultMatrix/ResultMatrix";
import PartnerMatrix from "../Partners/PartnerMatrix/PartnerMatrix";
import { ReactComponent as Matrix } from "images/Calculator/AnnualMatrix/yearResultMatrix.svg";
import AnnualPeriodTable from "./AnnualPeriodTable/AnnualPeriodTable";
import HealthCard from "../../PersonalMatrix/MatrixCalculation/HealthMatrix/HealthTables/HealthCard/HealthCard";
import HealthCardBtnChange from "../../PersonalMatrix/MatrixCalculation/HealthMatrix/HealthTables/HealthCardBtnChange/HealthCardBtnChange";

const Annual = () => {
  const { partnersDate, showMatrix } = useMatrix();
  const { t, i18n } = useTranslation("calc");

  const [isMethod2023, setIsMethod2023] = useState(false);
  const [resultData, setResultData] = useState();
  const [annualMatrixData, setAnnualMatrixData] = useState([]);
  const [tableInfo, setTableInfo] = useState([]);
  const [isFullOverlap, setIsFullOverlap] = useState(false);
  const [healthTable, setHealthTable] = useState([]);
  const [authorMethod, setAuthorMethod] = useState([]);
  const [cardType, setCardType] = useState(2);

  useEffect(() => {
    if (partnersDate === 0) {
      return;
    }
    const partners = [];
    partnersDate.forEach((element, index) => {
      const partnerInfo = allData({
        date: element,
        isGenerated: element.isGenerated,
      });
      partnerInfo.order = `${t("tableMatrix")} ${index + 1}`;
      partners.push(partnerInfo);
    });
    setAnnualMatrixData(partners);
  }, [partnersDate, t]);

  useEffect(() => {
    const result = getCompatData(annualMatrixData, isFullOverlap, isMethod2023);
    setResultData(result);

    setHealthTable(getHealthInfo(result, i18n.language));
    setAuthorMethod(authorHealthCard(result, i18n.language));
  }, [annualMatrixData, i18n.language, isFullOverlap, isMethod2023]);

  console.log(authorMethod);

  return (
    <Box>
      <DataInput
        setIsFullOverlap={setIsFullOverlap}
        setIsMethod2023={setIsMethod2023}
      />
      {showMatrix && (
        <>
          <ResultMatrix
            resultData={resultData}
            matrix={Matrix}
            isAnual={true}
            yearArcanes={tableInfo.filter((element, index) => index % 2 !== 0)}
          />
          <Box
            margin="0 auto"
            mb={["40px", "70px", "110px"]}
            display={["flex"]}
            flexDirection={["column"]}
            maxWidth="900px"
            alignItems={"center"}
            justifyContent={["center"]}
            gridGap={["40px", "70px", "110px"]}
          >
            <AnnualPeriodTable
              resultData={resultData}
              matrixYear={partnersDate[1].year}
              tableInfo={tableInfo}
              setTableInfo={setTableInfo}
            />
            <Box>
              <HealthCardBtnChange
                cardType={cardType}
                setCardType={setCardType}
              />
              {healthTable.length > 0 && cardType === 1 && (
                <HealthCard card={healthTable[0]} />
              )}
              {authorMethod.length > 0 && cardType === 2 && (
                <HealthCard card={authorMethod[0]} />
              )}
            </Box>
          </Box>
          <Box
            display={["flex"]}
            flexDirection={["column", "column", "row"]}
            justifyContent="center"
            gridGap={["20px", "40px"]}
            mb={["60px", "70px"]}
          >
            {annualMatrixData.map((partner, index) => (
              <PartnerMatrix
                key={partner.order}
                partner={partner}
                date={partnersDate[index]}
                lastIndex={index === annualMatrixData.length - 1 ? true : false}
                matrix={Matrix}
                isAnual={true}
              />
            ))}
          </Box>
        </>
      )}
    </Box>
  );
};

export default Annual;
