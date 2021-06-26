import Head from "next/head";
// import EventCard from "../../components/EventCard";
import { motion } from "framer-motion";
import Image from "next/image";
import { events } from "../../data/events/event";
import styles from "../../styles/events.module.css";
import { useState } from "react";
import FeatherIcon from "feather-icons-react";

export default function Events() {
  const [details, setDetails] = useState(events[0]);
  const [active, setActive] = useState(false);
  return (
    <motion.div
      initial="pageInitial"
      animate="pageAnimate"
      variants={{
        pageInitial: {
          opacity: 0,
        },
        pageAnimate: {
          opacity: 1,
          transition: {
            duration: 1,
          },
        },
      }}
      exit={{ opacity: 0 }}
    >
      <Head>
        <title>MNTC | Events</title>
        <meta name="description" content="Blah Blah Blah" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <EventFull />
      <div className={`container ${styles.eventContainer}`}>
        <h1 className={styles.header}>Events round the calendar</h1>
        <div className={styles.EventList}>
          {events.map((event) => {
            return <EventCard key={event.id} details={event} />;
          })}
        </div>
      </div>
    </motion.div>
  );

  function EventFull() {
    const { name, image, desc, startDate, endDate, link } = details;
    const date = startDate == endDate ? startDate : `${startDate} - ${endDate}`;
    return (
      <div
        className={
          active
            ? `${styles.EventFull} ${styles.EventFullActive}`
            : `${styles.EventFull}`
        }
      >
        <div className={`container ${styles.EventFullContainer}`}>
          <div
            className={styles.EventFullClose}
            onClick={() => {
              setActive(false);
            }}
          >
            <FeatherIcon icon="x" size="30" />
          </div>
          <div className={styles.EventFullPosterContainer}>
            <Image src={image} alt={name} src={image} layout="fill"></Image>
          </div>

          <div className={styles.EventDetails}>
            <h3 className={styles.DetailsName}>{name}</h3>

            <p className={styles.DetailsDate}>{date}</p>

            <p className={styles.DetailsDesc}>{desc}</p>
            <a href={link} className={styles.DetailsLink} target="_blank">
              Go To Event
            </a>
          </div>
        </div>
      </div>
    );
  }

  function EventCard(props) {
    const { name, image, desc, startDate, endDate, link } = props.details;
    const date = startDate == endDate ? startDate : `${startDate} - ${endDate}`;
    return (
      <div className={styles.EventCard}>
        {console.log(props)}
        <div className={styles.EventPosterContainer}>
          <Image src={image} alt={name} src={image} layout="fill"></Image>
        </div>

        <div className={styles.EventDetails}>
          <h3 className={styles.DetailsName}>{name}</h3>
          <p className={styles.DetailsDate}>{date}</p>
          <p
            className={styles.DetailsMore}
            onClick={() => {
              console.log("event");
              setDetails(props.details);
              setActive(true);
            }}
          >
            Know More
          </p>
        </div>
      </div>
    );
  }
}
