import styled from "styled-components";

function App() {
  return (
    <Wrapper>
      <header>
        <ImagePreview
          src="/img/illustration-article.svg"
          alt="Blog illustration"
        />
      </header>

      <ContentWrapper>
        <Badge>Learning</Badge>
        <PublicationDate dateTime="2023-12-21">
          Published 21 Dec 2023
        </PublicationDate>
        <Title>HTML & CSS foundations</Title>
        <Description>
          These languages are the backbone of every website, defining structure,
          content, and presentation.
        </Description>
      </ContentWrapper>

      <Footer>
        <AuthorPicture src="/img/image-avatar.webp" alt="" />
        <AuthorName>Greg Hooper</AuthorName>
      </Footer>
    </Wrapper>
  );
}

const Wrapper = styled.article`
  padding: var(--spacing-lg);
  background-color: var(--color-white);
  max-width: 384px;
  border-radius: 20px;
  margin-left: var(--spacing-lg);
  margin-right: var(--spacing-lg);
  border: 1px inset var(--color-black);
  box-shadow: 8px 8px hsl(0, 0%, 0%);
  display: flex;
  flex-direction: column;
  gap: var(--spacing-lg);
`;

const ImagePreview = styled.img`
  border-radius: 10px;
  width: 100%;
  object-fit: cover;
  height: 200px;
`;

const ContentWrapper = styled.section`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-md);
`;

const Badge = styled.span`
  display: inline-block;
  background-color: var(--color-primary);
  padding: var(--spacing-sm) var(--spacing-md);
  /* optical adjustment */
  padding-bottom: calc(var(--spacing-sm) - 2px);

  border-radius: 4px;
  font-weight: var(--weight-bold);
  font-size: var(--text-body-s);
  width: fit-content;
`;

const PublicationDate = styled.time`
  font-size: var(--text-body-s);
`;

const Title = styled.h1`
  &:hover {
    color: var(--color-primary);
  }
`;

const Description = styled.p`
  color: var(--color-text);
`;

const Footer = styled.footer`
  display: flex;
  align-items: center;
  gap: var(--spacing-md);
`;

const AuthorPicture = styled.img`
  width: 32px;
  height: 32px;
`;

const AuthorName = styled.p`
  --text-body-s: ${14 / 16}rem;

  font-weight: var(--weight-bold);
  font-size: var(--text-body-s);
`;

export default App;
