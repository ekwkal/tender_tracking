import React, { useState } from "react";
import {
  Users,
  UserPlus,
  Building2,
  Save,
  X,
} from "lucide-react";

const Customer = () => {
  const [customer, setCustomer] = useState({
    name: "",
    customerType: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;

    setCustomer((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();

    console.log("Customer:", customer);
  };

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
                <Users size={24} />
              </div>

              <div>
                <h1 className="text-2xl font-bold tracking-tight text-slate-900">
                  Customers
                </h1>

                <p className="mt-1 text-sm text-slate-500">
                  Create and manage customer information
                </p>
              </div>

            </div>

            <div className="hidden items-center gap-2 rounded-full bg-blue-50 px-3 py-1.5 text-sm font-medium text-blue-700 md:flex">
              <span className="h-2 w-2 rounded-full bg-blue-500" />
              Customer Management
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

          {/* CUSTOMER INFORMATION */}
          <section className={sectionClass}>

            {/* SECTION HEADER */}
            <div className="border-b border-slate-200 px-6 py-5">

              <div className="flex items-center gap-3">

                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
                  <UserPlus size={19} />
                </div>

                <div>

                  <h2 className="font-semibold text-slate-900">
                    Customer Information
                  </h2>

                  <p className="text-xs text-slate-500">
                    Add a new customer and specify their customer type
                  </p>

                </div>

              </div>

            </div>

            {/* FORM FIELDS */}
            <div className="grid grid-cols-1 gap-6 p-6 md:grid-cols-2">

              {/* CUSTOMER NAME */}
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

                  <input
                    type="text"
                    id="customer"
                    name="name"
                    value={customer.name}
                    onChange={handleChange}
                    placeholder="Enter customer name"
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
                    value={customer.customerType}
                    onChange={handleChange}
                    className={`${inputClass} cursor-pointer pl-10`}
                  >

                    <option value="">
                      Select customer type
                    </option>

                    <option value="1">
                      DSO
                    </option>

                    <option value="2">
                      ASC
                    </option>

                    <option value="3">
                      Pradeshiya Sabhawa
                    </option>

                  </select>

                </div>

              </div>

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
              Add Customer
            </button>

          </div>

        </form>

      </main>

    </div>
  );
};

export default Customer;