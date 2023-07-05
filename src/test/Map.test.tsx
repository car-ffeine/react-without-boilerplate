import { render, fireEvent, screen } from '@testing-library/react';
import ComponentForTest from '../components/ComponentForTest';

it('테스트 문구', async () => {
  const { container } = render(<ComponentForTest />);

  fireEvent.click(screen.getByText('ㅎㅇㅎㅇ'));

  const button = container.getElementsByTagName('button')[0];

  expect(button.textContent).toBe('하이하이');
});
