import React from 'react';
import { render } from '@testing-library/react';
import UserList from './UserList';

describe('User List 컴포넌트 테스트', () => {
    it('render title text', () => {
        const {getByText} = render(<UserList />);
        // eslint-disable-next-line testing-library/prefer-screen-queries
        const title = getByText('목록');
        expect(title).toBeInTheDocument();
    })
})