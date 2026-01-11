import { useLocation } from "react-router-dom";
import Advertising from "./AdvForMiniCourse/Advertising";
import AdvForPeriodLesson from "./AdvForPeriodLesson/AdvForPeriodLesson";

const AdvContainer = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const type = params.get("type");
  const showAdv = Math.random() < 0.7;

  if (type === "year_matrix") return <AdvForPeriodLesson />;

  return <>{showAdv ? <AdvForPeriodLesson /> : <Advertising />}</>;
};

export default AdvContainer;
