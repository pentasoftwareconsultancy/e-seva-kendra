import { useParams } from "react-router-dom";

import PANCardServices from "../components/Services/Pan";
import PassportForm from "../components/Services/PassportForm";
import GazetteForm from "../components/Services/GazetteForm";
import VoterForm from "../components/Services/VoterForm";
import ShopAct from "../components/Services/ShopAct";
import UdyogAadhaar from "../components/Services/UdyogAadhaar";
import RationCardForm from "../components/Services/RationCardForm";
import Food from "../components/Services/Food";
import Senior from "../components/Services/Senior";

/* Newly Mentioned Services */
// import ITR from "../components/Services/ITR";
// import IEC from "../components/Services/IEC";
// import GST from "../components/Services/GST";
// import Trademark from "../components/Services/Trademark";
// import HealthInsurance from "../components/Services/HealthInsurance";
// import LifeInsurance from "../components/Services/LifeInsurance";
// import SIP from "../components/Services/SIP";
// import MutualFund from "../components/Services/MutualFund";
// import RentAgreement from "../components/Services/RentAgreement";
// import Eshram from "../components/Services/Eshram";
// import Ayushman from "../components/Services/Ayushman";
// import VehicleInsurance from "../components/Services/VehicleInsurance";
// import DematAccount from "../components/Services/DematAccount";
// import Loan from "../components/Services/Loan";
// import PFS from "../components/Services/PFS";

function Dynamic_form() {
  const { serviceName } = useParams();

  const serviceComponents = {
    pan: PANCardServices,
    // itr: ITR,
    // iec: IEC,
    // gst: GST,
    // trademark: Trademark,
    // "health-insurance": HealthInsurance,
    // "life-insurance": LifeInsurance,
    // sip: SIP,
    // "mutual-fund": MutualFund,
    // "rent-agreement": RentAgreement,
    // "e-shram": Eshram,
    // ayushman: Ayushman,
    // "vehicle-insurance": VehicleInsurance,
    // "dmat-account": DematAccount,
    // loan: Loan,
    // pfs: PFS,
    "passport": PassportForm,
    "ration-card": RationCardForm,
    "gazette": GazetteForm,
    "shop-act": ShopAct,
    "udyog-aadhaar": UdyogAadhaar,
    "food": Food,
    "senior": Senior,
    "voter": VoterForm,
  };

  const Component = serviceComponents[serviceName];

  return Component ? <Component /> : <h1>Service Not Found</h1>;
}

export default Dynamic_form;