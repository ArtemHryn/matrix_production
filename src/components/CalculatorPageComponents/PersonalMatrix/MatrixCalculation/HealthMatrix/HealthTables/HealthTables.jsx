import { useTranslation, Trans } from "react-i18next";
import { useEffect, useState } from "react";
import { Box } from "components/Box";
import HealthCard from "./HealthCard/HealthCard";
import {
  AuthorLessonLink,
  AuthorLessonText,
  Warning,
  WarningText,
} from "../HealthMatrix.styled";
import { useMatrix } from "pages/Calculator";
import { authorHealthCard, getHealthInfo } from "helper/calculateMatrix";
import HealthCardBtnChange from "./HealthCardBtnChange/HealthCardBtnChange";

const HealthTables = ({ setCardType, cardType }) => {
  const { i18n, t } = useTranslation("calc");
  const [list, setList] = useState([]);
  const [authorMethod, setAuthorMethod] = useState([]);

  const { matrixData } = useMatrix();

  useEffect(() => {
    setAuthorMethod(authorHealthCard(matrixData, i18n.language));
    const result = getHealthInfo(matrixData, i18n.language);
    setList(result);
  }, [i18n.language, matrixData]);

  return (
    <Box width={[null, null, "900px"]} m={"0 auto"}>
      <HealthCardBtnChange setCardType={setCardType} cardType={cardType} />
      {cardType === 1 && (
        <Box
          display="flex"
          flexDirection="column"
          gridGap={["10px", "20px", "40px"]}
        >
          {list.map((card) => (
            <HealthCard key={card.cardName} card={card} />
          ))}
        </Box>
      )}
      {cardType === 2 && (
        <>
          <Box
            display="flex"
            flexDirection="column"
            gridGap={["10px"]}
            my={["20px"]}
          >
            <Box
              mt={["14px"]}
              display="flex"
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
              gridGap="8px"
            >
              <AuthorLessonText>{t("healthAuthorLesson")}</AuthorLessonText>
              <AuthorLessonLink
                href="https://youtube.com/playlist?list=PLSMNBvCJA4Ot8KXprQnpJqvcjuc_vdsd1&si=ndjLHp3XicpxvK3U"
                target="_blank"
                rel="noreferrer noopener"
              >
                {t("check")}
              </AuthorLessonLink>
            </Box>
          </Box>
          <Box
            display="flex"
            flexDirection="column"
            gridGap={["10px", "20px", "40px"]}
          >
            {authorMethod.map((table) => (
              <HealthCard card={table} key={table.cardName} />
            ))}
          </Box>
          <WarningText as="p">
            <Trans
              i18nKey="healthAuthorWarning1"
              ns="calc"
              components={{ warning: <Warning /> }}
            />
          </WarningText>
          <WarningText as="p">
            <Trans
              i18nKey="healthAuthorWarning2"
              ns="calc"
              components={{ warning: <Warning /> }}
            />
          </WarningText>
        </>
      )}
    </Box>
  );
};

export default HealthTables;
