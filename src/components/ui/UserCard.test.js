import React from 'react';
import { render, screen } from '@testing-library/react';
import UserCard from './UserCard';
import { BrowserRouter } from 'react-router-dom';

describe('User Card 고객 정보 테스트', () => {
    it('고객 정보 렌더링', () => {
        const mockUser = 'user';
        const {findByText} = render(
            <BrowserRouter>
                <UserCard user={mockUser} />
            </BrowserRouter>
        );

        // eslint-disable-next-line testing-library/await-async-query
        screen.findByText(/출생년도 : /);
        // eslint-disable-next-line testing-library/await-async-query
        screen.findByText(/성 별 : /);
    })
})