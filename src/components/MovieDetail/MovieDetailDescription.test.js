import React from 'react';
import { render } from '@testing-library/react';

import MovieDetailDescription from './MovieDetailDescription';

describe('<MovieDetailDescription />', () => {
  it('Should render properly', () => {
    const text =
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut vero pariatur deserunt modi similique itaque soluta a veritatis officiis architecto praesentium earum quo rem nesciunt deleniti eius dolores, porro quos. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est, quos earum inventore voluptas tempora aperiam voluptates deleniti deserunt quisquam ab officia voluptate accusantium accusamus laboriosam commodi itaque reiciendis possimus magni!';
    const { getByText } = render(<MovieDetailDescription description={text} />);

    expect(getByText(/lorem/i)).toBeInTheDocument();
  });
});
