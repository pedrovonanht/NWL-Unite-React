import {
  Search,
  MoreHorizontal,
  ChevronsLeft,
  ChevronLeft,
  ChevronRight,
  ChevronsRight,
} from "lucide-react";
export function AttendeeList() {
  return (
    <div className=" flex flex-col gap-4">
      <div className=" flex gap-3 items-center">
        <h1 className=" text-2xl font-bold">Participantes</h1>
        <div className=" px-3 py-1.5 border border-white/10 rounded-lg flex gap-3 items-center">
          <Search className=" size-4 text-emerald-300" />
          <input
            type="text"
            placeholder="buscar participantes..."
            className="bg-transparent border-0 p-0 outline-none text-sm"
          />
        </div>
      </div>

      <div className="border border-white/10 rounded-lg">
        <table className=" w-full">
          <thead>
            <tr className=" border-b border-white/10">
              <th
                className=" py-3 px-4 text-sm font-semibold text-left"
                style={{ width: 64 }}
              >
                <input
                  type="checkbox"
                  className=" size-4 bg-transparent rounded border border-white/10"
                />
              </th>
              <th className=" py-3 px-4 text-sm font-semibold text-left">
                Código
              </th>
              <th className=" py-3 px-4 text-sm font-semibold text-left">
                Participante
              </th>
              <th className=" py-3 px-4 text-sm font-semibold text-left">
                Data de inscrição
              </th>
              <th className=" py-3 px-4 text-sm font-semibold text-left">
                Data do check-in
              </th>
              <th
                className=" py-3 px-4 text-sm font-semibold text-left"
                style={{ width: 64 }}
              ></th>
            </tr>
          </thead>
          <tbody>
            {Array.from({ length: 8 }).map((_, i) => {
              return (
                <tr className=" border-b border-white/10" key={i}>
                  <td className=" py-3 px-4 text-sm text-left text-zinc-300">
                    <input
                      type="checkbox"
                      className=" size-4 bg-transparent rounded border border-white/10"
                    />
                  </td>
                  <td className=" py-3 px-4 text-sm text-left text-zinc-300">
                    521793
                  </td>
                  <td className=" py-3 px-4 text-sm text-left text-zinc-300">
                    <div className=" flex flex-col gap-1">
                      <span className=" font-semibold text-zinc-50">
                        Pedro Von Anht de Quadros
                      </span>
                      <span>pedrovonanht@gmail.com</span>
                    </div>
                  </td>
                  <td className=" py-3 px-4 text-sm text-left text-zinc-300">
                    7 dias atrás
                  </td>
                  <td className=" py-3 px-4 text-sm text-left text-zinc-300">
                    7 dias atrás
                  </td>
                  <td className=" py-3 px-4 text-sm text-left text-zinc-300">
                    <button>
                      <MoreHorizontal className=" bg-black/20 border border-white/10 rounded-md p-1.5 size-7" />
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
          <tfoot className=" p-4">
            <tr>
              <td colSpan={3} className="py-3 px-4">
                <span className=" text-zinc-300 text-sm">
                  Mostrando 10 de 228 itens
                </span>
              </td>
              <td colSpan={3} className="text-right py-3 px-4">
                <div className="inline-flex gap-8 items-center">
                  <span className=" text-zinc-300 text-sm">página 1 de 11</span>
                  <div className=" flex gap-1.5">
                    <button>
                      <ChevronsLeft className=" bg-white/10 border border-white/10 rounded-md p-1.5 size-7" />
                    </button>
                    <button>
                      <ChevronLeft className=" bg-white/10 border border-white/10 rounded-md p-1.5 size-7" />
                    </button>
                    <button>
                      <ChevronRight className=" bg-white/10 border border-white/10 rounded-md p-1.5 size-7" />
                    </button>
                    <button>
                      <ChevronsRight className=" bg-white/10 border border-white/10 rounded-md p-1.5 size-7" />
                    </button>
                  </div>
                </div>
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
}
