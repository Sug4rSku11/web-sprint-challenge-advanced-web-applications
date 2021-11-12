import React from 'react';
import '@testing-library/jest-dom';

import userEvent from '@testing-library/user-event';
// import MutationObserver from 'mutationobserver-shim';

import Article from './Article';
import { render, screen } from 'react-dom';

const testArticle = {
    id:"12345",
    headline: "Bla Bla",
    createdOn: Date.now(),
    author: "Unknown Source",
    image: 111,
    summary: "This is an article of nonsense.",
    body: "This article has complete nonsense in it."
}
const testArticleNoAuthor = {
    id:"12345",
    headline: "Bla Bla",
    createdOn: Date.now(),
    author: "",
    image: 111,
    summary: "This is an article of nonsense.",
    body: "This article has complete nonsense in it."

}

test('renders component without errors', ()=> {
    render(<Article article={testArticle}/>)
});

test('renders headline, author from the article when passed in through props', ()=> {
    render(<Article article={testArticle}/>);
    const theHeadline = screen.queryByText(/bla bla/i);
    const theAuthor = screen.queryByText(/Unknown Source/i);

    expect(theHeadline).toBeInTheDocument();
    expect(theAuthor).toBeInTheDocument();
});

test('renders "Associated Press" when no author is given', ()=> {
    render(<Article article={testArticleNoAuthor}/>);
    const someAuthor = screen.queryByText(/associated press/i);
    expect(someAuthor).toBeInTheDocument();
});

test('executes handleDelete when the delete button is pressed', ()=> {
    const mockHandleDelete = jest.fn();
    render(<Article article={testArticle} handleDelete={mockHandleDelete}/>);
    const theButton = screen.queryByTestId('deleteButton');
    userEvent.click(theButton);
    expect(mockHandleDelete).toBeCalledTimes(1)
});

//Task List:
//1. Complete all above tests. Create test article data when needed.