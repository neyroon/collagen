import { Card } from "@components/card";
import { CardLayout } from "@components/card-layout";
import { Section } from "@components/section";
import CardHitImage1 from "../assets/card-hit-image-1.webp";
import CardHitImage2 from "../assets/card-hit-image-2.webp";
import CardHitImage3 from "../assets/card-hit-image-3.webp";
import CardHitImage4 from "../assets/card-hit-image-4.webp";
import CardHitImage5 from "../assets/card-hit-image-5.webp";

export const HitsBlock = () => {
  return (
    <Section title="Хиты" id="hits">
      <CardLayout>
        <Card
          imageLink={CardHitImage1}
          title="BEAUTYCOL АБРИКОС"
          description="Гидрат рыбного коллагена<br>
+порошок сушеного абрикоса"
          price="990 ₽"
          isHit
          imagePosition="top"
        />
        <Card
          imageLink={CardHitImage2}
          title="BEAUTYCOL АБРИКОС"
          description="Гидрат рыбного коллагена<br>
+порошок сушеного абрикоса"
          price="990 ₽"
          isHit
        />
        <Card
          imageLink={CardHitImage3}
          title="BEAUTYCOL АБРИКОС"
          description="Гидрат рыбного коллагена<br>
+порошок сушеного абрикоса"
          price="990 ₽"
          isHit
        />
        <Card
          imageLink={CardHitImage4}
          title="BEAUTYCOL АБРИКОС"
          description="Гидрат рыбного коллагена<br>
+порошок сушеного абрикоса"
          price="990 ₽"
          isHit
        />
        <Card
          imageLink={CardHitImage5}
          title="BEAUTYCOL АБРИКОС"
          description="Гидрат рыбного коллагена<br>
+порошок сушеного абрикоса"
          price="990 ₽"
          isHit
        />
        <Card
          imageLink={CardHitImage5}
          title="BEAUTYCOL АБРИКОС"
          description="Гидрат рыбного коллагена<br>
+порошок сушеного абрикоса"
          price="990 ₽"
          isHit
        />
      </CardLayout>
    </Section>
  );
};
