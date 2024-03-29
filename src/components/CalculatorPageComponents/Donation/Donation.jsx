import { useTranslation } from 'react-i18next';
import { Box } from 'components/Box';
import {
  BkCoffeeLogo,
  DonationLink,
  FlyingIcon,
  LikeTheProject,
  MoonContainer,
  SaveService,
} from './Donation.styled';
import { ReactComponent as PayPal } from 'images/Calculator/Donation/paypalLogo.svg';
import { ReactComponent as MonoLogo } from 'images/Calculator/Donation/monoLogo.svg';
import { ReactComponent as MonoText } from 'images/Calculator/Donation/monoText.svg';

const gradients = [
  'radial-gradient(circle, rgba(173,93,201,0.3) 30%, rgba(255,255,255,0.01) 60%)',
  'linear-gradient(180deg, rgba(255,255,255,0.01) 0%, rgba(173,93,201,0.3) 50%, rgba(255,255,255,0.01) 100%);',
  'linear-gradient(180deg, rgba(255,255,255,0.01) 0%, rgba(173,93,201,0.3) 50%, rgba(255,255,255,0.01) 100%);',
];

const Donation = () => {
  const {t} = useTranslation('calc')
  return (
    <Box
      id="donation"
      as="section"
      py={["40px", null, "80px"]}
      background={[...gradients]}
    >
      <Box
        maxWidth={["400px", "768px", "1440px"]}
        position="relative"
        px={["37px", "32px", "84px"]}
        m="0 auto"
      >
        <LikeTheProject>{t("donationLikeTheProject")}</LikeTheProject>
        <SaveService>{t("donationSaveService")}</SaveService>
        <Box
          display={[null, "flex"]}
          flexWrap={[null, "wrap", "no-wrap"]}
          gridGap="18px"
          position="relative"
          zIndex="10"
          justifyContent={[null, null, "center"]}
        >
          <DonationLink
            href="https://www.paypal.com/paypalme/DariKarma"
            target="_blank"
          >
            <PayPal height="60%" />
          </DonationLink>
          <DonationLink
            href="https://www.buymeacoffee.com/dari.karma"
            target="_blank"
            width={["201px", "359px", "418px"]}
            order={[null, 3, 2]}
          >
            <BkCoffeeLogo />
            Buy me a coffee
          </DonationLink>
          <DonationLink
            href="https://send.monobank.ua/jar/Ahdui3wh3P"
            target="_blank"
            order={[null, null, 3]}
          >
            <MonoLogo height="55%" />
            <MonoText height="30%" />
          </DonationLink>
        </Box>
        <MoonContainer
          initial={{ y: -10 }}
          animate={{ y: 10 }}
          transition={{
            duration: 3,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse",
          }}
        >
          <FlyingIcon />
        </MoonContainer>
      </Box>
    </Box>
  );
};

export default Donation;
