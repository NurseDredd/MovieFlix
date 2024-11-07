import {describe, it} from 'vitest';
import {render, screen} from '@testing-library/react';

import { HomePage } from './HomePage';

describe('HomePage component', () => {
it('should have a heading with the test MovieFlix', () =>{
    render(<HomePage/>);
    screen.getByRole('heading', {name: /MovieFlix/i});
});
});