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

export const DialogDemo = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Open</Button>
      </DialogTrigger>
      <DialogContent animationPreset="scale">
        <DialogHeader>
          <DialogTitle>Terms of Service</DialogTitle>
          <DialogDescription>
            Please read the following terms of service carefully.
          </DialogDescription>
        </DialogHeader>

        <div className="grid gap-4 py-4">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
            quos. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Quisquam, quos.
          </p>
        </div>

        <DialogFooter>
          <Button variant="outline" radius="full" className="w-full sm:w-auto">
            Decline
          </Button>
          <Button type="submit" radius="full" className="w-full sm:w-auto">
            Accept
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
