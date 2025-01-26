import { Card } from "@components/card";
import { CardLayout } from "@components/card-layout";
import { Section } from "@components/section";
import cardImage1 from "../assets/card-new-image-1.webp";
import cardImage2 from "../assets/card-new-image-2.webp";
import cardImage3 from "../assets/card-new-image-3.webp";
import cardImage4 from "../assets/card-new-image-4.webp";
import cardImage5 from "../assets/card-new-image-5.webp";
import cardImage6 from "../assets/card-new-image-6.webp";

export const NewItemsBlock = () => {
  return (
    <Section title="Новинки" id="novelty">
      <CardLayout>
        <Card
          imageLink={cardImage1}
          title="BEAUTYCOL АБРИКОС"
          description="Гидрат рыбного коллагена<br>+порошок сушеного абрикоса"
          price="990 ₽"
          isNew
        />
        <Card
          imageLink={cardImage2}
          title="BEAUTYCOL АБРИКОС"
          description="Гидрат рыбного коллагена<br>+порошок сушеного абрикоса"
          price="990 ₽"
          isNew
        />
        <Card
          imageLink={cardImage3}
          title="BEAUTYCOL АБРИКОС"
          description="Гидрат рыбного коллагена<br>+порошок сушеного абрикоса"
          price="990 ₽"
          isNew
        />
        <Card
          imageLink={cardImage4}
          title="BEAUTYCOL АБРИКОС"
          description="Гидрат рыбного коллагена<br>+порошок сушеного абрикоса"
          price="990 ₽"
          isNew
        />
        <Card
          imageLink={cardImage5}
          title="BEAUTYCOL АБРИКОС"
          description="Гидрат рыбного коллагена<br>+порошок сушеного абрикоса"
          price="990 ₽"
          isNew
        />
        <Card
          imageLink={cardImage6}
          title="BEAUTYCOL АБРИКОС"
          description="Гидрат рыбного коллагена<br>+порошок сушеного абрикоса"
          price="990 ₽"
          isNew
        />
      </CardLayout>
    </Section>
  );
};
