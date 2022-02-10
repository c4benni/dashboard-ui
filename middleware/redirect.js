export default function({ redirect, route }) {
    //   redirect from /dashboard to dashboad/overview
    if (/^\/dashboard\/?$/.test(route.path)) {
        redirect('/dashboard/overview')
    }
}