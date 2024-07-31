import { ArrowRight, Calendar, MapPin, Settings2, X } from "lucide-react";
import { Button } from "../../../components/button";
import { useState } from "react";
import { DateRange, DayPicker } from "react-day-picker";
import "react-day-picker/style.css";
import { format } from "date-fns";

interface DestinationAndDateStepProps {
  isGuestsInputOpen: boolean;
  openGuestsInput: () => void;
  closeGuestsInput: () => void;
  setDestination: (destination: string) => void;
  eventStartAndEndDate: DateRange | undefined;
  setEventStartAndEndDate: (eventStartAndEndDate: DateRange | undefined) => void;
}

export function DestinationAndDateStep(props: DestinationAndDateStepProps) {
  const [isDatePickerOpen, setIsDatePickerOpen] = useState(false);

  const openDatePicker = () => {
    setIsDatePickerOpen(true);
  };

  const closeDatePicker = () => {
    setIsDatePickerOpen(false);
  };

  const displayedDate = props.eventStartAndEndDate && props.eventStartAndEndDate.from && props.eventStartAndEndDate.to ? format(props.eventStartAndEndDate.from, "d' de 'LLL").concat(' até ').concat(format(props.eventStartAndEndDate.to, "d' de 'LLL")) : null;

  return (
    <div className="h-16 bg-zinc-900 px-4 rounded-xl flex items-center shadow-shape gap-3">
      <div className=" flex items-center gap-2 flex-1">
        <MapPin className=" size-5 text-zinc-400" />
        <input
          disabled={props.isGuestsInputOpen}
          type="text"
          onChange={(event) => props.setDestination(event.target.value)}
          placeholder="Para onde você vai ?"
          className="bg-transparent text-xl placeholder-zinc-400 outline-none flex-1"
        />
      </div>
      <button
        onClick={openDatePicker}
        disabled={props.isGuestsInputOpen}
        className=" flex items-center gap-2 text-left w-[240px]"
      >
        <Calendar className=" size-5 text-zinc-400" />
        <span className=" text-xl text-zinc-400 w-40 flex-1">
          {displayedDate || "Quando?"}
        </span>
      </button>

      {isDatePickerOpen && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center">
          <div className=" rounded-xl py-5 px-6 shadow-shape bg-zinc-900 space-y-5">
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <h2 className="text-lg font-semibold">Selecione a data</h2>
                <button onClick={closeDatePicker}>
                  <X className="size-5 text-zinc-400" />
                </button>
              </div>
            </div>
            <DayPicker
              mode="range"
              selected={props.eventStartAndEndDate}
              onSelect={props.setEventStartAndEndDate}
              classNames={{
                selected: `text-black`,
              }}
            />
          </div>
        </div>
      )}

      <div className="w-px bg-zinc-800" />

      {props.isGuestsInputOpen ? (
        <Button onClick={props.closeGuestsInput} variant="secondary">
          Alterar Local e data
          <Settings2 className="size-5" />
        </Button>
      ) : (
        <Button onClick={props.openGuestsInput} variant="primary">
          Continuar
          <ArrowRight className="size-5 text-lime-950" />
        </Button>
      )}
    </div>
  );
}
