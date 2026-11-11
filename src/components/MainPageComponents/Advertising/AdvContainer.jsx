import { useLocation } from "react-router-dom";
import Advertising from "./AdvForMiniCourse/Advertising";
import AdvForPeriodLesson from "./AdvForPeriodLesson/AdvForPeriodLesson";

const AdvContainer = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const type = params.get("type");
  const showAdv = Math.random() < 0.2;

  if (type === "year_matrix" || type === "prognostic")
    return <AdvForPeriodLesson />;

  return <>{showAdv ? <AdvForPeriodLesson /> : <Advertising />}</>;
};

export default AdvContainer;
