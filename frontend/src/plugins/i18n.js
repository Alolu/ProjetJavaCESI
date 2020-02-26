import Vue from 'vue';
import VueI18n from 'vue-i18n';

Vue.use(VueI18n);

const messages = {
    'en': {
        application: 'Application',
        login: 'Sign in',
        register: 'Sign up',
        email: 'Email',
        enterYourEmail: 'Enter your email address',
        password: 'Password',
        confirmPassword: 'Confirm password',
        title: 'Title',
        projectName: 'Project name',
        companyName: 'Company name',
        getStarted: 'Get started',
        companyInfo: 'Company info',
        contacts: 'Contact us',
        remember: 'Remember me?',
        forgotPassword: 'Forgot password?',
        dontHaveAccount: 'Dont\' have an account?',
        haveAccount: 'Already have an account?',
        emailRequired: 'Email is required.',
        emailNotValid: 'Email is not valid.',
        passwordRequired: 'Password is required.',
        passwordFormat: 'Password should contains min 8 characters including a number and a uppercase letter.',
        passwordMatch: 'The password you entered don\'t match.',
        connectionLost: 'The connection to the server has been lost.',
        sendPasswordUpdateEmail: 'Send password update email',
        updatePassword: 'Update password',
        returnToLogin: 'Return to login',
        close: 'Close',
        home: 'Home',
        contact: 'Contacts',
        logout: 'Logout',
        language: "Language",
        success: "Success",
        error: "Error"
    },
    'ru': {
        application: 'Приложение',
        login: 'Войти',
        register: 'Создать аккаунт',
        email: 'Почта',
        enterYourEmail: 'Введите ваш адрес почты',
        password: 'Пароль',
        confirmPassword: 'Подтвердите пароль',
        title: 'Заголовок',
        projectName: 'Имя проекта',
        companyName: 'Имя компании',
        getStarted: 'Начать',
        companyInfo: 'Информация',
        contacts: 'Свяжитесь с нами',
        remember: 'Запомнить меня?',
        forgotPassword: 'Забыли пароль?',
        dontHaveAccount: 'Еще нет аккаунта?',
        haveAccount: 'Уже есть аккаунт?',
        emailRequired: 'Введите свою почту.',
        emailNotValid: 'Введите существующий адрес почты.',
        passwordRequired: 'Введите пароль.',
        passwordFormat: 'Пароль должен содержать минимум 8 символов включая цифру и заглавную букву.',
        passwordMatch: 'Пароли не совпадают.',
        connectionLost: 'Соединение с сервером разорвано.',
        sendPasswordUpdateEmail: 'Отправить письмо для обновления пароля',
        updatePassword: 'Обновить пароль',
        returnToLogin: 'Вернуться на страницу входа',
        close: 'Закрыть',
        home: 'Домой',
        contact: 'Контакты',
        logout: 'Выйти',
        language: "Язык",
        success: "Успешно",
        error: "Ошибка"
    }
};

const i18n = new VueI18n({
    locale: localStorage.getItem('locale') || navigator.language.split('-')[0],
    fallbackLocale: 'en',
    messages,
});

export default i18n;