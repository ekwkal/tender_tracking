
import React, { useState } from "react";
import {
  FileText,
  Search,
  Plus,
  Eye,
  Edit,
  Trash2,
  Filter,
  CalendarDays,
  Building2,
} from "lucide-react";

const Tender_viewer = () => {

  // =========================================
  // SAMPLE DATA
  // =========================================

  const [tenders] = useState([
    {
      id: 1,
      tenderName: "Supply of Office Equipment",
      itemRequest: "Desktop Computers, Printers",
      address: "Colombo Municipal Council",
      branch: "Global Office Solution",
      openingDate: "2026-10-10",
      closingDate: "2026-10-25",
      status: "Open",
    },

    {
      id: 2,
      tenderName: "IT Infrastructure Upgrade",
      itemRequest: "Servers, Network Equipment",
      address: "Kurunegala District Office",
      branch: "Ekrain",
      Customer: "Mawathagama DSO",
      openingDate: "2026-10-12",
      closingDate: "2026-10-30",
      status: "Open",
    },

    {
      id: 3,
      tenderName: "School Computer Laboratory",
      itemRequest: "Computers, Projectors",
      address: "Galle Education Zone",
      branch: "Global Office Solution",
      Customer: "Mawathagama DSO",
      openingDate: "2026-09-15",
      closingDate: "2026-09-30",
      status: "Closed",
    },
  ]);


  // =========================================
  // SEARCH
  // =========================================

  const [search, setSearch] = useState("");


  // =========================================
  // FILTER TENDERS
  // =========================================

  const filteredTenders = tenders.filter((tender) =>

    `
      ${tender.tenderName}
      ${tender.Customer || ""}
      ${tender.itemRequest || ""}
      ${tender.address}
      ${tender.branch}
      ${tender.status}
    `
      .toLowerCase()
      .includes(search.toLowerCase())

  );


  // =========================================
  // CSS
  // =========================================

  const inputClass = `
    w-full rounded-lg border border-slate-300 bg-white
    px-3.5 py-2.5 text-sm text-slate-800
    shadow-sm outline-none transition-all duration-200
    placeholder:text-slate-400
    hover:border-slate-400
    focus:border-blue-500
    focus:ring-4 focus:ring-blue-50
  `;

  const sectionClass = `
    rounded-xl border border-slate-200 bg-white
    shadow-sm
  `;


  // =========================================
  // JSX
  // =========================================

  return (

    <div className="min-h-screen bg-slate-100">


      {/* =========================================
          HEADER
      ========================================= */}

      <div className="border-b border-slate-200 bg-white">

        <div className="mx-auto max-w-7xl px-6 py-6">

          <div className="
            flex flex-col gap-4
            sm:flex-row sm:items-center
            sm:justify-between
          ">


            {/* TITLE */}

            <div className="flex items-center gap-4">

              <div className="
                flex h-12 w-12
                items-center justify-center
                rounded-xl
                bg-blue-50
                text-blue-600
              ">

                <FileText size={24} />

              </div>


              <div>

                <h1 className="
                  text-2xl font-bold
                  tracking-tight
                  text-slate-900
                ">
                  Tender Viewer
                </h1>

                <p className="
                  mt-1 text-sm
                  text-slate-500
                ">
                  View and manage tender submissions
                </p>

              </div>

            </div>


            {/* NEW TENDER */}

            <button
              type="button"
              className="
                inline-flex
                items-center
                justify-center
                gap-2
                rounded-lg
                bg-blue-600
                px-5 py-2.5
                text-sm font-semibold
                text-white
                shadow-sm
                transition-all
                hover:bg-blue-700
                hover:shadow-md
                focus:outline-none
                focus:ring-4
                focus:ring-blue-100
                active:scale-[0.98]
              "
            >

              <Plus size={17} />

              New Tender

            </button>

          </div>

        </div>

      </div>


      {/* =========================================
          MAIN
      ========================================= */}

      <main className="
        mx-auto max-w-7xl
        px-6 py-8
      ">

        <div className="space-y-6">


          {/* =========================================
              SEARCH
          ========================================= */}

          <section className={sectionClass}>


            {/* SECTION HEADER */}

            <div className="
              border-b
              border-slate-200
              px-6 py-5
            ">

              <div className="
                flex items-center gap-3
              ">

                <div className="
                  flex h-9 w-9
                  items-center justify-center
                  rounded-lg
                  bg-slate-100
                  text-slate-600
                ">

                  <Filter size={19} />

                </div>


                <div>

                  <h2 className="
                    font-semibold
                    text-slate-900
                  ">
                    Search & Filter
                  </h2>

                  <p className="
                    text-xs
                    text-slate-500
                  ">
                    Search through your tender submissions
                  </p>

                </div>

              </div>

            </div>


            {/* SEARCH INPUT */}

            <div className="p-6">

              <div className="relative max-w-xl">

                <Search
                  size={18}
                  className="
                    absolute
                    left-3 top-1/2
                    -translate-y-1/2
                    text-slate-400
                  "
                />


                <input
                  type="text"
                  value={search}
                  onChange={(e) =>
                    setSearch(e.target.value)
                  }
                  placeholder="
                    Search tender, customer,
                    item request, address or branch...
                  "
                  className={`
                    ${inputClass}
                    pl-10
                  `}
                />

              </div>

            </div>

          </section>


          {/* =========================================
              TENDER TABLE
          ========================================= */}

          <section className={sectionClass}>


            {/* TABLE HEADER */}

            <div className="
              flex flex-col gap-3
              border-b
              border-slate-200
              px-6 py-5
              sm:flex-row
              sm:items-center
              sm:justify-between
            ">

              <div>

                <h2 className="
                  font-semibold
                  text-slate-900
                ">
                  Tender Submissions
                </h2>

                <p className="
                  mt-1 text-xs
                  text-slate-500
                ">

                  {filteredTenders.length}

                  {" "}

                  tender
                  {filteredTenders.length !== 1
                    ? "s"
                    : ""}

                  {" "}found

                </p>

              </div>

            </div>


            {/* =========================================
                TABLE
            ========================================= */}

            <div className="overflow-x-auto">

              <table className="
                w-full
                min-w-[1300px]
                text-left
              ">


                {/* TABLE HEAD */}

                <thead>

                  <tr className="
                    border-b
                    border-slate-200
                    bg-slate-50
                  ">


                    {/* INDEX */}

                    <th className="
                      px-6 py-4
                      text-xs
                      font-semibold
                      uppercase
                      tracking-wide
                      text-slate-500
                    ">
                      #
                    </th>


                    {/* TENDER NAME */}

                    <th className="
                      px-6 py-4
                      text-xs
                      font-semibold
                      uppercase
                      tracking-wide
                      text-slate-500
                    ">
                      Tender Name
                    </th>


                    {/* CUSTOMER */}

                    <th className="
                      px-6 py-4
                      text-xs
                      font-semibold
                      uppercase
                      tracking-wide
                      text-slate-500
                    ">
                      Customer
                    </th>


                    {/* ITEM REQUEST */}

                    <th className="
                      px-6 py-4
                      text-xs
                      font-semibold
                      uppercase
                      tracking-wide
                      text-slate-500
                    ">
                      Item Request
                    </th>


                    {/* ADDRESS */}

                    <th className="
                      px-6 py-4
                      text-xs
                      font-semibold
                      uppercase
                      tracking-wide
                      text-slate-500
                    ">
                      Address
                    </th>


                    {/* BRANCH */}

                    <th className="
                      px-6 py-4
                      text-xs
                      font-semibold
                      uppercase
                      tracking-wide
                      text-slate-500
                    ">
                      Our Branch
                    </th>


                    {/* OPENING */}

                    <th className="
                      px-6 py-4
                      text-xs
                      font-semibold
                      uppercase
                      tracking-wide
                      text-slate-500
                    ">
                      Opening Date
                    </th>


                    {/* CLOSING */}

                    <th className="
                      px-6 py-4
                      text-xs
                      font-semibold
                      uppercase
                      tracking-wide
                      text-slate-500
                    ">
                      Closing Date
                    </th>


                    {/* STATUS */}

                    <th className="
                      px-6 py-4
                      text-xs
                      font-semibold
                      uppercase
                      tracking-wide
                      text-slate-500
                    ">
                      Status
                    </th>


                    {/* ACTIONS */}

                    <th className="
                      px-6 py-4
                      text-right
                      text-xs
                      font-semibold
                      uppercase
                      tracking-wide
                      text-slate-500
                    ">
                      Actions
                    </th>

                  </tr>

                </thead>


                {/* =========================================
                    TABLE BODY
                ========================================= */}

                <tbody className="
                  divide-y
                  divide-slate-100
                ">


                  {filteredTenders.map((tender) => (

                    <tr
                      key={tender.id}
                      className="
                        transition-colors
                        hover:bg-slate-50
                      "
                    >


                      {/* INDEX */}

                      <td className="
                        whitespace-nowrap
                        px-6 py-4
                        text-sm
                        font-medium
                        text-slate-500
                      ">
                        {tender.id}
                      </td>


                      {/* TENDER NAME */}

                      <td className="
                        px-6 py-4
                      ">

                        <div className="
                          flex items-center gap-3
                        ">

                          <div className="
                            flex h-9 w-9
                            shrink-0
                            items-center
                            justify-center
                            rounded-lg
                            bg-blue-50
                            text-blue-600
                          ">

                            <FileText size={17} />

                          </div>


                          <div>

                            <p className="
                              text-sm
                              font-semibold
                              text-slate-800
                            ">
                              {tender.tenderName}
                            </p>

                          </div>

                        </div>

                      </td>


                      {/* CUSTOMER */}

                      <td className="
                        whitespace-nowrap
                        px-6 py-4
                      ">

                        <div className="
                          flex items-center gap-2
                        ">

                          <Building2
                            size={16}
                            className="
                              text-slate-400
                            "
                          />

                          <span className="
                            text-sm
                            text-slate-600
                          ">

                            {tender.Customer || "-"}

                          </span>

                        </div>

                      </td>


                      {/* ITEM REQUEST */}

                      <td className="
                        max-w-[220px]
                        px-6 py-4
                        text-sm
                        text-slate-600
                      ">

                        {tender.itemRequest || "-"}

                      </td>


                      {/* ADDRESS */}

                      <td className="
                        max-w-[220px]
                        px-6 py-4
                        text-sm
                        text-slate-600
                      ">

                        {tender.address}

                      </td>


                      {/* BRANCH */}

                      <td className="
                        whitespace-nowrap
                        px-6 py-4
                        text-sm
                        text-slate-600
                      ">

                        {tender.branch}

                      </td>


                      {/* OPENING DATE */}

                      <td className="
                        whitespace-nowrap
                        px-6 py-4
                      ">

                        <div className="
                          flex items-center gap-2
                        ">

                          <CalendarDays
                            size={16}
                            className="
                              text-slate-400
                            "
                          />

                          <span className="
                            text-sm
                            text-slate-600
                          ">

                            {tender.openingDate}

                          </span>

                        </div>

                      </td>


                      {/* CLOSING DATE */}

                      <td className="
                        whitespace-nowrap
                        px-6 py-4
                      ">

                        <div className="
                          flex items-center gap-2
                        ">

                          <CalendarDays
                            size={16}
                            className="
                              text-slate-400
                            "
                          />

                          <span className="
                            text-sm
                            text-slate-600
                          ">

                            {tender.closingDate}

                          </span>

                        </div>

                      </td>


                      {/* STATUS */}

                      <td className="px-6 py-4">

  {tender.status === "Open" ? (

    <span
      className="
        inline-flex
        items-center
        gap-2
        rounded-full
        bg-emerald-50
        px-3 py-1
        text-xs
        font-medium
        text-emerald-700
      "
    >

      <span
        className="
          h-1.5 w-1.5
          rounded-full
          bg-emerald-500
        "
      />

      Open

    </span>

  ) : (

    <span
      className="
        inline-flex
        items-center
        gap-2
        rounded-full
        bg-slate-100
        px-3 py-1
        text-xs
        font-medium
        text-slate-600
      "
    >

      <span
        className="
          h-1.5 w-1.5
          rounded-full
          bg-slate-400
        "
      />

      Closed

    </span>

  )}

</td>


{/* ACTIONS */}

<td
  className="
    px-6 py-4
  "
>
                        <div className="
                          flex items-center
                          justify-end
                          gap-2
                        ">


                          {/* VIEW */}

                          <button
                            type="button"
                            title="View tender"
                            className="
                              flex h-9 w-9
                              items-center
                              justify-center
                              rounded-lg
                              border
                              border-slate-200
                              bg-white
                              text-slate-500
                              transition-all
                              hover:border-blue-200
                              hover:bg-blue-50
                              hover:text-blue-600
                            "
                          >

                            <Eye size={17} />

                          </button>


                          {/* EDIT */}

                          <button
                            type="button"
                            title="Edit tender"
                            className="
                              flex h-9 w-9
                              items-center
                              justify-center
                              rounded-lg
                              border
                              border-slate-200
                              bg-white
                              text-slate-500
                              transition-all
                              hover:border-amber-200
                              hover:bg-amber-50
                              hover:text-amber-600
                            "
                          >

                            <Edit size={17} />

                          </button>


                          {/* DELETE */}

                          <button
                            type="button"
                            title="Delete tender"
                            className="
                              flex h-9 w-9
                              items-center
                              justify-center
                              rounded-lg
                              border
                              border-slate-200
                              bg-white
                              text-slate-500
                              transition-all
                              hover:border-red-200
                              hover:bg-red-50
                              hover:text-red-600
                            "
                          >

                            <Trash2 size={17} />

                          </button>

                        </div>

                      </td>

                    </tr>

                  ))}


                  {/* =========================================
                      EMPTY STATE
                  ========================================= */}

                  {filteredTenders.length === 0 && (

                    <tr>

                      <td
                        colSpan={10}
                        className="
                          px-6 py-16
                          text-center
                        "
                      >

                        <div className="
                          flex flex-col
                          items-center
                          justify-center
                        ">

                          <div className="
                            flex h-12 w-12
                            items-center
                            justify-center
                            rounded-xl
                            bg-slate-100
                            text-slate-400
                          ">

                            <FileText size={24} />

                          </div>


                          <h3 className="
                            mt-4
                            text-sm
                            font-semibold
                            text-slate-700
                          ">
                            No tenders found
                          </h3>


                          <p className="
                            mt-1
                            text-sm
                            text-slate-400
                          ">
                            Try changing your search criteria.
                          </p>

                        </div>

                      </td>

                    </tr>

                  )}

                </tbody>

              </table>

            </div>


            {/* =========================================
                TABLE FOOTER
            ========================================= */}

            <div className="
              flex items-center
              justify-between
              border-t
              border-slate-200
              px-6 py-4
            ">

              <p className="
                text-xs
                text-slate-500
              ">

                Showing{" "}

                <span className="
                  font-medium
                  text-slate-700
                ">
                  {filteredTenders.length}
                </span>

                {" "}of{" "}

                <span className="
                  font-medium
                  text-slate-700
                ">
                  {tenders.length}
                </span>

                {" "}tenders

              </p>

            </div>

          </section>

        </div>

      </main>

    </div>
  );
};

export default Tender_viewer;