"use client";

import { FormEvent, useState } from "react";
import Calendar from "react-calendar";
import type { Value } from "react-calendar/dist/shared/types.js";
import { interactiveHover } from "@/components/ui/interactiveStyles";
import { cn } from "@/lib/cn";
import { businessInfo, services } from "@/lib/site-data";

type FormState = {
  name: string;
  phone: string;
  email: string;
  address: string;
  serviceNeeded: string;
  preferredDate: string;
  message: string;
};

const initialState: FormState = {
  name: "",
  phone: "",
  email: "",
  address: "",
  serviceNeeded: services[0]?.name ?? "",
  preferredDate: "",
  message: "",
};

export function ContactForm() {
  const [formState, setFormState] = useState<FormState>(initialState);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [statusText, setStatusText] = useState("");

  function toDateString(date: Date) {
    const year = date.getFullYear();
    const month = `${date.getMonth() + 1}`.padStart(2, "0");
    const day = `${date.getDate()}`.padStart(2, "0");
    return `${year}-${month}-${day}`;
  }

  function setPreferredDateFromCalendar(value: Value) {
    const date = Array.isArray(value) ? value[0] : value;
    if (!date) {
      setSelectedDate(null);
      setFormState((prev) => ({ ...prev, preferredDate: "" }));
      return;
    }

    setSelectedDate(date);
    setFormState((prev) => ({ ...prev, preferredDate: toDateString(date) }));
  }

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const body = `
Name: ${formState.name}
Phone: ${formState.phone}
Email: ${formState.email}
Address: ${formState.address}
Service Needed: ${formState.serviceNeeded}
Preferred Date: ${formState.preferredDate}

Details:
${formState.message}
`.trim();

    const href = `mailto:${businessInfo.email}?subject=${encodeURIComponent(
      `Cleaning Inquiry - ${formState.serviceNeeded}`,
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = href;
    setStatusText("Opening your email app to send your request.");
  }

  return (
    <form
      onSubmit={onSubmit}
      className={cn(
        "rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6",
        interactiveHover,
      )}
    >
      <div className="grid gap-4 md:grid-cols-2">
        <label className="text-sm font-medium text-slate-700">
          Name
          <input
            required
            type="text"
            value={formState.name}
            onChange={(event) =>
              setFormState((prev) => ({ ...prev, name: event.target.value }))
            }
            className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 text-sm outline-none transition focus:border-navy"
          />
        </label>

        <label className="text-sm font-medium text-slate-700">
          Phone
          <input
            required
            type="tel"
            value={formState.phone}
            onChange={(event) =>
              setFormState((prev) => ({ ...prev, phone: event.target.value }))
            }
            className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 text-sm outline-none transition focus:border-navy"
          />
        </label>

        <label className="text-sm font-medium text-slate-700">
          Email
          <input
            required
            type="email"
            value={formState.email}
            onChange={(event) =>
              setFormState((prev) => ({ ...prev, email: event.target.value }))
            }
            className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 text-sm outline-none transition focus:border-navy"
          />
        </label>

        <label className="text-sm font-medium text-slate-700">
          Address
          <input
            type="text"
            value={formState.address}
            onChange={(event) =>
              setFormState((prev) => ({ ...prev, address: event.target.value }))
            }
            className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 text-sm outline-none transition focus:border-navy"
          />
        </label>

        <label className="text-sm font-medium text-slate-700">
          Service Needed
          <select
            value={formState.serviceNeeded}
            onChange={(event) =>
              setFormState((prev) => ({ ...prev, serviceNeeded: event.target.value }))
            }
            className="mt-1 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm outline-none transition focus:border-navy"
          >
            {services.map((service) => (
              <option key={service.slug} value={service.name}>
                {service.name}
              </option>
            ))}
            <option value="Add-On Services">Add-On Services</option>
          </select>
        </label>

        <label className="text-sm font-medium text-slate-700">
          Preferred Date
          <input
            type="date"
            value={formState.preferredDate}
            onChange={(event) => {
              const value = event.target.value;
              setFormState((prev) => ({ ...prev, preferredDate: value }));
              setSelectedDate(value ? new Date(`${value}T00:00:00`) : null);
            }}
            className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 text-sm outline-none transition focus:border-navy"
          />
        </label>
      </div>

      <div
        className={cn(
          "mt-4 rounded-xl border border-slate-200 bg-slate-50 p-4 transition duration-300 hover:border-dusty-blue/25 hover:bg-white hover:shadow-md",
        )}
      >
        <p className="text-sm font-semibold text-slate-700">Select from calendar</p>
        <p className="mt-1 text-xs text-slate-500">
          Pick your preferred booking date. We will confirm final availability.
        </p>
        <div className="mt-3 overflow-x-auto">
          <Calendar
            minDate={new Date()}
            onChange={setPreferredDateFromCalendar}
            value={selectedDate}
            className="react-calendar border-0 bg-transparent"
          />
        </div>
      </div>

      <label className="mt-4 block text-sm font-medium text-slate-700">
        Message / Details
        <textarea
          rows={5}
          value={formState.message}
          onChange={(event) =>
            setFormState((prev) => ({ ...prev, message: event.target.value }))
          }
          className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 text-sm outline-none transition focus:border-navy"
          placeholder="Tell us about your home, timeline, or special requests."
        />
      </label>

      <div className="mt-5 flex flex-wrap items-center gap-3">
        <button
          type="submit"
          className="rounded-full bg-navy px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
        >
          Request Booking
        </button>
        {statusText ? <p className="text-sm text-slate-600">{statusText}</p> : null}
      </div>
    </form>
  );
}
