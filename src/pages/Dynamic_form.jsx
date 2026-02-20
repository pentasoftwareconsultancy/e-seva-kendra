import { useParams } from "react-router-dom";
import PANCardServices from "../components/Services/Pan";
import AadhaarForm from "../components/Services/AadhaarForm";
import VoterForm from "../components/Services/VoterForm";
import PassportForm from "../components/Services/PassportForm";
import GazetteForm from "../components/Services/GazetteForm";
import RationCardForm from "../components/Services/RationCardForm";

function Dynamic_form() {
  const { serviceName } = useParams();

  if (serviceName === "pan") return <PANCardServices />;

  if (serviceName === "aadhaar") return <AadhaarForm />;
 
  if (serviceName === "voter") return <VoterForm />;
  if (serviceName === "passport") return <PassportForm />;
    if (serviceName === "gazette") return <GazetteForm />;
    if (serviceName === "ration-card") return <RationCardForm />;


  return <h1>Service Not Found</h1>;
}

export default Dynamic_form;
