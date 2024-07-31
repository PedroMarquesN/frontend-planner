import { Link2, Plus } from "lucide-react";

export function ImportantLinks() {
    return (
        <div className="space-y-6">
        <h2 className="text-3xl font-semibold">Links Importantes</h2>
        <div className="space-y-5">
          <div className="flex items-center justify-between gap-4">
            <div className="space-y-1.5">
              <span className="block font-medium text-zinc-100 ">
                Reserva do AirBnb
              </span>
              <a
                href="#"
                className="block font-xs text-zinc-400 truncate hover:text-zinc-200"
              >
                https:www.aibnb.com/roons/61654561894561981651918518165165189651894432465
              </a>
            </div>
            <Link2 className="size-5 text-zinc-400 shrink-0" />
          </div>

          <div className="flex items-center justify-between gap-4">
            <div className="space-y-1.5">
              <span className="block font-medium text-zinc-100 ">
                Reserva do AirBnb
              </span>
              <a
                href="#"
                className="block font-xs text-zinc-400 truncate hover:text-zinc-200"
              >
                https:www.aibnb.com/roons/61654561894561981651918518165165189651894432465
              </a>
            </div>
            <Link2 className="size-5 text-zinc-400 shrink-0" />
          </div>
        </div>
        <button className="w-full justify-center bg-zinc-800 text-zinc-200 rounded-lg px-5 h-11 font-medium flex items-center gap-2 hover:bg-zinc-700">
          <Plus className="size-5" />
          Cadastrar novo Link
        </button>
      </div>
    )
}