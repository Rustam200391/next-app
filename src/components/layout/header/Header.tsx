import Link from 'next/link'
import { FC } from 'react';// импортировать функциональные компоненты
import styles from './Header.module.css';
import { useRouter } from 'next/router';

const Header: FC = () => {
    const { pathname } = useRouter() 
    console.log(pathname);

  return( 
    <header className={styles.header}>
        <Link href='/' className={pathname === './' ? styles.active : ''}
        > 
        Home
        </Link>
        <Link href='/about'>About Page</Link>
    </header>
  )
}

export default Header