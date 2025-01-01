import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";

// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";

export function AddtaskModal() {
  const form = useForm();

  const onSubmit = (data)=>{
     console.log(data);
     
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Edit Profile</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit profile</DialogTitle>
        </DialogHeader>
        <Form {...form}>
         <form onSubmit={form.handleSubmit(onSubmit)}>
         <FormField
            control={form.control}
            name="title"
            render={({field}) => (
              <FormItem>
                <FormLabel />
                <FormControl>
                    <Input {...field} />
                </FormControl>
              </FormItem>
            )}
          />
          <DialogFooter>
            <Button type="submit">Save changes</Button>
          </DialogFooter>
         </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
