import { useState } from "react";

export interface FormData {
  nom: string;
  prenom: string;
  tel: string;
  email?: string;
  role?: string;
  intent?: string;
  niveau?: string;
  systeme?: string;
  matieres?: string[];
  prepas?: string[];
  certifications?: string[];
  disponibilites?: string[];
  message?: string;
  source?: string;
}

export type SubmitStatus = "idle" | "loading" | "success" | "error";

export function useFormSubmit() {
  const [status, setStatus] = useState<SubmitStatus>("idle");

  const submit = async (data: FormData) => {
    setStatus("loading");
    try {
      const res = await fetch("/api/submit-form", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) throw new Error("Server error");

      setStatus("success");
      return true;
    } catch {
      setStatus("error");
      return false;
    }
  };

  return { submit, status };
}
