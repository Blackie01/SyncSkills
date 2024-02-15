import styles from './footer.module.css';

function Footer() {
    return (
        <footer className={`${styles.section} ${styles.bgFooter}`}>
            <div className="container">
                <div className={styles.row}>
                    <div className="col-lg-3">
                        <div className="">
                            <p className={`${styles.footerHeading} ${styles.textUppercase} ${styles.textWhite}`}>Information</p>
                            <ul className={`list-unstyled ${styles.footerLink} mt-4`}>
                            <p><a href="">Pages</a></p>
                                <p><a href="">Our Team</a></p>
                                <p><a href="">Features</a></p>
                                <p><a href="">Pricing</a></p>
                            </ul>
                        </div>
                    </div>

                    <div className="col-lg-3">
                        <div className="">
                            <p className={`${styles.footerHeading} ${styles.textUppercase} ${styles.textWhite}`}>Resources</p>
                            <ul className={`list-unstyled ${styles.footerLink} mt-4`}>
                            <p><a href="">Pages</a></p>
                                <p><a href="">Our Team</a></p>
                                <p><a href="">Features</a></p>
                                <p><a href="">Pricing</a></p>
                            </ul>
                        </div>
                    </div>

                    <div className="col-lg-2">
                        <div className="">
                            <p className={`${styles.footerHeading} ${styles.textUppercase} ${styles.textWhite}`}>Help</p>
                            <ul className={`list-unstyled ${styles.footerLink} mt-4`}>
                            <p><a href="">Pages</a></p>
                                <p><a href="">Our Team</a></p>
                                <p><a href="">Features</a></p>
                                <p><a href="">Pricing</a></p>
                            </ul>
                        </div>
                    </div>

                    <div className="col-lg-4">
                        <div className="">
                            <p className={`${styles.footerHeading} ${styles.textUppercase} ${styles.textWhite}`}>Contact Us</p>
                            <p className={styles.contactInfo}>Queensland, Australia</p>
                            <p className={styles.contactInfo}>operations@syncskills.com.au</p>
                            {/* <div className={`mt-5`}>
                                <ul className={`list-inline`}>
                                    <li className={`list-inline-item`}><a href="#"><i className={`fab ${styles.facebook} ${styles.footerSocialIcon} fa-facebook-f`}></i></a></li>
                                    <li className={`list-inline-item`}><a href="#"><i className={`fab ${styles.twitter} ${styles.footerSocialIcon} fa-twitter`}></i></a></li>
                                    <li className={`list-inline-item`}><a href="#"><i className={`fab ${styles.google} ${styles.footerSocialIcon} fa-google`}></i></a></li>
                                    <li className={`list-inline-item`}><a href="#"><i className={`fab ${styles.apple} ${styles.footerSocialIcon} fa-apple`}></i></a></li>
                                </ul>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>

            {/* <div className={`text-center mt-5`}>
                <p className={`footer-alt mb-0 ${styles.f14}`}>2019 © Anup, All Rights Reserved</p>
            </div> */}
        </footer>
    );
}

export default Footer;
