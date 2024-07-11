import { register, init, getLocaleFromNavigator } from 'svelte-i18n';

register('en', () => import('./locales/en.json'));
register('ko', () => import('./locales/ko.json'));
console.log('init');
init({
    fallbackLocale: 'en',
    initialLocale: getLocaleFromNavigator(),
});
