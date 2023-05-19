import { routesPath } from 'app/providers/router';
import {
    getUserAuthData, isUserAdmin, isUserManager, userActions,
} from 'entities/User';
import { LoginModal } from 'features/AuthByUsername';
import { memo, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { classNames } from 'shared/libs';
import { AppLink, AppLinkTheme } from 'shared/ui';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { TextTheme, Text } from 'shared/ui/Text/Text';
import { Dropdown } from 'shared/ui/Dropdown/Dropdown';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import cls from './Navbar.module.scss';

interface NavbarProps {
    className?: string;
}

export const Navbar = memo(({ className }: NavbarProps) => {
    const { t } = useTranslation();
    const [isAuthModal, setIsAuthModal] = useState(false);
    const authData = useSelector(getUserAuthData);
    const dispatch = useDispatch();
    const isAdmin = useSelector(isUserAdmin);
    const isManager = useSelector(isUserManager);

    const onCloseModal = useCallback(() => {
        setIsAuthModal(false);
    }, []);

    const onShowModal = useCallback(() => {
        setIsAuthModal(true);
    }, []);

    const onLogout = useCallback(() => {
        dispatch(userActions.logout());
    }, [dispatch]);

    const isAdminPanelAvailable = isAdmin || isManager;

    return (
        <header className={classNames(cls.navbar, {}, [className])}>
            <Text
                className={cls.appName}
                title={t('Ulbi TV App')}
                theme={TextTheme.INVERTED}
            />
            <AppLink
                to={routesPath.article_create}
                theme={AppLinkTheme.SECONDARY}
                className={cls.createBtn}
            >
                {t('Создать статью')}
            </AppLink>

            {authData ? (
                <Dropdown
                    direction="bottom left"
                    className={cls.dropdown}
                    items={[
                        ...(isAdminPanelAvailable ? [{
                            content: t('Админка'),
                            href: routesPath.admin_panel,
                        }] : []),
                        {
                            content: t('Профиль'),
                            href: routesPath.profile + authData.id,
                        },
                        {
                            content: t('Выйти'),
                            onClick: onLogout,
                        },
                    ]}
                    trigger={<Avatar size={30} src={authData.avatar} />}
                />
            ) : (
                <Button
                    theme={ButtonTheme.CLEAR_INVERTED}
                    className={cls.links}
                    onClick={onShowModal}
                >
                    {t('Войти')}
                </Button>
            )}
            {
                !authData && (
                    <LoginModal
                        isOpen={isAuthModal}
                        onClose={onCloseModal}
                    />
                )
            }

        </header>
    );
});
