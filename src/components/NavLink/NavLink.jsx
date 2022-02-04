import Link from 'next/link';
import classnames from 'classnames';

import styles from './styles.module.scss';

const NavLink = ({ children, path, sub = false, ...props }) => {
    return (
        <Link href={path}>
            <a
                {...props}
                className={classnames(
                    'font-title text-blue-900 text-sm inline-flex flex-row items-center relative transition-all hover:opacity-70',
                    styles.nav_link
                )}
            >
                {children}
                {sub && (
                    <img
                        className='ml-1 transform rotate-90 w-[1.2em] h-[1.2em]'
                        src='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDYuMzQ5OTk5OSA2LjM1MDAwMDIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTIiIHhtbDpzcGFjZT0icHJlc2VydmUiIGNsYXNzPSIiPjxnPjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgaWQ9ImxheWVyMSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCAtMjkwLjY1KSI+PHBhdGggaWQ9InBhdGg5NDI5IiBkPSJtMi4yNTgwMzk0IDI5MS45NjUwMmEuMjY0NjA5ODIuMjY0NjA5ODIgMCAwIDAgLS4xNzQxNDk2LjQ2ODcxbDEuNjE5MDIyNSAxLjM4Njk5LTEuNjE5MDIyNSAxLjM4NjQ4YS4yNjQ2MDk4Mi4yNjQ2MDk4MiAwIDEgMCAuMzQzNjQ4My40MDA0OWwxLjg1MzYzMzUtMS41ODU5NWEuMjY0NjA5ODIuMjY0NjA5ODIgMCAwIDAgMC0uNDAyNTZsLTEuODUzNjMzNS0xLjU4NzVhLjI2NDYwOTgyLjI2NDYwOTgyIDAgMCAwIC0uMTY5NDk4Ny0uMDY2N3oiIGZvbnQtdmFyaWFudC1saWdhdHVyZXM9Im5vcm1hbCIgZm9udC12YXJpYW50LXBvc2l0aW9uPSJub3JtYWwiIGZvbnQtdmFyaWFudC1jYXBzPSJub3JtYWwiIGZvbnQtdmFyaWFudC1udW1lcmljPSJub3JtYWwiIGZvbnQtdmFyaWFudC1hbHRlcm5hdGVzPSJub3JtYWwiIGZvbnQtZmVhdHVyZS1zZXR0aW5ncz0ibm9ybWFsIiB0ZXh0LWluZGVudD0iMCIgdGV4dC1hbGlnbj0ic3RhcnQiIHRleHQtZGVjb3JhdGlvbi1saW5lPSJub25lIiB0ZXh0LWRlY29yYXRpb24tc3R5bGU9InNvbGlkIiB0ZXh0LWRlY29yYXRpb24tY29sb3I9InJnYigwLDAsMCkiIHRleHQtdHJhbnNmb3JtPSJub25lIiB0ZXh0LW9yaWVudGF0aW9uPSJtaXhlZCIgd2hpdGUtc3BhY2U9Im5vcm1hbCIgc2hhcGUtcGFkZGluZz0iMCIgaXNvbGF0aW9uPSJhdXRvIiBtaXgtYmxlbmQtbW9kZT0ibm9ybWFsIiBzb2xpZC1jb2xvcj0icmdiKDAsMCwwKSIgc29saWQtb3BhY2l0eT0iMSIgdmVjdG9yLWVmZmVjdD0ibm9uZSIgZmlsbD0iIzAwMGI1NCIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCI+PC9wYXRoPjwvZz48L2c+PC9zdmc+'
                    />
                )}
            </a>
        </Link>
    );
};

export default NavLink;
