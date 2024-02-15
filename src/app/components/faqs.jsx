'use client'
import React, {useState} from 'react';
import styles from './faqs.module.css'

const faqData = [
  {
    id: 1,
    question: 'Do I need to have a background in IT?',
    answer:
      "No, you do not , all you require is your passion and willingness to learn",
  },
  {
    id: 2,
    question: 'Does this training include coding?',
    answer:
      "No it does not, our courses are all delivered in simple English as we slowly introduce you to technical terminologies and necessary verbiages.",
  },
  {
    id: 3,
    question: 'What other benefits do I stand to gain by enrolling with your organization?',
    answer:
      "There are loads of benefits after the training such as Certification prep, Resume/LinkedIn Optimization, an opportunity to participate in Tech Accelerator Program, Job Application Support, Interview Prep. Etc.",
  },
  {
    id: 4,
    question: 'Can I pay in installments?',
    answer:
      "Yes, we offer installments as a flexible payment option",
  },
  {
    id: 5,
    question: 'What happens if I am unable to attend a class?',
    answer:
      "Our classes are recorded and are accessible via our learning management system",
  },
  {
    id: 6,
    question: 'Will I secure a remote role after my Training?',
    answer:
      "The organization usually determine a working arrangement that suit their project which may include hybrid or remote working options",
  },
  {
    id: 7,
    question: 'Do I have to register for my certifications myself?',
    answer:
      "No, you do not, SyncSkills will be responsible for this upon complete payment.",
  },
  {
    id: 8,
    question: 'Are there any opportunities for practical, hands-on experience or internships?',
    answer:
      "We emphasize practical, hands-on experience through our internship. This approach ensures that you not only understand theoretical concepts but can also apply them in real-world scenarios.",
  },
];

const FaqSection = () => {
    const [activeId, setActiveId] = useState(null);

    const handleCollapseToggle = (id) => {
      setActiveId(id === activeId ? null : id);
    };
  return (
    <section id={styles.overallContainer}>
    <section className={styles.faqSection}>
      <div className={styles.container}>
        <div className={styles.row}>
          <div className={`${styles.colMd6} ${styles.offsetMd3}`}>
            <div className={`${styles.faqTitle} ${styles.textCenter} ${styles.pb3}`}>
              <h2>FAQ</h2>
            </div>
          </div>
          <div className={`${styles.colMd6} ${styles.offsetMd3}`}>
            <div className={`${styles.faq} ${styles.accordion}`} id="accordion">
              {faqData.map((item, index) => (
                <div className={styles.card} key={index}>
                  <div
                    className={`${styles.cardHeader} ${activeId === item.id ? styles.show : ''}`}
                    onClick={() => handleCollapseToggle(item.id)}
                  >
                    <div className={styles.mb0}>
                      <p
                        className={styles.faqTitle}
                      >
                        {/* <span className={styles.badge}>{item.id}</span> */}
                        {item.question}
                      </p>
                    </div>
                  </div>
                  <div
                    id={`faqCollapse-${item.id}`}
                    className={`${styles.collapse} ${activeId === item.id ? styles.show : ''}`}
                    aria-labelledby={`faqHeading-${item.id}`}
                    data-parent="#accordion"
                  >
                    <div className={styles.cardBody}>
                      <p>{item.answer}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
    </section>
  );
};

export default FaqSection;
