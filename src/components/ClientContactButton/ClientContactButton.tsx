import Link from 'next/link';
import './ClientContactButton.module.scss';

const ClientContactButton = () => (
    <Link href="/client-contact" className="client-contact-button">
        Zakaži Konsultaciju
    </Link>
);

export default ClientContactButton;