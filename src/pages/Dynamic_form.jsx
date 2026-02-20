import { useParams } from "react-router-dom";
import PANCardServices from "../components/Services/Pan";
import PassportForm from "../components/Services/PassportForm";
import GazetteForm from "../components/Services/GazetteForm";
import Residence from "../components/Services/residence";
import Marriage from "../components/Services/Marriage";
import VoterForm from "../components/Services/VoterForm";
import ShopAct from "../components/Services/ShopAct";
import { i } from "framer-motion/client";
function Dynamic_form() {
  const { serviceName } = useParams();

  if (serviceName === "pan") return <PANCardServices />;
  if (serviceName === "marriage") return <Marriage />;
  if (serviceName === "voter") return <VoterForm />;
    if (serviceName === "shop-act") return <ShopAct />;
  if (serviceName === "passport") return <PassportForm />;
    if (serviceName === "gazette") return <GazetteForm />;


  if (serviceName === "residence") return <Residence />;

  return <h1>Service Not Found</h1>;
}

export default Dynamic_form
