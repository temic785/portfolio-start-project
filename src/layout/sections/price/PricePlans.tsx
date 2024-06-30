import styled from "styled-components";
import { TitleSection } from "../../../components/TitleSection";
import { SpanSection } from "../../../components/SpanSection";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Card } from "./Card";

const cardItems = [
  { icon: "check", span: "UI Design" },
  { icon: "check", span: "web development" },
  { icon: "cross", span: "logo design" },
  { icon: "cross", span: "seo optimization" },
  { icon: "cross", span: "wordPress integration" },
  { icon: "cross", span: "5 Websites" },
  { icon: "cross", span: "unlimited user" },
  { icon: "cross", span: "20 gB bandwith" },
];

const cardItems2 = [
  { icon: "check", span: "UI Design" },
  { icon: "check", span: "web development" },
  { icon: "check", span: "logo design" },
  { icon: "check", span: "seo optimization" },
  { icon: "cross", span: "wordPress integration" },
  { icon: "cross", span: "5 Websites" },
  { icon: "cross", span: "unlimited user" },
  { icon: "cross", span: "20 gB bandwith" },
];
const cardItems3 = [
  { icon: "check", span: "UI Design" },
  { icon: "check", span: "web development" },
  { icon: "check", span: "logo design" },
  { icon: "check", span: "seo optimization" },
  { icon: "check", span: "wordPress integration" },
  { icon: "check", span: "5 Websites" },
  { icon: "check", span: "unlimited user" },
  { icon: "check", span: "20 gB bandwith" },
];

export const PricePlans = () => {
  return (
    <StyledPrice>
      <TitleSection>Price plans</TitleSection>
      <SpanSection>
        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
        sint. Velit officia consequat duis enim velit mollit. lorem ipsum
      </SpanSection>
      <FlexWrapper>
        <Card
          title="silver"
          price="0.00"
          description="For most businesses that want to
optimize web queries"
          menuCardItems={cardItems}
        />
        <Card
          title="gold"
          price="50.00"
          description="For most businesses that want to
optimize web queries"
          menuCardItems={cardItems2}
        />
        <Card
          title="dimond"
          price="80.00"
          description="For most businesses that want to
optimize web queries"
          menuCardItems={cardItems3}
        />
      </FlexWrapper>
    </StyledPrice>
  );
};
const StyledPrice = styled.section`
  border: 1px solid green;
`;
