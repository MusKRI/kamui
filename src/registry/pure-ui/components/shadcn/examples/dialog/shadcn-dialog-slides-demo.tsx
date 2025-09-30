import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/registry/pure-ui/components/shadcn/ui/dialog";

import { Button } from "@/registry/pure-ui/components/shadcn/ui/button";

export const DialogSlidesDemo = () => {
  const slides = [
    "top-slide",
    "bottom-slide",
    "left-slide",
    "right-slide",
  ] as const;

  return (
    <div className="flex flex-col md:flex-row items-center gap-4">
      {slides.map((slide) => {
        return (
          <Dialog key={slide}>
            <DialogTrigger asChild>
              <Button>{slide}</Button>
            </DialogTrigger>
            <DialogContent animationPreset={slide}>
              <DialogHeader>
                <DialogTitle>Terms of Service</DialogTitle>
                <DialogDescription>
                  Please read the following terms of service carefully.
                </DialogDescription>
              </DialogHeader>

              <div className="grid gap-4 py-4">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quisquam, quos. Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Quisquam, quos.
                </p>
              </div>

              <DialogFooter>
                <Button
                  variant="outline"
                  radius="full"
                  className="w-full sm:w-auto"
                >
                  Decline
                </Button>
                <Button
                  type="submit"
                  radius="full"
                  className="w-full sm:w-auto"
                >
                  Accept
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        );
      })}
    </div>
  );
};
