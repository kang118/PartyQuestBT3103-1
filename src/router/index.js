import Vue from 'vue';
import VueRouter from 'vue-router';
import Login from '../components/Login.vue';
// import LandingPage from '../views/LandingPage.vue';
// import Dashboard from '../components/Dashboard.vue';
import Register from '../views/Register.vue';
import Home from '../views/Home.vue';
import CreatePQ from '../views/CreatePQ.vue';
import ProfilePage from '../views/ProfilePage';
import MyPQPage from '../views/MyPQPage';
import ChatsPage from '../views/ChatsPage';
import SavedPQPage from '../views/SavedPQPage';
import CreatedPQPage from '../views/CreatedPQPage';
import PqDetails from '../views/PqDetailsPage';
import JoinedPQPage from '../views/JoinedPQPage';
import SearchResultsPage from '../views/SearchResultsPage';
import SearchResultPQ from '../components/SearchResultPQ';
import SearchResultUser from '../components/SearchResultUser';
import EditProfilePage from '../views/EditProfilePage';
import OtherUserProfile from '../views/OtherUserProfilePage';
import ResetPW from '../components/ResetPassword';
import AboutUs from '../components/AboutUs';
import ContactUs from '../components/ContactUs';
import LandingPage from '../views/LandingPage';
import PqDetailsPage2 from '../views/PqDetailsPage2';

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'LandingPage',
        component: LandingPage,
    },
    // {
    //     path: '/landingpage',
    //     name: 'Landing',
    //     component: LandingPage,
    // },
    {
        path: '/login',
        name: 'Login',
        component: Login,
    },
    {
        path: '/register',
        name: 'Register',
        component: Register,
    },
    // {
    //     path: '/dashboard',
    //     name: 'Dashboard',
    //     component: Dashboard,
    // },
    {
        path: '/home',
        name: 'Home',
        component: Home,
    },
    {
        path: '/create',
        name: 'CreatePQ',
        component: CreatePQ,
    },
    {
        path: '/profile',
        name: 'ProfilePage',
        component: ProfilePage,
    },
    {
        path: '/profile/user/:id',
        name: 'OtherUserProfile',
        component: OtherUserProfile,
    },
    {
        path: '/editProfile',
        name: 'EditProfilePage',
        component: EditProfilePage,
    },
    {
        path: '/pq',
        name: 'PartyQuest',
        component: MyPQPage,
    },
    {
        path: '/chats',
        name: 'ChatsPage',
        component: ChatsPage,
    },
    {
        path: '/mypq',
        name: 'MyPQPage',
        component: MyPQPage,
    },
    {
        path: '/mypq/SavedPQPage',
        name: 'SavedPQPage',
        component: SavedPQPage,
    },
    {
        path: '/mypq/JoinedPQPage',
        name: 'JoinedPQPage',
        component: JoinedPQPage,
    },
    {
        path: '/mypq/CreatedPQPage',
        name: 'CreatedPQPage',
        component: CreatedPQPage,
    },
    {
        path: '/searchresults',
        name: 'SearchResults',
        component: SearchResultsPage,
    },
    {
        path: '/searchresults/pq',
        name: 'SearchResultPQ',
        component: SearchResultPQ,
    },
    {
        path: '/searchresults/user',
        name: 'SearchResultUser',
        component: SearchResultUser,
    },
    {
        path: '/pq/listing',
        name: 'Pq Details',
        component: PqDetails,
    },
    {
        path: '/pq/:id',
        name: 'PQDetails',
        component: PqDetailsPage2,
        // props: true,
    },
    {
        path: '/testing/:id',
        name: 'pqdetailspg',
        component: PqDetailsPage2,
    },
    {
        path: '/resetpassword',
        name: 'ResetPW',
        component: ResetPW,
    },
    {
        path: '/aboutus',
        name: 'AboutUs',
        component: AboutUs,
    },
    {
        path: '/contactus',
        name: 'ContactUs',
        component: ContactUs,
    },
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
});

export default router;
