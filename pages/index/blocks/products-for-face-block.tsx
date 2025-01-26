import { Card } from "@components/card";
import { CardLayout } from "@components/card-layout";
import { Section } from "@components/section";
import forFaceImage1 from "../assets/for-face-image-1.webp";
import forFaceImage2 from "../assets/for-face-image-2.webp";
import forFaceImage3 from "../assets/for-face-image-3.webp";
import forFaceImage4 from "../assets/for-face-image-4.webp";
import forFaceImage5 from "../assets/for-face-image-5.webp";
import forFaceImage6 from "../assets/for-face-image-6.webp";

export const ProductsForFaceBlock = () => {
  return (
    <Section title="Для лица" id="for-face">
      <CardLayout>
        <Card
          imageLink={forFaceImage1}
          title="BEAUTYCOL АБРИКОС"
          description="Гидрат рыбного коллагена<br>
+порошок сушеного абрикоса"
          price="990 ₽"
        />
        <Card
          imageLink={forFaceImage2}
          title="BEAUTYCOL АБРИКОС"
          description="Гидрат рыбного коллагена<br>
+порошок сушеного абрикоса"
          price="990 ₽"
          imagePosition="bottom"
        />
        <Card
          imageLink={forFaceImage3}
          title="BEAUTYCOL АБРИКОС"
          description="Гидрат рыбного коллагена<br>
+порошок сушеного абрикоса"
          price="990 ₽"
        />
        <Card
          imageLink={forFaceImage4}
          title="BEAUTYCOL АБРИКОС"
          description="Гидрат рыбного коллагена<br>
+порошок сушеного абрикоса"
          price="990 ₽"
        />
        <Card
          imageLink={forFaceImage5}
          title="BEAUTYCOL АБРИКОС"
          description="Гидрат рыбного коллагена<br>
+порошок сушеного абрикоса"
          price="990 ₽"
        />
        <Card
          imageLink={forFaceImage6}
          title="BEAUTYCOL АБРИКОС"
          description="Гидрат рыбного коллагена<br>
+порошок сушеного абрикоса"
          price="990 ₽"
        />
      </CardLayout>
    </Section>
  );
};
