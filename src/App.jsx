import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom'

import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'

import Home from './pages/home/Home'
import Add from './pages/add/Add'
import Gigs from './pages/gigs/Gigs'
import Gig from './pages/gig/Gig'
import MyGigs from './pages/myGigs/MyGigs'
import Orders from './pages/orders/Orders'
import Messages from './pages/messages/Messages'
import Message from './pages/message/Message'
import Register from './pages/register/Register'
import Login from './pages/login/Login'

function App() {
	const Layout = () => {
		return (
			<div className='app'>
				<Navbar />
				<Outlet />
				<Footer />
			</div>
		)
	}

	const router = createBrowserRouter([
		{
			path: '/',
			element: <Layout />,
			children: [
				{
					path: '/',
					element: <Home />
				},
				{
					path: '/add',
					element: <Add />
				},
				{
					path: '/gigs',
					element: <Gigs />
				},
				{
					path: '/gig/:id',
					element: <Gig />
				},
				{
					path: '/mygigs',
					element: <MyGigs />
				},
				{
					path: '/orders',
					element: <Orders />
				},

				{
					path: '/messages',
					element: <Messages />
				},
				{
					path: '/message/:id',
					element: <Message />
				},
				{
					path: '/register',
					element: <Register />
				},
				{
					path: '/login',
					element: <Login />
				}
			]
		}
	])

	return (
		<div>
			<RouterProvider router={router} />
		</div>
	)
}

export default App
