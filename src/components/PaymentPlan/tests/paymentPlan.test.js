import { axe, toHaveNoViolations } from 'jest-axe';
import { render, fireEvent, screen } from '@testing-library/react';
import PaymentPlan from '../paymentPlan';


describe('<PaymentPlan /> components snapshots', () => {
  it('should match the snapshot', () => {
    const { container } = render(
      <PaymentPlan />,
    );
    expect(container).toMatchSnapshot();
  });
});

describe('<PaymentPlan /> component', () => {
  it('should exist component', () => {
    const { container } = render(
      <PaymentPlan />,
    );
    expect(container).toBeTruthy();
  });
});

describe('<PaymentPlan /> for a11y compliance', () => {
  expect.extend(toHaveNoViolations);
  it('should not have a11y violations', async () => {
    const { container } = render(
      <PaymentPlan />,
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});

describe('<PaymentPlan /> component to ensure it can be interacted with', () => {
  it('should render the summary', () => {
    const { container } = render(
      <PaymentPlan />,
    );
    expect(container).toBeInTheDocument();
    fireEvent.click(screen.getByDisplayValue('Calculate'));
    expect(screen.getByText('Calculation Summary')).toBeVisible();
    expect(screen.getByText('Mortgage Summary')).toBeVisible();
  });
});