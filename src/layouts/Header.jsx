import React from 'react';
import { Link } from 'react-router-dom';
import styles from "./Header.module.css";
import { useQuery } from '@tanstack/react-query';
import { setCookie } from '../utils/cookie';
import { getProfile } from '../services/user';

function Header() {
    const { refetch } = useQuery(["profile"], getProfile);

    const logOutHandler = () => {
        setCookie("");
        refetch();
    }

    return (
        <header className={styles.header}>
            <div>
                <Link to="/" >
                    <img src='divar.svg' className={styles.logo} />
                </Link>
                <span  >
                    <img src="location.svg" />
                    <p>تهران</p>
                </span>
            </div>
            <div className={styles.menuParent}>
                <Link to="/auth">
                    <span>
                        <img src="profile.svg" />
                        <p>دیوار من</p>
                    </span>
                </Link>
                <div className={styles.menu}>
                    <ul>
                        <li>ورود</li>
                        <li>نشان ها</li>
                        <li>یادداشت ها</li>
                        <li>بازدیدهای اخیر</li>
                        <li>گزارش کلاهبرداری</li>
                        <li onClick={logOutHandler}>خروج</li>
                    </ul>
                </div>
                <Link to="/dashboard" className={styles.button}>ثبت آگهی</Link>
            </div>
        </header>
    )
}

export default Header