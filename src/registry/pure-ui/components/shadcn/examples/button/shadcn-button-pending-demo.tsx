"use client";

import React, { useEffect, useState } from "react";

import { Button } from "@/registry/pure-ui/components/shadcn/ui/button";

export function ButtonPendingDemo() {
  const [isPending, setIsPending] = useState(false);

  useEffect(() => {
    isPending && setTimeout(() => setIsPending(false), 2000);
  }, [isPending]);

  return (
    <Button
      onClick={() => setIsPending(true)}
      pending={isPending}
      size="default"
    >
      Pure UI Button
    </Button>
  );
}
