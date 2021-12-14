import './styles/App.scss';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

import AboutSection from './components/Sections/AboutSection/AboutSection';
import BlogHome from './components/Blog/BlogHome/BlogHome';
import FeaturesSection from './components/Sections/FeaturesSection/FeaturesSection';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import HeaderAbout from './components/Header/HeaderAbout';
import Layout from './components/Layout/Layout';
import LoginForm from './components/LoginForm/LoginForm'
import Navbar from './components/Navbar/Navbar';
import PricingSection from './components/Sections/PricingSection/PricingSection';
import RegisterForm from './components/RegisterForm/RegisterForm'
import { SocialMediaNav } from './components/Sections/SocialMedias/SocialMediaNav';
import SuscribeSection from './components/Sections/SuscribeSection/SuscribeSection';
import TestimonialSection from './components/Sections/TestimonialSection/TestimonialSection';
import UserProfile from './components/UserProfile/UserProfile';
//import BlogPreviewSection from './components/Sections/BlogPreviewSection/BlogPreviewSection';
//import ContactSection from './components/Sections/ContactSection/ContactSection';


function App() {
    return (
        <BrowserRouter>
            <Layout>
                <Navbar/>
                <Switch>
                    <Route exact path='/'>
                        <Header options={'home'}/>
                        <FeaturesSection/>
                        <TestimonialSection/>
                        <SocialMediaNav/>
                        {/* <BlogPreviewSection/> */}
                        <SuscribeSection/>
                    </Route>

                    {/* <Route exact path='/about'>
                        <HeaderAbout options={'about'} />
                        <AboutSection />
                    </Route> */}

                    <Route exact path='/contacto'>
                        <HeaderAbout options={'about'} />
                        <AboutSection />
                        {/* <ContactSection /> */}
                    </Route>

                    <Route exact path='/pricing'>
                        <PricingSection />
                    </Route>

                    <Route exact path='/blog'>
                        <BlogHome />
                    </Route>

                    <Route exact path='/dashboard/:id'>
                        <UserProfile />
                    </Route>

                    <Route exact path='/signup'>
                        <RegisterForm />
                    </Route>

                    <Route exact path='/signin'>
                        <LoginForm />
                    </Route>

                </Switch>
                <Footer/>
            </Layout>
        </BrowserRouter>
      
    );
}

export default App;
