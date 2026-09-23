import { useTranslation } from "react-i18next";
import Card from "./Card/Card";
import { cards } from "../../../../helper/main/mainServices";
import {
  RedirectToBooking,
  MainServicesList,
  MainServicesListItem,
} from "./MainServices.styled";
import { Box } from "../../../Box";

const MainServices = () => {
  const { i18n, t } = useTranslation();
  console.log(cards);

  return (
    <Box display="flex" flexDirection="column" gridGap={["12px"]}>
      <MainServicesList>
        {cards[i18n.language].map((c) => (
          <MainServicesListItem key={c.title}>
            <Card card={c} />
          </MainServicesListItem>
        ))}
      </MainServicesList>
      <RedirectToBooking
        href="https://t.me/DariKarma"
        target="_blank"
        rel="noreferrer noopener"
      >
        {t("services.buy_button")}
      </RedirectToBooking>
    </Box>
  );
};

export default MainServices;
