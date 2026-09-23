import { Box } from "../../../../Box";
import { List, Price, ServiceImage, Text, Title } from "./Card.styled";

const Card = ({ card }) => {
  const { img, title, text, list, price } = card;
  return (
    <>
      <ServiceImage src={img} alt={title} />
      <Box
        display="flex"
        flexDirection="column"
        gridGap={["12px"]}
        flexGrow={1}
      >
        <Title>{title}</Title>
        <Text>{text}</Text>
        <Box>
          <Text>Включає</Text>
          <List>
            {list.map((t, i) => (
              <li key={i}>
                <Text>{t}</Text>
              </li>
            ))}
          </List>
        </Box>
        <Price>€{price}</Price>
      </Box>
    </>
  );
};

export default Card;
