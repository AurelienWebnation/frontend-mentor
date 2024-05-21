import styled, { css } from 'styled-components';
import { PropsWithChildren } from 'react';
import { Card } from '../Card';

type ListProps = PropsWithChildren & {
  elements?: string[];
  type?: 'unordered' | 'ordered';
};

export function List({ elements, type = 'unordered', children }: ListProps) {
  const Wrapper = type === 'ordered' ? OrderedWrapper : UnorderedWrapper;

  if (elements) {
    return (
      <Wrapper>
        {elements.map((element, index) => (
          <li
            key={index}
            dangerouslySetInnerHTML={{ __html: `<span>${element}</span>` }}
          />
        ))}
      </Wrapper>
    );
  }

  return <Wrapper>{children}</Wrapper>;
}

const baseStyle = css`
  margin-left: var(--spacing-xs);
  display: grid;
  gap: var(--spacing-xs);

  & > li {
    display: grid;
    grid-template-columns: 16px auto;
    align-items: center;
    gap: var(--spacing-sm);
  }
`;

const UnorderedWrapper = styled.ul`
  ${baseStyle};

  & > li::before {
    content: '';
    display: inline-block;
    width: 4px;
    height: 4px;
    border-radius: 100%;
    background: var(--color-brandy-red);

    ${Card} & {
      background: var(--color-dark-raspberry);
    }
  }
`;

const OrderedWrapper = styled.ol`
  ${baseStyle};
  counter-reset: list-counter;

  & > li {
    align-items: start;
  }

  & > li::before {
    counter-increment: list-counter;
    content: counter(list-counter) '. ';
    font-weight: 700;
    color: var(--color-brandy-red);
  }
`;
