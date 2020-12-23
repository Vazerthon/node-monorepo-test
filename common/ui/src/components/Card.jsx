import { styled } from '../styling'

const Card = styled.div`
  display: flex;
  flex-direction: column;
  color: 1px solid ${({ theme }) => theme.colour.primary};
  background-color: ${({ theme }) => theme.colour.secondary};
`;

export default Card;
