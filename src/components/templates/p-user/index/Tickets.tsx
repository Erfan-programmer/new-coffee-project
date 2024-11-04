import Ticket from "./Ticket";
import styles from "./tickets.module.css";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";

const Tickets = ({ tickets }:any) => {
  return (
    <div className={`${styles.content} w-full`}>
      <div className={styles.content_details}>
        <p>تیکت های اخیر</p>
        <Link href="/p-user/tickets">
          همه تیکت ها <FaArrowLeft />
        </Link>
      </div>

      {tickets?.map((ticket:any) => (
        <Ticket key={ticket?._id} {...ticket} />
      ))}

      {/* <p className={styles.empty}>تیکتی ثبت نشده</p> */}
    </div>
  );
};

export default Tickets;