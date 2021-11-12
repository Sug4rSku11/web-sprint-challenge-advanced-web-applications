import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import View from './View';
import articleService from '../services/articleServices';
jest.mock('../services/articleServices')

const testArticles = [
    {
        id:"12345",
        headline: "Bla Bla",
        createdOn: Date.now(),
        author: "Unknown Source",
        image: 111,
        summary: "This is an article of nonsense.",
        body: "This article has complete nonsense in it."
    },
    {
        d:"67891",
        headline: "Bla Bla 2",
        createdOn: Date.now(),
        author: "Known Source",
        image: 222,
        summary: "This is an article of nonsense.",
        body: "This article has complete nonsense in it."
    },
    {
        d:"23456",
        headline: "Bla Bla 3",
        createdOn: Date.now(),
        author: "Some Source",
        image: 333,
        summary: "This is an article of nonsense.",
        body: "This article has complete nonsense in it."
    },
]

test("renders zero articles without errors", async () => {
    articleService.mockResolvedValueOnce();
    const mockArticleService = jest.fn();
    render(<View articleService={mockArticleService}/>);
    await waitFor(() => {
        expect(mockArticleService).not.toBeCalled();
    })
});

test("renders three articles without errors", async ()=> {
    articleService.mockResolvedValueOnce(testArticles);
    const mockArticleService = jest.fn();
    render(<View articleService={mockArticleService} />);
    await waitFor(() => {
        const myArticle = screen.getAllByTestId('article');
        expect(myArticle).toHaveLength(3);
    })
});

//Task List
//1. Complete the above two tests. Make sure to mocking the articleService call before rendering.