import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Layout from '../Layout/Layout';
import AllReview from '../Page/AllReview';
import AddReviews from '../Page/AddReviews';
import MyReview from '../Page/MyReview';
import GameWatchList from '../Page/GameWatchList';
import SignUp from '../Page/SignUp';
import SignIn from '../Page/SignIn';
import ReviewDetails from '../Page/ReviewDetails';
import UpdateReview from '../Page/UpdateReview';

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
        path: 'myReview/:email',
        element:<MyReview></MyReview>,
        loader:({params})=> fetch(`http://localhost:5500/myReview/${params.email}`)
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
    },
    {
        path:'allReview/reviewDetails/:id',
        element:<ReviewDetails></ReviewDetails>,
        loader:({params})=> fetch(`http://localhost:5500/reviews/${params.id}`)
    },
    {
        path: '/updateReview/:id',
        element: <UpdateReview></UpdateReview>,
        loader:({params})=> fetch(`http://localhost:5500/reviews/${params.id}`)
    }
])

export default router;