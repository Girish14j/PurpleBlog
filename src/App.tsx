import { Toaster } from './components/ui/toaster';
import { Toaster as Sonner } from './components/ui/sonner';
import { TooltipProvider } from './components/ui/tooltip';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import Index from './pages/Index';
import NotFound from './pages/NotFound';
import CreatePost from './pages/CreatePost';
import ViewPost from './pages/ViewPost';
import EditPost from './pages/EditPost';
import Categories from './pages/Categories';

const queryClient = new QueryClient();

const App: React.FC = () => {
  return (
    <Router future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider>
          <TooltipProvider>
            <Toaster />
            <Sonner />
            <Routes>
              <Route path='/' element={<Index />} />
              <Route path='/create' element={<CreatePost />} />
              <Route path='/post/:id' element={<ViewPost />} />
              <Route path='/edit/:id' element={<EditPost />} />
              <Route path='/categories' element={<Categories />} />
              <Route path='*' element={<NotFound />} />
            </Routes>
          </TooltipProvider>
        </ThemeProvider>
      </QueryClientProvider>
    </Router>
  );
};

export default App;
