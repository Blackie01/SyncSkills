import styles from "./footer.module.css";

function Footer() {
  return (
    <footer className={`${styles.section} ${styles.bgFooter}`}>
      <div className="container">
        <div className={styles.row}>
          <div className="col-lg-3">
            <div className="">
              <p
                className={`${styles.footerHeading} ${styles.textUppercase} ${styles.textWhite}`}
              >
                Information
              </p>
              <ul className={`list-unstyled ${styles.footerLink} mt-4`}>
                <p>
                  <a href="">Pages</a>
                </p>
                <p>
                  <a href="">Our Team</a>
                </p>
                <p>
                  <a href="">Features</a>
                </p>
                <p>
                  <a href="">Pricing</a>
                </p>
              </ul>
            </div>
          </div>

          <div className="col-lg-3">
            <div className="">
              <p
                className={`${styles.footerHeading} ${styles.textUppercase} ${styles.textWhite}`}
              >
                Resources
              </p>
              <ul className={`list-unstyled ${styles.footerLink} mt-4`}>
                <p>
                  <a href="">Pages</a>
                </p>
                <p>
                  <a href="">Our Team</a>
                </p>
                <p>
                  <a href="">Features</a>
                </p>
                <p>
                  <a href="">Pricing</a>
                </p>
              </ul>
            </div>
          </div>

          <div className="col-lg-2">
            <div className="">
              <p
                className={`${styles.footerHeading} ${styles.textUppercase} ${styles.textWhite}`}
              >
                Help
              </p>
              <ul className={`list-unstyled ${styles.footerLink} mt-4`}>
                <p>
                  <a href="">Pages</a>
                </p>
                <p>
                  <a href="">Our Team</a>
                </p>
                <p>
                  <a href="">Features</a>
                </p>
                <p>
                  <a href="">Pricing</a>
                </p>
              </ul>
            </div>
          </div>

          <div className="col-lg-4">
            <div className="">
              <p
                className={`${styles.footerHeading} ${styles.textUppercase} ${styles.textWhite}`}
              >
                Contact Us
              </p>
              <p className={styles.contactInfo}>Queensland, Australia</p>
              <p className={styles.contactInfo}>operations@syncskills.com.au</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
