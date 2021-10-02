import Container from './components/container/Container';

import Feedback from './components/feedback/Feedback';

function App() {
  return (
    <Container>
      <Feedback initialValue={0} />
    </Container>
  );
}

export default App;
