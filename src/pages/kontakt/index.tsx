import Logo from "@/components/Logo/Logo";
import useMobile from "@/hooks/useMobile";
import Link from "next/link";
import classes from "./index.module.scss";

const ClientContactPage = () => {
    const { isMobile } = useMobile();

    return (
        <div className={classes.client_contact}>
            <div className={classes.client_contact__content}>Pozovi da zakažeš konsultaciju na +381/60-6250-232 ili pošalji mail na stefantosic.dev@gmail.com</div>
            <br />
            <div className={classes.client_contact__back}>
                <Link href="/">Natrag na početnu</Link>
            </div>
        </div>
    );
}

export default ClientContactPage;