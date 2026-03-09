import Link from "next/link";
import { Session } from "../types/session";

type SessionCardProps = {
  session: Session;
};

function formatDate(dateString: string) {
  const date = new Date(dateString);

  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  }).format(date);
}
