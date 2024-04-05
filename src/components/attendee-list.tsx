import {
  Search,
  MoreHorizontal,
  ChevronsLeft,
  ChevronLeft,
  ChevronRight,
  ChevronsRight,
} from "lucide-react";
import { IconButton } from "./icon-button";
import { Table } from "./table/table";
import { TableHeader } from "./table/table-header";
import { TableCell } from "./table/table-cell";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import "dayjs/locale/pt-br";
import { ChangeEvent, useEffect, useState } from "react";

dayjs.extend(relativeTime);
dayjs.locale("pt-br");

interface Attendee {
  id: string;
  email: string;
  name: string;
  createdAt: string;
  checkedInAt: string | null;
}

export function AttendeeList() {
  const [page, setPage] = useState(1);
  const [attendees, setAttendees] = useState<Attendee[]>([]);
  const [totalItensApiRequest, setTotalItensApiRequest] = useState(0);
  const totalPages = Math.ceil(totalItensApiRequest / 10);
  const [search, setSearch] = useState('')

  useEffect(() => {
    const url = new URL('http://localhost:3333/events/9e9bd979-9d10-4915-b339-3786b1634f33/attendees')

    url.searchParams.set('pageIndex', String(page-1))
    if (search.length > 0) {
    url.searchParams.set('query', search)
    }
    
    fetch(url)
      .then((response) => response.json())
      .then((data: any) => {
        setAttendees(data.attendees);
        setTotalItensApiRequest(data.total);
      });
  }, [page, search]);
  function goToNextPage() {
    if (page < totalPages) {
      setPage(page + 1);
    }
  }

  function goToPreviousPage() {
    if (page > 1) {
      setPage(page - 1);
    }
  }
  function goToLastPage() {
    if (page < totalPages) {
      setPage(totalPages);
    }
  }
  function goToFirstPage() {
    if (page > 1) {
      setPage(1);
    }
  }
  function onSearchInputChanged (e : ChangeEvent<HTMLInputElement>) {
    setSearch(e.target.value)
    setPage(1)
  }
  return (
    <div className=" flex flex-col gap-4">
      <div className=" flex gap-3 items-center">
        <h1 className=" text-2xl font-bold">Participantes</h1>
        <div className=" px-3 py-1.5 border border-white/10 rounded-lg flex gap-3 items-center">
          <Search className=" size-4 text-emerald-300" />
          <input
            type="text"
            placeholder="buscar participantes..."
            className="bg-transparent p-0 outline-none text-sm border-0 focus:ring-0"
            onChange={onSearchInputChanged}
          />
        </div>
      </div>

      <Table>
        <thead>
          <tr className=" border-b border-white/10">
            <TableHeader style={{ width: 64 }}>
              <input
                type="checkbox"
                className=" size-4 bg-transparent rounded border border-white/10"
              />
            </TableHeader>
            <TableHeader>Código</TableHeader>
            <TableHeader>Participante</TableHeader>
            <TableHeader>Data de inscrição</TableHeader>
            <TableHeader>Data do check-in</TableHeader>
            <TableHeader style={{ width: 64 }}></TableHeader>
          </tr>
        </thead>
        <tbody>
          {attendees.map((atendee) => {
            return (
              <tr className=" border-b border-white/10  hover:bg-zinc-900" key={atendee.id}>
                <TableCell>
                  <input
                    type="checkbox"
                    className=" size-4 bg-transparent rounded border border-white/10"
                  />
                </TableCell>
                <TableCell>{atendee.id}</TableCell>
                <TableCell>
                  <div className=" flex flex-col gap-1">
                    <span className=" font-semibold text-zinc-50">
                      {atendee.name}
                    </span>
                    <span>{atendee.email}</span>
                  </div>
                </TableCell>
                <TableCell>{dayjs(atendee.createdAt).fromNow()}</TableCell>
                <TableCell>
                  {atendee.checkedInAt === null ? (
                    <span className=" text-zinc-400">Não fez o check-in</span>
                  ) : (
                    dayjs(atendee.checkedInAt).fromNow()
                  )}
                </TableCell>
                <TableCell>
                  <IconButton transparent={true}>
                    <MoreHorizontal />
                  </IconButton>
                </TableCell>
              </tr>
            );
          })}
        </tbody>
        <tfoot className=" p-4">
          <tr>
            <TableCell colSpan={3}>
              <span className=" text-zinc-300 text-sm">
                Mostrando {attendees.length >= 10 
                ? "10" 
                : attendees.length} de {totalItensApiRequest} itens
              </span>
            </TableCell>
            <TableCell colSpan={3} className=" text-right">
              <div className="inline-flex gap-8 items-center">
                <span className=" text-zinc-300 text-sm">
                  página {totalPages === 0 ? "0" : page} de {totalPages}
                </span>
                <div className=" flex gap-1.5">
                  <IconButton disabled={page === 1} onClick={goToFirstPage}>
                    <ChevronsLeft />
                  </IconButton>
                  <IconButton disabled={page === 1} onClick={goToPreviousPage}>
                    <ChevronLeft />
                  </IconButton>
                  <IconButton
                    disabled={page === totalPages}
                    onClick={goToNextPage}
                  >
                    <ChevronRight />
                  </IconButton>
                  <IconButton
                    disabled={page === totalPages}
                    onClick={goToLastPage}
                  >
                    <ChevronsRight />
                  </IconButton>
                </div>
              </div>
            </TableCell>
          </tr>
        </tfoot>
      </Table>
    </div>
  );
}
