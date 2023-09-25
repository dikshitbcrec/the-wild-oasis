import {BrowserRouter, Navigate, Route, Routes} from 'react-router-dom'
import Dashboard from './pages/Dashboard';
import Account from './pages/Account';
import Bookings from './pages/Bookings';
import Cabins from './pages/Cabins';
import Users from './pages/Users';
import Setting from './pages/Settings';
import Login from './pages/Login';
import PageNotFound from './pages/PageNotFound';
import GlobalStyle from './styles/GlobalStyle';
import AppLayout from './ui/AppLayout';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { Toaster } from "react-hot-toast";
import BookingById from './pages/BookingById';
import CheckIn from './ui/CheckIn';
import ProtectedRoute from './ui/ProtectedRoute';
import { DarkModeProvider } from './context/DarkModeContext';
const queryClient= new QueryClient(
  {
    defaultOptions:{
      queries:{ 
        staleTime: 60 * 1000,
      }
    }
  }
);
const App=()=>{

  return(
   <DarkModeProvider>
    <QueryClientProvider client={queryClient}>
    <ReactQueryDevtools initialIsOpen={false}/>
    <GlobalStyle/>
      <BrowserRouter>
      <Routes>
        <Route element={<ProtectedRoute> <AppLayout/></ProtectedRoute>   }>

        <Route index element={<Navigate replace to='dashboard'/>}/>
        <Route path='dashboard' element={<Dashboard/>}/>
        <Route path='account' element={<Account/>}/>
        <Route path='booking' element={<Bookings/>}/>
        <Route path='booking/:bookingId' element={<BookingById/>}/>
        <Route path='checkin/:bookingId' element={<CheckIn/>}/>
        <Route path='cabin' element={<Cabins/>}/>
       
        <Route path='setting' element={<Setting/>}/>
        <Route path='user' element={<Users/>}/>
        <Route path='account' element={<Account/>} />

        </Route>
        
        <Route path='login' element={<Login/>}/>
        <Route path='*' element={<PageNotFound/>}/>
      </Routes>
      </BrowserRouter>
      <Toaster
        position="top-center"
        gutter={12}
        containerStyle={{ margin: "8px" }}
        toastOptions={{
          success: {
            duration: 3000,
          },
          error: {
            duration: 5000,
          },
          style: {
            fontSize: "16px",
            maxWidth: "500px",
            padding: "16px 24px",
            backgroundColor: "var(--color-grey-0)",
            color: "var(--color-grey-700)",
          },
        }}
      />
      </QueryClientProvider>
      </DarkModeProvider>
      
   
  )

}
export default App;