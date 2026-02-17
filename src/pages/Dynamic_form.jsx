import { useParams } from "react-router-dom";
import PANCardServices from "../components/services/Pan";
import AadhaarForm from "../components/services/AadhaarForm";
import VoterForm from "../components/services/VoterForm";

function Dynamic_form() {
  const { serviceName } = useParams();

  if (serviceName === "pan") return <PANCardServices />;

  if (serviceName === "aadhaar") return <AadhaarForm />;
 
  if (serviceName === "voter") return <VoterForm />;

  return <h1>Service Not Found</h1>;
}

export default Dynamic_form;
