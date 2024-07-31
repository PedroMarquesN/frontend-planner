import { CheckCircle, CircleDashed, UserCog } from "lucide-react";
import { Button } from "../../components/button";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { api } from "../../lib/axios";

interface Participant {
  id: string;
  name: string | null;
  email: string;
  is_confirmed: boolean;
}

export function Guests() {

  const {tripId} = useParams();
  const [participants, setParticipants] = useState<Participant[] | undefined>([]);

  
  useEffect(() => {
    api.get(`/trips/${tripId}/participants`).then(response => setParticipants(response.data));
  }, [tripId]);

  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-semibold">Convidados</h2>
      <div className="space-y-5">
        {participants?.map((participant, index) => {
          return (
            <div key={index} className="flex items-center justify-between gap-4">
            <div className="space-y-1.5">
              <span className="block font-medium text-zinc-100 ">
               {`Convidado ${index +1 }` }
              </span>
              <span className="block font-sm text-zinc-400 truncate">
                {participant.email}
              </span>
            </div>
           {participant.is_confirmed ? (
            <CheckCircle className="size-5 text-lime-300" />
           ):(
            <CircleDashed className="size-5 text-zinc-400 shrink-0" />
           )}
          </div>
          )
        })}
      </div>

      <Button variant="secondary" size="full">
        <UserCog className="size-5" />
        Gerenciar Convidados
      </Button>
    </div>
  );
}
