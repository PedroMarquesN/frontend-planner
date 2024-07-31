import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { InviteGuestModal } from "./inviteGuestModa";
import { ConfirmTripModal } from "./confirmTripModal";
import { DestinationAndDateStep } from "./steps/destinationAndDateStep";
import { InviteGuestSteps } from "./steps/inviteGuestStep";
import { DateRange } from "react-day-picker";
import { api } from "../../lib/axios";

export function CreateTripPage() {
  const [isGuestsInputOpen, setIsGuestsInputOpen] = useState(false);
  const [isGuestsModalOpen, setIsGuestsModalOpen] = useState(false);
  const [emailsToInvite, setEmailsToInvite] = useState<string[]>([]);
  const [isConfirmTripModalOpen, setIsConfirmTripModalOpen] = useState(false);
  const [destination, setDestination] = useState<string>("");
  const [ownerName, setOwnerName] = useState<string>("");
  const [ownerEmail, setOwnerEmail] = useState<string>("");
  const [eventStartAndEndDate, setEventStartAndEndDate] = useState<
  DateRange | undefined
>();

  const navigate = useNavigate();





  const openGuestsInput = () => {
    setIsGuestsInputOpen(true);
  };

  const closeGuestsInput = () => {
    setIsGuestsInputOpen(false);
  };

  const openGuestsModal = () => {
    setIsGuestsModalOpen(true);
  };

  const closeGuestsModal = () => {
    setIsGuestsModalOpen(false);
  };

  const openConfirmTripModal = () => {
    setIsConfirmTripModalOpen(true);
  };
  const closeConfirmTripModal = () => {
    setIsConfirmTripModalOpen(false);
  };

  const AddNewEmailToInvite = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const data = new FormData(event.currentTarget);
    const email = data.get("email") as string;

    if (emailsToInvite.includes(email)) return;

    setEmailsToInvite([...emailsToInvite, email]);

    event.currentTarget.reset();
  };

  const removeEmailToInvite = (emailToRemove: string) => {
    setEmailsToInvite(
      emailsToInvite.filter((email) => email !== emailToRemove)
    );
  };

 async function createTrip(event: FormEvent<HTMLFormElement>){
    event.preventDefault();
    if(!destination) {
      return
    }
    if(!eventStartAndEndDate?.from || !eventStartAndEndDate?.to) {
      return
    }
    if(emailsToInvite.length === 0) {
      return
    }
    if(!ownerName) {
      return
    }

   const response = await api.post("/trips", {
      destination,
      starts_at: eventStartAndEndDate.from,
      ends_at: eventStartAndEndDate.to,
      emails_to_invite: emailsToInvite,
      owner_name: ownerName,
      owner_email: ownerEmail,
    });

    const {tripId} = response.data;
    navigate(`/trips/${tripId}`);
  }
  return (
    <div className="h-screen flex items-center justify-center bg-pattern bg-no-repeat bg-center">
      <div className="max-w-3xl w-full px-6 text-center space-y-10 ">
        <div className="flex flex-col items-center gap-3">
          <img src="/logo.svg" alt="Plann.er" />
          <p className="text-zinc-50 text-lg">
            Convide seus amigos e planeje sua próxima viagem.
          </p>
        </div>
        <div className="space-y-4">
            <DestinationAndDateStep 
            closeGuestsInput={closeGuestsInput}
            openGuestsInput={openGuestsInput}
            isGuestsInputOpen={isGuestsInputOpen}
            setDestination={setDestination}
            eventStartAndEndDate={eventStartAndEndDate}
            setEventStartAndEndDate={setEventStartAndEndDate}

            /> 


          {isGuestsInputOpen && (
            <InviteGuestSteps 
                emailsToInvite={emailsToInvite}
                openConfirmTripModal={openConfirmTripModal}
                openGuestsModal={openGuestsModal}
            />
          )}
        </div>
        <p className="text-sm text-zinc-500">
          Ao planejar sua viagem pela Plann.er você automaticamente concorda{" "}
          <br /> com nossos{" "}
          <a href="#" className="underline text-zinc-300">
            Termos de Serviço
          </a>{" "}
          e{" "}
          <a href="#" className="underline text-zinc-300">
            Política de Privacidade
          </a>
          .
        </p>
      </div>

      {isGuestsModalOpen && (
        <InviteGuestModal 
            emailsToInvite={emailsToInvite}
            AddNewEmailToInvite={AddNewEmailToInvite}
            closeGuestsModal={closeGuestsModal}
            removeEmailToInvite={removeEmailToInvite}
        />
      )}

      {isConfirmTripModalOpen && (
        <ConfirmTripModal 
            closeConfirmTripModal={closeConfirmTripModal}
            createTrip={createTrip}
            setOwnerName={setOwnerName}
            setOwnerEmail={setOwnerEmail}

        />
      )}
    </div>
  );
}

export default CreateTripPage;
