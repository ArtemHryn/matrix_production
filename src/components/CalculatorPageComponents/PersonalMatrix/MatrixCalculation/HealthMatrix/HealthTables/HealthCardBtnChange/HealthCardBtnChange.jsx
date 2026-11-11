import { useTranslation } from "react-i18next";
import { Box } from "../../../../../../Box";
import { SetCardTypeBtn } from "./HealthCardBtnChange.styles";

const btnGradient =
  "linear-gradient(180deg, #FFF 19.44%, #F5E9FF 52.78%, #F7C8FF 100%);";
const btnGradientActive =
  "linear-gradient(180deg, #765D90 5.73%, rgba(198, 106, 201, 0.51) 100%)";

const HealthCardBtnChange = ({ cardType, setCardType }) => {
  const { t } = useTranslation("calc");

  return (
    <Box
      display="flex"
      mb={["12px", "28px"]}
      justifyContent="center"
      alignItems="center"
      flexWrap="wrap"
      gridGap={["5px", "10px"]}
    >
      <SetCardTypeBtn
        color={cardType === 1 ? "white" : null}
        bg={cardType === 1 ? "#765D90" : null}
        onClick={() => setCardType(1)}
      >
        {t("healthCardTypePersonal")}
      </SetCardTypeBtn>
      <SetCardTypeBtn
        width={["80%"]}
        color={cardType === 2 ? "white" : null}
        background={cardType === 2 ? btnGradientActive : btnGradient}
        onClick={() => setCardType(2)}
      >
        {t("healthAuthor")} INTEGRITY*
      </SetCardTypeBtn>
    </Box>
  );
};

export default HealthCardBtnChange;
