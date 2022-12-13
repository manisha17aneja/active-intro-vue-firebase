import Vue from 'vue';
import Router from 'vue-router';

import Login from '../components/Login'
import Register from '../components/Register'
import Dashboard from '../components/Dashboard'
import dashboards from '../components/dashboards'
import dashboards1 from '../components/dashboards1'
import HelloWorld from '../components/HelloWorld'

//Success
import Success from '../components/success'

//Cancel
import Cancel from '../components/cancel'

//newsletter
import newsletter from '../components/newsletter'

//About
import About from '../components/About'

//termsAndConditions 
import termsAndConditions from '../components/terms-and-conditions.vue';

//privacyPolicy
import privacyPolicy from '../components/privacy-policy.vue';

import Contact from '../components/Contact'
//import Register from '../components/Register'
//import Login from '../components/Login'
//import Dashboard from '../components/Dashboard'

import Activity from '../components/Activity'
import Professional from '../components/Professional'
import Academic from '../components/Academic'

import Checkout from '../components/Checkout'
import Search from '../components/Search'

import Signin from '../components/Signin'
import Signup from '../components/Signup'
import Forgot from '../components/Forgot'


//Home
import Home from '../components/Home'

//ResponsiveHome
import ResponsiveHome from '../components/ResponsiveHome'

//import Home from '../components/layout/Home'
//import Contact from '../components/Contact'
//import Header from '../components/layout/home/header'
//import Footer from '../components/layout/home/footer'

//stripe
import stripe from '../components/stripe'

//Admin
import Admin from '../components/layout/Admin'

//items
import itemCreate from '../components/items/Create.vue';
import itemEdit from '../components/items/Edit.vue';
import itemIndex from '../components/items/Index.vue';

//categories
import categoryCreate from '../components/categories/Create.vue';
import categoryEdit from '../components/categories/Edit.vue';
import categoryIndex from '../components/categories/Index.vue';

//icons
import iconsCreate from '../components/icons/Create.vue';
import iconsEdit from '../components/icons/Edit.vue';
import iconsIndex from '../components/icons/Index.vue';


import orders from '../components/orders/Index.vue';

import redeem from '../components/redeem/Index.vue';

//offers
import offersCreate from '../components/offers/Create.vue';
import offersEdit from '../components/offers/Edit.vue';
import offersIndex from '../components/offers/Index.vue';

//subscription_categories
import subscriptionCategoriesCreate from '../components/subscription_categories/Create.vue';
import subscriptionCategoriesEdit from '../components/subscription_categories/Edit.vue';
import subscriptionCategoriesIndex from '../components/subscription_categories/Index.vue';

//companies
import companyCreate from '../components/companies/Create.vue';
import companyEdit from '../components/companies/Edit.vue';
import companyIndex from '../components/companies/Index.vue';


//users
import userCreate from '../components/users/Create.vue';
import userEdit from '../components/users/Edit.vue';
import userView from '../components/users/View.vue';
import userIndex from '../components/users/Index.vue';

//locations
import locationCreate from '../components/locations/Create.vue';
import locationEdit from '../components/locations/Edit.vue';
import locationIndex from '../components/locations/Index.vue';

//blogs
import blogCreate from '../components/blogs/Create.vue';
import blogEdit from '../components/blogs/Edit.vue';
import blogIndex from '../components/blogs/Index.vue';

//countries
import countryCreate from '../components/countries/Create.vue';
import countryEdit from '../components/countries/Edit.vue';
import countryIndex from '../components/countries/Index.vue';

//subscriptions
import subscriptionCreate from '../components/subscriptions/Create.vue';
import subscriptionEdit from '../components/subscriptions/Edit.vue';
import subscriptionIndex from '../components/subscriptions/Index.vue';

//faqs
import faqCreate from '../components/faqs/Create.vue';
import faqEdit from '../components/faqs/Edit.vue';
import faqIndex from '../components/faqs/Index.vue';

//pages
import pagesCreate from '../components/pages/Create.vue';
import pagesEdit from '../components/pages/Edit.vue';
import pagesIndex from '../components/pages/Index.vue';

//components
import componentsCreate from '../components/component/Create.vue';
import componentsEdit from '../components/component/Edit.vue';
import componentsIndex from '../components/component/Index.vue';

//features
import featuresCreate from '../components/features/Create.vue';
import featuresEdit from '../components/features/Edit.vue';
import featuresIndex from '../components/features/Index.vue';

//links
import linksCreate from '../components/links/Create.vue';
import linksEdit from '../components/links/Edit.vue';
import linksIndex from '../components/links/Index.vue';

//sociallinks
import sociallinksCreate from '../components/sociallinks/Create.vue';
import sociallinksEdit from '../components/sociallinks/Edit.vue';
import sociallinksIndex from '../components/sociallinks/Index.vue';

//reviews
import reviewsCreate from '../components/reviews/Create.vue';
import reviewsEdit from '../components/reviews/Edit.vue';
import reviewsIndex from '../components/reviews/Index.vue';

//profile
import profile from '../components/profile/index.vue';

//userProfile
import userProfile from '../components/Profile.vue';

//blogs
import blogs from '../components/blogs.vue';


//CKEditor
import CKEditor from '../components/CKEditor.vue';

//insider
import insider from '../components/insider.vue';

//singleBlog
import singleBlog from '../components/single-blog.vue';

//blogCategory
import blogCategory from '../components/blog-category.vue';

//buySubscription
import buySubscription from '../components/buy-subscription.vue';

//singleCompany
import singleCompany from '../components/single-company.vue';

//companyOffers
import companyOffers from '../components/offers.vue';

//offerDetail/
import offerDetail from '../components/offer-detail.vue';

//subscriptions
import Subscription from '../components/Subscription.vue'

//faqs
import faqs from '../components/faqs.vue'

//cart
import cart from '../components/cart.vue'

//myOrder
import myOrder from '../components/my-order.vue'

var slug ='';

if (localStorage.getItem('slug') !== null) {
    slug = localStorage.getItem("slug"); 
} else {
    slug = 'dubai-and-n-emirates';
    localStorage.setItem("slug", slug);
}

Vue.use(Router)

const router = new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
    {
        path: '/cart',
        name: 'cart',
        component: cart
    },
    {
      path: '/my-order',
      name: 'myOrder',
      component: myOrder,
      meta: { requiresAuth: true }
    },
    {
        path: '/blogs',
        name: 'blogs',
        component: blogs
    },
    {
      path: '/insider',
      name: 'insider',
      component: insider
    },
    {
        path: '/hello',
        name: 'HelloWorld',
        component: HelloWorld
    },
    {
        path: "/",
        redirect: '/en/'+slug,
        name: 'Home',
        component: Home,
    },
    {
      path: "/responsivehome",
     // redirect: 'responsivehome',
      name: 'ResponsiveHome',
      component: ResponsiveHome,
    },
    {
      path: "/stripe",
      name: 'stripe',
      component: stripe,
    },
    {
      path: "/en/:slug",
      name: 'Home',
      component: Home,
  },
    {
        path: "/admin",
        name: 'Admin',
        component: Admin,
    },
    {
      path: "/success",
      name: 'Success',
      component: Success,
    },
    {
      path: "/cancel",
      name: 'Cancel',
      component: Cancel,
    },
    {
      path: "/newsletter",
      name: 'newsletter',
      component: newsletter,
    },
    {
        path: "/about",
        name: 'About',
        component: About,
    },
    {
      path: "/terms-and-conditions",
      name: 'termsAndConditions',
      component: termsAndConditions,
    },
    {
      path: "/privacy-policy",
      name: 'privacyPolicy',
      component: privacyPolicy,
    },
    {
        path: "/contact",
        name: 'Contact',
        component: Contact,
    },
    {
        path: "/register",
        name: 'Register',
        component: Register,
    },
    {
        path: "/login",
        name: 'Login',
        component: Login,
    },
    {
        path: "/dashboard",
        name: 'Dashboard',
        component: Dashboard,
        meta: { requiresAuth: true }
    },
    {
        path: "/dashboards",
        name: 'dashboards',
        component: dashboards,
    },
    {
        path: "/dashboards1",
        name: 'dashboards1',
        component: dashboards1,
    },
    {
        path: "/activity",
        name: 'Activity',
        component: Activity,
    },
    {
        path: "/professional",
        name: 'Professional',
        component: Professional,
    },
    {
        path: "/academic",
        name: 'Academic',
        component: Academic,
    },
    {
        path: "/checkout",
        name: 'Checkout',
        component: Checkout,
    },
    {
        path: "/search",
        name: 'Search',
        component: Search,
    },
    {
        path: "/signin",
        name: 'Signin',
        component: Signin,
    },
     {
         path: "/signup",
         name: 'Signup',
         component: Signup,
     },
     {
      path: "/forgot",
      name: 'Forgot',
      component: Forgot,
  },
    {
        path: "/admin",
        name: 'Admin',
        component: Admin,
    },
    {
        name: 'itemCreate',
        path: '/items/create',
        component: itemCreate,
        meta: { requiresAuth: true }
      },
      {
        name: 'itemEdit',
        path: '/items/edit/:id',
        component: itemEdit,
        meta: { requiresAuth: true }
      },
      {
        name: 'itemIndex',
        path: '/items/index',
        component: itemIndex,
        meta: { requiresAuth: true }
      },
      {
        name: 'categoryCreate',
        path: '/categories/create',
        component: categoryCreate,
        meta: { requiresAuth: true }
      },
      {
        name: 'categoryEdit',
        path: '/categories/edit/:id',
        component: categoryEdit,
        meta: { requiresAuth: true }
      },
      {
        name: 'categoryIndex',
        path: '/categories/index',
        component: categoryIndex,
        meta: { requiresAuth: true }
      },
      {
        name: 'iconsCreate',
        path: '/icons/create',
        component: iconsCreate,
        meta: { requiresAuth: true }
      },
      {
        name: 'iconsEdit',
        path: '/icons/edit/:id',
        component: iconsEdit,
        meta: { requiresAuth: true }
      },
      {
        name: 'iconsIndex',
        path: '/icons/index',
        component: iconsIndex,
        meta: { requiresAuth: true }
      },
      {
        name: 'orders',
        path: '/orders/index',
        component: orders,
        //meta: { requiresAuth: true }
      },
      {
        name: 'redeem',
        path: '/redeem/index',
        component: redeem,
        //meta: { requiresAuth: true }
      },
      {
        name: 'offersCreate',
        path: '/offers/create',
        component: offersCreate,
        meta: { requiresAuth: true }
      },
      {
        name: 'offersEdit',
        path: '/offers/edit/:id',
        component: offersEdit,
        meta: { requiresAuth: true }
      },
      {
        name: 'offersIndex',
        path: '/offers/index',
        component: offersIndex,
        meta: { requiresAuth: true }
      },
      {
        name: 'subscriptionCategoriesCreate',
        path: '/subscription_categories/create',
        component: subscriptionCategoriesCreate,
        meta: { requiresAuth: true }
      },
      {
        name: 'subscriptionCategoriesEdit',
        path: '/subscription_categories/edit/:id',
        component: subscriptionCategoriesEdit,
        meta: { requiresAuth: true }
      },
      {
        name: 'subscriptionCategoriesIndex',
        path: '/subscription_categories/index',
        component: subscriptionCategoriesIndex,
        meta: { requiresAuth: true }
      },
      {
        name: 'faqCreate',
        path: '/faqs/create',
        component: faqCreate,
        meta: { requiresAuth: true }
      },
      {
        name: 'faqEdit',
        path: '/faqs/edit/:id',
        component: faqEdit,
        meta: { requiresAuth: true }
      },
      {
        name: 'faqIndex',
        path: '/faqs/index',
        component: faqIndex,
        meta: { requiresAuth: true }
      },
      {
        name: 'pagesCreate',
        path: '/pages/create',
        component: pagesCreate,
        meta: { requiresAuth: true }
      },
      {
        name: 'pagesEdit',
        path: '/pages/edit/:id',
        component: pagesEdit,
        meta: { requiresAuth: true }
      },
      {
        name: 'pagesIndex',
        path: '/pages/index',
        component: pagesIndex,
        meta: { requiresAuth: true }
      },
      {
        name: 'featuresCreate',
        path: '/features/create',
        component: featuresCreate,
        meta: { requiresAuth: true }
      },
      {
        name: 'featuresEdit',
        path: '/features/edit/:id',
        component: featuresEdit,
        meta: { requiresAuth: true }
      },
      {
        name: 'featuresIndex',
        path: '/features/index',
        component: featuresIndex,
        meta: { requiresAuth: true }
      },
      {
        name: 'linksCreate',
        path: '/links/create',
        component: linksCreate,
        meta: { requiresAuth: true }
      },
      {
        name: 'linksEdit',
        path: '/links/edit/:id',
        component: linksEdit,
        meta: { requiresAuth: true }
      },
      {
        name: 'linksIndex',
        path: '/links/index',
        component: linksIndex,
        meta: { requiresAuth: true }
      },
      {
        name: 'sociallinksCreate',
        path: '/sociallinks/create',
        component: sociallinksCreate,
        meta: { requiresAuth: true }
      },
      {
        name: 'sociallinksEdit',
        path: '/sociallinks/edit/:id',
        component: sociallinksEdit,
        meta: { requiresAuth: true }
      },
      {
        name: 'sociallinksIndex',
        path: '/sociallinks/index',
        component: sociallinksIndex,
        meta: { requiresAuth: true }
      },
      {
        name: 'reviewsCreate',
        path: '/reviews/create',
        component: reviewsCreate,
        meta: { requiresAuth: true }
      },
      {
        name: 'reviewsEdit',
        path: '/reviews/edit/:id',
        component: reviewsEdit,
        meta: { requiresAuth: true }
      },
      {
        name: 'reviewsIndex',
        path: '/reviews/index',
        component: reviewsIndex,
        meta: { requiresAuth: true }
      },
      {
        name: 'componentsCreate',
        path: '/components/create',
        component: componentsCreate,
        meta: { requiresAuth: true }
      },
      {
        name: 'componentsEdit',
        path: '/components/edit/:id',
        component: componentsEdit,
        meta: { requiresAuth: true }
      },
      {
        name: 'componentsIndex',
        path: '/components/index',
        component: componentsIndex,
        meta: { requiresAuth: true }
      },
      {
        name: 'companyCreate',
        path: '/companies/create',
        component: companyCreate,
        meta: { requiresAuth: true }
      },
      {
        name: 'companyEdit',
        path: '/companies/edit/:id',
        component: companyEdit,
        meta: { requiresAuth: true }
      },
      {
        name: 'companyIndex',
        path: '/companies/index',
        component: companyIndex,
        meta: { requiresAuth: true }
      },
      {
        name: 'locationCreate',
        path: '/locations/create',
        component: locationCreate,
        meta: { requiresAuth: true }
      },
      {
        name: 'userCreate',
        path: '/users/create',
        component: userCreate,
        meta: { requiresAuth: true }
      },
      {
        name: 'userEdit',
        path: '/users/edit/:id',
        component: userEdit,
        meta: { requiresAuth: true }
      },
      {
        name: 'userView',
        path: '/users/view/:id',
        component: userView,
        meta: { requiresAuth: true }
      },
      {
        name: 'userIndex',
        path: '/users/index',
        component: userIndex,
        meta: { requiresAuth: true }
      },
      {
        name: 'locationCreate',
        path: '/locations/create',
        component: locationCreate,
        meta: { requiresAuth: true }
      },
      {
        name: 'locationEdit',
        path: '/locations/edit/:id',
        component: locationEdit,
        meta: { requiresAuth: true }
      },
      {
        name: 'locationIndex',
        path: '/locations/index',
        component: locationIndex,
        meta: { requiresAuth: true }
      },
      {
        name: 'blogCreate',
        path: '/blogs/create',
        component: blogCreate,
        meta: { requiresAuth: true }
      },
      {
        name: 'blogEdit',
        path: '/blogs/edit/:id',
        component: blogEdit,
        meta: { requiresAuth: true }
      },
      {
        name: 'blogIndex',
        path: '/blogs/index',
        component: blogIndex,
        meta: { requiresAuth: true }
      },
      {
        name: 'countryCreate',
        path: '/countries/create',
        component: countryCreate,
        meta: { requiresAuth: true }
      },
      {
        name: 'countryEdit',
        path: '/countries/edit/:id',
        component: countryEdit,
        meta: { requiresAuth: true }
      },
      {
        name: 'countryIndex',
        path: '/countries/index',
        component: countryIndex,
        meta: { requiresAuth: true }
      },
      {
        name: 'subscriptionCreate',
        path: '/subscriptions/create',
        component: subscriptionCreate,
        meta: { requiresAuth: true }
      },
      {
        name: 'subscriptionEdit',
        path: '/subscriptions/edit/:id',
        component: subscriptionEdit,
        meta: { requiresAuth: true }
      },
      {
        name: 'subscriptionIndex',
        path: '/subscriptions/index',
        component: subscriptionIndex,
        meta: { requiresAuth: true }
      },
      {
        name: 'profile',
        path: '/profile/index',
        component: profile,
        meta: { requiresAuth: true }
      },
      {
        name: 'userProfile',
        path: '/Profile',
        component: userProfile,
       // meta: { requiresAuth: true }
      },
      {
        name: 'singleBlog',
        path: '/single-blog/:id',
        component: singleBlog,
        meta: { requiresAuth: true }
      },
      {
        name: "Subscription",
        path: '/subscriptions/:id',
        component: Subscription,
      },
      {
        name: 'singleCompany',
        path: '/single-company/:id',
        component: singleCompany
      },
      {
        name: 'companyOffers',
        path: '/offers/:id',
        component: companyOffers
      },
      {
        name: 'offerDetail',
        path: '/offer-detail/:id',
        component: offerDetail
      },
      {
        name: 'blogCategory',
        path: '/blog-category/:id',
        component: blogCategory
      },
      {
        name: 'buySubscription',
        path: '/buy-subscription/:id',
        component: buySubscription
      },
      {
        name: 'faqs',
        path: '/faqs',
        component: faqs,
        //meta: { requiresAuth: true }
      },
      {
        name: 'CKEditor',
        path: '/ckeditor',
        component: CKEditor
      },
]
});
import store from "./../store";
router.beforeEach((to, from, next) => {
  //let routerAuthCheck = false;

  if (to.matched.some(record => record.meta.requiresAuth)) {
    console.log('dasda');
    console.log(store.getters.isloggedIn);

    if (!store.getters.isloggedIn)  {
      next({path: '/signin'})
    }
    else {
      //store.dispatch('fetchUser') // Line error
      next()
    }
    
  }else{
    next();
  }

})

export default router

