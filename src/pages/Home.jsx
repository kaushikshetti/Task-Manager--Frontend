import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Tasks from '../components/Tasks';
import MainLayout from '../layouts/MainLayout';

const Home = () => {
  const authState = useSelector(state => state.authReducer);
  const { isLoggedIn } = authState;

  useEffect(() => {
    document.title = authState.isLoggedIn ? `${authState.user.name}'s tasks` : 'Task Manager';
  }, [authState]);

  return (
    <>
      <MainLayout>
        {!isLoggedIn ? (
          <div className="bg-gradient-to-r from-blue-400 to-indigo-500 text-white h-screen flex flex-col justify-center items-center px-4">
            <h1 className="text-4xl font-bold mb-4 animate-fade-in">Welcome to Task Manager App</h1>
            <p className="text-lg text-center mb-8 animate-fade-in">Join now to manage your tasks</p>
            <Link
              to="/signup"
              className="text-lg block bg-primary text-white rounded-md px-6 py-3 hover:bg-primary-dark transition mb-4 animate-fade-in"
            >
              Get Started
            </Link>
            <Link
              to="/login"
              className="text-secondary text-base hover:underline animate-fade-in"
            >
              Already have an account? Log in here
            </Link>
          </div>
        ) : (
          <div className="flex flex-col items-center">
            <h1 className="text-2xl font-bold mt-8 mb-4">Welcome {authState.user.name}</h1>
            <Tasks />
          </div>
        )}
      </MainLayout>
    </>
  );
};

export default Home;
