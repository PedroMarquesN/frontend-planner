import { ArrowRight, UserRoundPlus } from "lucide-react";

interface InviteGuestStepsProps {
    openGuestsModal: () => void;
    openConfirmTripModal: () => void;
    emailsToInvite: string[];
}

export function InviteGuestSteps (props: InviteGuestStepsProps) {
    return (
        <div className="h-16 bg-zinc-900 px-4 rounded-xl flex items-center shadow-shape gap-3">
        <button
          type="button"
          onClick={props.openGuestsModal}
          className=" flex items-center gap-2 flex-1 text-left"
        >
          <UserRoundPlus className=" size-5 text-zinc-400" />
          {props.emailsToInvite.length > 0 ? (
            <span className="text-zinc-100 text-lg flex-1">
              {props.emailsToInvite.length} pessoa(s) convidada(s)
            </span>
          ) : (
            <span className="text-zinc-400 text-lg flex-1">
              Quem estará na viagem?
            </span>
          )}
        </button>

        <div className="w-px bg-zinc-800" />

        <button
          onClick={props.openConfirmTripModal}
          className="bg-lime-300 text-lime-950 rounded-lg px-5 py-2 font-medium flex items-center gap-2 hover:bg-lime-400"
        >
          Confirmar Viagem
          <ArrowRight className="size-5 text-lime-950" />
        </button>
      </div>
    )
}