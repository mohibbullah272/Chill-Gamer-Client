import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Layout from '../Layout/Layout';
import AllReview from '../Page/AllReview';
import AddReviews from '../Page/AddReviews';
import MyReview from '../Page/MyReview';
import GameWatchList from '../Page/GameWatchList';

const router = createBrowserRouter([
    {
        path:'/',
        element: <Layout></Layout>
    },
    {
        path:'allReview',
        element:<AllReview></AllReview>
    },
    {
        path: 'addReview',
        element: <AddReviews></AddReviews>
    },
    {
        path: 'myReview',
        element:<MyReview></MyReview>
    },
    {
        path:'gameWatchList',
        element:<GameWatchList></GameWatchList>
    }
])

export default router;