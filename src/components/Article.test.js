import React from 'react';
import '@testing-library/jest-dom';

import userEvent from '@testing-library/user-event';
// import MutationObserver from 'mutationobserver-shim';

import Article from './Article';
import { render, screen } from 'react-dom';

const testArticle = [{
    
        id: 111,
        headline: "Less than half of Seattle homes have air conditioning. After a deadly heat wave, ‘everybody’ wants it.",
        createdOn: Date.now(),
        author:"",
        image: 134,
        summary: "Triple-digit temperatures led to a spike in demand across the region.",
        body: "Inside the attic of a one-story gray house in a Seattle suburb last week, Jeff Bryson gingerly strapped copper piping across the rafters while wearing a white face mask and a headlamp. The temperature was about 110 degrees in the tight space, which was covered in insulation dust. His work was meant to cool the rest of the home."   
    },
    {
        id: 222,
        headline: "Community College of Philadelphia to require vaccines, the first public college in the region to do so.",
        createdOn: Date.now(),
        author: "Susan Snyder",
        image: 175,
        summary: "The requirement, which will allow exemptions for medical and religious reasons, won’t be in place for the start of the semester.",
        body: "The Pennsylvania State System of Higher Education has said its 14 public universities, including West Chester and Cheyney, don’t have the authority to require a vaccine and would need legislation. Neither Pennsylvania State University nor Temple University, which are state-related, have required the vaccines either."
    }]

test('renders component without errors', ()=> {
    render(<Article article={testArticle}/>)
});

test('renders headline, author from the article when passed in through props', ()=> {
    render(<Article article={testArticle}/>);
    const theHeadline = screen.queryAllByTestId('headline');
    const theAuthor = screen.queryAllByTestId('author');

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