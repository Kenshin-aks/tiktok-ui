// Layout
import { OnlyHeaderLayout } from '~/components/Layouts';

import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Profile from '~/pages/Profile';
import Upload from '~/pages/Upload';
import Register from '~/pages/Register';

// Public Routes Không cần đăng nhập
const publicRoutes = [
    {
        path: '/',
        component: Home,
    },
    {
        path: '/following',
        component: Following,
    },
    {
        path: '/profile',
        component: Profile,
    },
    {
        path: '/upload',
        component: Upload,
        layout: OnlyHeaderLayout,
    },
    {
        path: '/register',
        component: Register,
        layout: null,
    },
];
// Private Route cần đăng nhập mới xem được
const privateRoutes = [];

export { publicRoutes, privateRoutes };
