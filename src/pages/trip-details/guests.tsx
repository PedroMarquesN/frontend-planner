import { CircleDashed, UserCog } from "lucide-react";

export function Guests () {
    return (
        <div className="space-y-6">
        <h2 className="text-3xl font-semibold">Convidados</h2>
        <div className="space-y-5">
          <div className="flex items-center justify-between gap-4">
            <div className="space-y-1.5">
              <span className="block font-medium text-zinc-100 ">
                Pedro Marques
              </span>
              <span className="block font-sm text-zinc-400 truncate">
                pedromara@gmail.com
              </span>
            </div>
            <CircleDashed className="size-5 text-zinc-400 shrink-0" />
          </div>

          <div className="flex items-center justify-between gap-4">
            <div className="space-y-1.5">
              <span className="block font-medium text-zinc-100 ">
                Germano Ribeiro
              </span>
              <span className="block font-sm text-zinc-400 truncate ">
                germanolinguica@gmail.com
              </span>
            </div>
            <CircleDashed className="size-5 text-zinc-400 shrink-0" />
          </div>
        </div>
        <button className="w-full justify-center bg-zinc-800 text-zinc-200 rounded-lg px-5 h-11 font-medium flex items-center gap-2 hover:bg-zinc-700">
          <UserCog className="size-5" />
          Gerenciar Convidados
        </button>
      </div>
    )
}