import { useParams } from "react-router-dom";
import PANCardServices from "../components/Services/Pan";
import PassportForm from "../components/Services/PassportForm";
import GazetteForm from "../components/Services/GazetteForm";
import Residence from "../components/Services/residence";
import Marriage from "../components/Services/Marriage";
import VoterForm from "../components/Services/VoterForm";
import ShopAct from "../components/Services/ShopAct";
import UdyogAadhaar from "../components/Services/UdyogAadhaar";
import RationCardForm from "../components/Services/RationCardForm";
import IncomeForm from "../components/Services/IncomeForm";
import Food from "../components/Services/Food";
import Senior from "../components/Services/Senior";
import EWSCertificate from "../components/Services/EWSCertificate";
import BirthDeathForm from "../components/Services/BirthDeathForm";
import DomicileForm from "../components/Services/DomicileForm";
import NonCremenalForm from "../components/Services/NonCremenalForm";
import ITRForm from "../components/Services/ITRForm";
import GSTForm from "../components/Services/GstForm";
import IECForm from "../components/Services/IECForm";
import TrademarkForm from "../components/Services/Trademark";
import Insurance from "../components/Services/Insurance";
import MutualFund from "../components/Services/MutualFund";
import EShramCardForm from "../components/Services/EShramForm";
import RentAgreementForm from "../components/Services/RentAgreementForm";
import AyushmanCardForm from "../components/Services/AyushmanCardForm";
import VehicleInsurance from "../components/Services/VehicleInsurance";
import DMartAccountForm from "../components/Services/D_MartAccount";
import LoanServiceForm from "../components/Services/LoanServiceForm";
import PublicFinancialServices from "../components/Services/PublicFinanceService";

function Dynamic_form() {
  const { serviceName } = useParams();

  if (serviceName === "pan") return <PANCardServices />;
  if (serviceName === "marriage") return <Marriage />;
  if (serviceName === "voter") return <VoterForm />;
  if (serviceName === "udyog-aadhaar") return <UdyogAadhaar />;
    if (serviceName === "shop-act") return <ShopAct />;
  if (serviceName === "passport") return <PassportForm />;
    if (serviceName === "gazette") return <GazetteForm />;
    if (serviceName === "ration-card") return <RationCardForm />;
if (serviceName === "income-certificate") return <IncomeForm />;
if (serviceName === "food") return <Food />;
  if (serviceName === "residence") return <Residence />;
  if (serviceName === "senior") return <Senior />;
  if (serviceName === "ews-certificate") return <EWSCertificate />;
  if (serviceName === "shop-act") return <ShopAct />;
  if (serviceName === "passport") return <PassportForm />;
  if (serviceName === "gazette") return <GazetteForm />;
  if (serviceName === "ration-card") return <RationCardForm />;
  if (serviceName === "income-certificate") return <IncomeForm />;
  if (serviceName === "birth-certificate") return <BirthDeathForm />;
  if (serviceName === "domicile") return <DomicileForm />;
  if (serviceName === "residence") return <Residence />;
  if (serviceName === "Non-Cremenal") return <NonCremenalForm />;
  if (serviceName === "ITR") return <ITRForm />;
  if (serviceName === "gst") return <GSTForm />;
  if (serviceName === "iec") return <IECForm />;

  if (serviceName === "trademark") return <TrademarkForm />;
  if (serviceName === "insurance") return <Insurance />;
  if (serviceName === "mutual-fund") return <MutualFund />;
  if (serviceName === "e-shram-card") return <EShramCardForm />;
  if (serviceName === "rent-agreement") return <RentAgreementForm />; 
  if (serviceName === "ayushman-card") return <AyushmanCardForm />;
  if (serviceName === "vehicle-insurance") return <VehicleInsurance/>;
  if (serviceName === "d-mart-account") return <DMartAccountForm />;
  if (serviceName === "loan") return <LoanServiceForm />;
  if (serviceName === "public-financial-services") return <PublicFinancialServices />;


  return <h1>Service Not Found</h1>;
}

export default Dynamic_form
