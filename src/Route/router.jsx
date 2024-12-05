import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Layout from '../Layout/Layout';
import AllReview from '../Page/AllReview';
import AddReviews from '../Page/AddReviews';
import MyReview from '../Page/MyReview';
import GameWatchList from '../Page/GameWatchList';
import SignUp from '../Page/SignUp';
import SignIn from '../Page/SignIn';

const router = createBrowserRouter([
    {
        path:'/',
        element: <Layout></Layout>
    },
    {
        path:'allReview',
        element:<AllReview></AllReview>,
        loader: ()=> fetch('http://localhost:5500/reviews')
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
    },
    {
        path:'signUp',
        element: <SignUp></SignUp>
    },
    {
        path:'login',
        element:<SignIn></SignIn>
    }
])

export default router;