import styled from "@emotion/styled";
// import { Currency, Card } from "@demo/ui";

const X = styled.div`
  color: purple;
  background-color: ${({ theme }) => theme.colour.primary};
`;

function App() {
  return (
    <div>
      <X>
        `styled` is imorted from the common lib and used to create this
        component. That seems to work fine as long as theme isn't used
      </X>

      {/* This component is imported from the common lib but does not use any theme, it also works fine */}
      {/* <Currency value={10} /> */}

      {/* This component is imported from the common lib and relies on theme values, uncommenting it causes an exception */}
      {/* <Card>hi</Card> */}
    </div>
  );
}

export default App;
