import {
  faHome,
  faCarSide,
  faBriefcase,
} from "@fortawesome/free-solid-svg-icons";
const findIcon = (name) => {
  switch (name) {
    case "faHome":
      return faHome;

    case "faBriefcase":
      return faBriefcase;

    case "faCarSide":
      return faCarSide;

    default:
      return false;
  }
};
export default findIcon;
