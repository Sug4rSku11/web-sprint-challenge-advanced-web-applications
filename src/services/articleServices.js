import axiosWithAuth from "../utils/axiosWithAuth";
import React, { useState } from 'react';

const articleService = ()=> {
    return axiosWithAuth()
    .get('/articles')
}

export default articleService;

//Task List:
//1. Complete articleServices. This module should make an authenticated call and return an array of those articles.