import { year4 } from "../../data/team/year4";
import { year3 } from "../../data/team/year3";
import { year2 } from "../../data/team/year2";
import { year0 } from "../../data/team/year0";

import Head from "next/head";
import TeamCard from "../../components/TeamCard";
import styles from "../../styles/Team.module.css";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

const Team = () => {
  const [year, setYear] = useState(4);
  const [memberList, setMemberList] = useState(year4);

  return (
    <motion.div
      initial="pageInitial"
      animate="pageAnimate"
      variants={{
        pageInitial: {
          opacity: 0,
          y: -200,
        },
        pageAnimate: {
          opacity: 1,
          y: 0,
        },
      }}
    >
      <Head>
        <title>MNTC | Meet the team</title>
        <meta
          name="description"
          content="Maths N Tech Club, NIT Durgapur. Be it the smallest achievements or the largest accomplishments, "
        />
      </Head>

      <div className={`container`}>
        <YearSwitch />

        <motion.div
          className={styles.TeamList}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          {memberList.map((member) => {
            return (
              <TeamCard
                key={member.id}
                name={member.name}
                avatar={member.avatar}
                position={member.position}
                facebook={member.fb}
                instagram={member.insta}
                linkedin={member.link}
                github={member.git}
              />
            );
          })}
        </motion.div>
      </div>
    </motion.div>
  );

  function YearSwitch() {
    return (
      <motion.div
        className={styles.YearSwitch}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        <span
          className={
            year == 0 ? `${styles.Year} ${styles.YearActive}` : `${styles.Year}`
          }
          onClick={() => {
            setYear(0);
            setMemberList(year0);
          }}
        >
          Faculty Advisors
        </span>

        <span
          className={
            year == 4 ? `${styles.Year} ${styles.YearActive}` : `${styles.Year}`
          }
          onClick={() => {
            setYear(4);
            setMemberList(year4);
          }}
        >
          Fourth Year
        </span>
        <span
          className={
            year == 3
              ? `${styles.Year}  ${styles.YearActive}`
              : `${styles.Year}`
          }
          onClick={() => {
            setYear(3);
            setMemberList(year3);
          }}
        >
          Third Year
        </span>
        <span
          className={
            year == 2 ? `${styles.Year} ${styles.YearActive}` : `${styles.Year}`
          }
          onClick={() => {
            setYear(2);
            setMemberList(year2);
          }}
        >
          Second Year
        </span>
      </motion.div>
    );
  }
};

export default Team;
