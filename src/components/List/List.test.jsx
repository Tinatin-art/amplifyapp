import { render, screen } from '@testing-library/react';

import List from './List';

const data = ['html','css', 'js']

describe('List component', () => {
    test('List renders', () => {
        render(<List items={data}/>)
        
        expect(screen.getByRole('list')).toBeInTheDocument();
        expect(screen.getByText('html')).toBeInTheDocument();
    });

    test('List renders without data', () => {
        render(<List/>)

        expect(screen.queryByRole('list')).toBeNull();
    })

    test('List snapshot', () => {
        const lists = render(<List items={data} />);

        expect(lists).toMatchSnapshot();
    })

    test('List empty snapshot', () => {
        const lists = render(<List/>);

        expect(lists).toMatchSnapshot()
    })
})