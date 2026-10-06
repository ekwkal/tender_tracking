
import { useState } from "react";
import {
  FileText,
  Building2,
  Users,
  CalendarDays,
  GitBranch,
  MessageSquare,
  Save,
  X,
} from "lucide-react";

const TenderSubmission = () => {

  // =========================================
  // FORM STATE
  // =========================================

  const [tender, setTender] = useState({
    tenderName: "",
    customerType: "",
    customer: "",
    branch: "",
    tenderOpeningDate: "",
    tenderClosingDate: "",
    remarks: "",
  });


  // =========================================
  // HANDLE INPUT CHANGE
  // =========================================

  const handleChange = (e:any) => {

    const { name, value } = e.target;

    setTender((prev) => ({
      ...prev,
      [name]: value,
    }));

  };


  // =========================================
  // SAVE / DEBUG FUNCTION
  // =========================================

  const handleSave = (e:any) => {

    // Prevent page refresh
    e.preventDefault();

    console.log("=================================");
    console.log("TENDER SUBMISSION");
    console.log("=================================");

    console.log("Tender Object:");
    console.log(tender);

    console.log("=================================");
    console.log("Individual Values");
    console.log("=================================");

    console.log("Tender Name:", tender.tenderName);
    console.log("Customer Type:", tender.customerType);
    console.log("Customer:", tender.customer);
    console.log("Branch:", tender.branch);
    console.log("Opening Date:", tender.tenderOpeningDate);
    console.log("Closing Date:", tender.tenderClosingDate);
    console.log("Remarks:", tender.remarks);

    console.log("=================================");

    // Simple validation for debugging
    if (!tender.tenderName) {
      console.log("❌ Tender name is missing");
      return;
    }

    if (!tender.customerType) {
      console.log("❌ Customer type is missing");
      return;
    }

    if (!tender.customer) {
      console.log("❌ Customer is missing");
      return;
    }

    if (!tender.branch) {
      console.log("❌ Branch is missing");
      return;
    }

    if (!tender.tenderOpeningDate) {
      console.log("❌ Opening date is missing");
      return;
    }

    if (!tender.tenderClosingDate) {
      console.log("❌ Closing date is missing");
      return;
    }

    console.log("✅ Validation passed");
    console.log("✅ Ready to send to backend");

  };


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

  const labelClass = `
    mb-2 block text-sm font-medium text-slate-700
  `;

  const sectionClass = `
    rounded-xl border border-slate-200 bg-white
    shadow-sm
  `;


  return (
    <div className="min-h-screen bg-slate-100">

      {/* HEADER */}
      <div className="border-b border-slate-200 bg-white">

        <div className="mx-auto max-w-6xl px-6 py-6">

          <div className="flex items-center justify-between">

            <div className="flex items-center gap-4">

              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                <FileText size={24} />
              </div>

              <div>

                <h1 className="text-2xl font-bold tracking-tight text-slate-900">
                  Tender Submission
                </h1>

                <p className="mt-1 text-sm text-slate-500">
                  Create and manage a new tender submission
                </p>

              </div>

            </div>

            <div className="hidden items-center gap-2 rounded-full bg-amber-50 px-3 py-1.5 text-sm font-medium text-amber-700 md:flex">

              <span className="h-2 w-2 rounded-full bg-amber-500" />

              Draft

            </div>

          </div>

        </div>

      </div>


      {/* MAIN */}
      <main className="mx-auto max-w-6xl px-6 py-8">

        <form
          onSubmit={handleSave}
          className="space-y-6"
        >

          {/* TENDER INFORMATION */}
          <section className={sectionClass}>

            <div className="border-b border-slate-200 px-6 py-5">

              <div className="flex items-center gap-3">

                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
                  <FileText size={19} />
                </div>

                <div>

                  <h2 className="font-semibold text-slate-900">
                    Tender Information
                  </h2>

                  <p className="text-xs text-slate-500">
                    Basic information about the tender
                  </p>

                </div>

              </div>

            </div>


            <div className="grid grid-cols-1 gap-6 p-6 md:grid-cols-2">

              {/* TENDER NAME */}
              <div className="md:col-span-2">

                <label
                  htmlFor="tenderName"
                  className={labelClass}
                >
                  Tender Name
                  <span className="ml-1 text-red-500">*</span>
                </label>

                <div className="relative">

                  <FileText
                    size={17}
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
                  />

                  <input
                    type="text"
                    id="tenderName"
                    name="tenderName"
                    value={tender.tenderName}
                    onChange={handleChange}
                    placeholder="Enter tender name"
                    className={`${inputClass} pl-10`}
                  />

                </div>

              </div>


              {/* CUSTOMER TYPE */}
              <div>

                <label
                  htmlFor="customerType"
                  className={labelClass}
                >
                  Customer Type
                  <span className="ml-1 text-red-500">*</span>
                </label>

                <div className="relative">

                  <Users
                    size={17}
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
                  />

                  <select
                    id="customerType"
                    name="customerType"
                    value={tender.customerType}
                    onChange={handleChange}
                    className={`${inputClass} cursor-pointer pl-10`}
                  >

                    <option value="">
                      Select customer type
                    </option>

                    <option value="1">DSO</option>
                    <option value="2">ASC</option>
                    <option value="3">
                      Pradeshiya Sabha
                    </option>
                    <option value="4">Other</option>

                  </select>

                </div>

              </div>


              {/* CUSTOMER */}
              <div>

                <label
                  htmlFor="customer"
                  className={labelClass}
                >
                  Customer
                  <span className="ml-1 text-red-500">*</span>
                </label>

                <div className="relative">

                  <Building2
                    size={17}
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
                  />

                  <select
                    id="customer"
                    name="customer"
                    value={tender.customer}
                    onChange={handleChange}
                    className={`${inputClass} cursor-pointer pl-10`}
                  >

                    <option value="">
                      Select customer
                    </option>

                    <option value="1">Kurunegala</option>
                    <option value="2">Colombo</option>
                    <option value="3">Galle</option>
                    <option value="4">Jaffna</option>

                  </select>

                </div>

              </div>


              {/* BRANCH */}
              <div>

                <label
                  htmlFor="branch"
                  className={labelClass}
                >
                  Branch
                  <span className="ml-1 text-red-500">*</span>
                </label>

                <div className="relative">

                  <GitBranch
                    size={17}
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
                  />

                  <select
                    name="branch"
                    id="branch"
                    value={tender.branch}
                    onChange={handleChange}
                    className={`${inputClass} cursor-pointer pl-10`}
                  >

                    <option value="">
                      Select branch
                    </option>

                    <option value="Global Office Solution">
                      Global Office Solution
                    </option>

                    <option value="Ekrain">
                      Ekrain
                    </option>

                  </select>

                </div>

              </div>


              {/* OPENING DATE */}
              <div>

                <label
                  htmlFor="tenderOpeningDate"
                  className={labelClass}
                >
                  Tender Opening Date
                  <span className="ml-1 text-red-500">*</span>
                </label>

                <div className="relative">

                  <CalendarDays
                    size={17}
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
                  />

                  <input
                    type="datetime-local"
                    id="tenderOpeningDate"
                    name="tenderOpeningDate"
                    value={tender.tenderOpeningDate}
                    onChange={handleChange}
                    className={`${inputClass} pl-10`}
                  />

                </div>

              </div>


              {/* CLOSING DATE */}
              <div>

                <label
                  htmlFor="tenderClosingDate"
                  className={labelClass}
                >
                  Tender Closing Date
                  <span className="ml-1 text-red-500">*</span>
                </label>

                <div className="relative">

                  <CalendarDays
                    size={17}
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
                  />

                  <input
                    type="datetime-local"
                    id="tenderClosingDate"
                    name="tenderClosingDate"
                    value={tender.tenderClosingDate}
                    onChange={handleChange}
                    className={`${inputClass} pl-10`}
                  />

                </div>

              </div>

            </div>

          </section>


          {/* ADDITIONAL INFORMATION */}
          <section className={sectionClass}>

            <div className="border-b border-slate-200 px-6 py-5">

              <div className="flex items-center gap-3">

                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-slate-100 text-slate-600">
                  <MessageSquare size={19} />
                </div>

                <div>

                  <h2 className="font-semibold text-slate-900">
                    Additional Information
                  </h2>

                  <p className="text-xs text-slate-500">
                    Add any additional notes or remarks
                  </p>

                </div>

              </div>

            </div>


            <div className="p-6">

              <label
                htmlFor="remarks"
                className={labelClass}
              >
                Remarks
              </label>

              <textarea
                id="remarks"
                name="remarks"
                rows={5}
                value={tender.remarks}
                onChange={handleChange}
                placeholder="Enter additional information, requirements, or notes..."
                className={`${inputClass} resize-none`}
              />

              <p className="mt-2 text-xs text-slate-400">
                Optional. You can add any relevant information about this tender.
              </p>

            </div>

          </section>


          {/* ACTIONS */}
          <div className="flex flex-col-reverse gap-3 sm:flex-row sm:justify-end">

            <button
              type="button"
              className="
                inline-flex items-center justify-center gap-2
                rounded-lg border border-slate-300
                bg-white px-5 py-2.5
                text-sm font-medium text-slate-700
                shadow-sm transition-all
                hover:border-slate-400 hover:bg-slate-50
              "
            >
              <X size={17} />
              Cancel
            </button>


            <button
              type="submit"
              className="
                inline-flex items-center justify-center gap-2
                rounded-lg bg-blue-600
                px-6 py-2.5
                text-sm font-semibold text-white
                shadow-sm transition-all
                hover:bg-blue-700 hover:shadow-md
                focus:outline-none
                focus:ring-4 focus:ring-blue-100
                active:scale-[0.98]
              "
            >

              <Save size={17} />

              Save Tender

            </button>

          </div>

        </form>

      </main>

    </div>
  );
};

export default TenderSubmission;
