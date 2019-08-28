import Vue from 'vue';
import Router from 'vue-router';
import Search from './components/Search'
import Profile from './components/Profile';
import MatchHistory from './components/MatchHistory';

Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            component: Search
        },
        {
            path: '/profile/:platform/:name',
            component: Profile,
            children: [
                {
                    path: '/',
                    component: MatchHistory
                }
            ]
        }
    ]
})