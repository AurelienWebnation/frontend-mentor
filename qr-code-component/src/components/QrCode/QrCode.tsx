import { Card } from "../Card";
import styled from "styled-components";

export function QrCode() {
  return (
    <Card>
      <Wrapper>
        <QrCodeImage src="/img/image-qr-code.png" alt="" />
        <Title>Improve your front-end skills by building projects</Title>
        <Description>
          Scan the QR code to visit Frontend Mentor and take your coding skills
          to the next level
        </Description>
      </Wrapper>
    </Card>
  );
}

const Wrapper = styled.div`
  padding: 16px;
  text-align: center;
  max-width: 320px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const QrCodeImage = styled.img`
  border-radius: calc(var(--border-radius) / 2);
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 24px;
`;

const Title = styled.h1`
  color: var(--color-title);
  font-size: 22px;
  margin-bottom: 16px;
  font-weight: 700;
`;

const Description = styled.p`
  max-width: 256px;
  margin-bottom: 24px;
`;
