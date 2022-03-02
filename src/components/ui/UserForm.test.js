import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import UserForm from './UserForm';

// const mockedNavigator = jest.fn();

jest.mock("react-router-dom", () => ({
  ...(jest.requireActual("react-router-dom")),
  useNavigate: () => ({
    navigate: jest.fn().mockImplementation(() => ({}))
  })
}));
// expect(mockedNavigator).toHaveBeenCalled();

describe('UserForm 컴포넌트 테스트', () => {
    it('고객 등록 폼 렌더링', () => {
      const {getByText} = render(<UserForm onSubmit={() => null} />);
      // eslint-disable-next-line testing-library/prefer-screen-queries
      const button = getByText(/submit/i);

      expect(button).toBeInTheDocument();
    })
    it('고객 등록 폼 제출 후 alert창 확인', () => {
      const alert = jest.spyOn(window,'alert').mockImplementation();
      const {getByText} = render(<UserForm onSubmit={() => null} />);
      // eslint-disable-next-line testing-library/prefer-screen-queries
      const button = getByText(/submit/i);

      fireEvent.click(button);

      expect(alert).toHaveBeenCalled();
    })
    it('props값이 있을 경우 고객 수정 Edit, 삭제 Delete 버튼 렌더링', () => {
      const mockUser = 'user';
      const {getByText} = render(<UserForm user={mockUser} />);
      // eslint-disable-next-line testing-library/prefer-screen-queries
      const editButton = getByText(/Edit/i);
      // eslint-disable-next-line testing-library/prefer-screen-queries
      const delButton = getByText(/Delete/i);

      expect(editButton).toBeInTheDocument();
      expect(delButton).toBeInTheDocument();
    })
})