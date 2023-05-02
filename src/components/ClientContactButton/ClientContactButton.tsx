import Link from 'next/link';
import classes from './ClientContactButton.module.scss';

const ClientContactButton = () => (
    <Link href="/kontakt" className={classes.client_contact_button}>
        Zakaži konsultaciju
    </Link>
);

export default ClientContactButton;