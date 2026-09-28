import personalMatrix from 'images/ServicesAndPrice/personalMatrix.webp';
import awareness from 'images/ServicesAndPrice/awareness.webp';
import prosperity from 'images/ServicesAndPrice/prosperity.webp';
import familyTree from 'images/ServicesAndPrice/familyTree.webp';
import {
  PersonalMatrix,
  FamilyTree,
  Awareness,
  ProsperityStar,
} from 'components/MainPageComponents/ModalWindows';

const getDeepElaborationServicesCards = lng => {
  return [
    {
      name:
        lng === "ua" ? "Цілісна особиста матриця" : "Целостная личная матрица",
      img: personalMatrix,
      text:
        lng === "ua"
          ? "Глибоке пізнання себе та переведення «мінусів» у «плюси» для кардинальних змін у житті."
          : "Глубокое познание себя и перевод «минусов» в «плюсы» для кардинальных изменений в жизни.",
      component: PersonalMatrix,
      price: "119",
    },
    {
      name: lng === "ua" ? "Матриця 9 колін роду" : "Матрица 9 колен рода",
      img: familyTree,
      text:
        lng === "ua"
          ? "Родові сценарії, стосунки з близькими та ресурс роду для реалізації в соціальному житті."
          : "Родовые сценарии, отношения с близкими и ресурс рода для реализации в социальной жизни.",
      component: FamilyTree,
      price: "150",
    },
    {
      name: lng === "ua" ? "Матриця усвідомленості" : "Матрица осознанности",
      img: awareness,
      text:
        lng === "ua"
          ? "Рідкісні розрахунки оригінального методу для поглибленого дослідження та пропрацювання своєї Матриці."
          : "Редкие расчёты оригинального метода для углублённого исследования и проработки своей Матрицы.",
      component: Awareness,
      price: "230",
    },
    {
      name: lng === "ua" ? "Зірка процвітання" : "Звезда процветания",
      img: prosperity,
      text:
        lng === "ua"
          ? "Справжні бажання, проявленість і шлях від ідеї до матеріального результату, слави та визнання."
          : "Истинные желания, проявленность и путь от идеи до материального результата, славы и признания",
      component: ProsperityStar,
      price: "150",
    },
  ];
};

export default getDeepElaborationServicesCards;
