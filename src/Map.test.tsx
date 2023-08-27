import { render, fireEvent, screen } from '@testing-library/react';
import ComponentForTest from './components/ComponentForTest';

describe('ㅎㅇㅎㅇ', () => {
  test('테스트 문구', () => {
    const { container } = render(<ComponentForTest />);

    fireEvent.click(screen.getByText('ㅎㅇㅎㅇ'));

    const button = container.getElementsByTagName('button')[0];

    expect(button.textContent).toBe('하이하이');
  });
});
