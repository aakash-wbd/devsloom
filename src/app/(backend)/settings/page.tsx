import { redirect } from "next/navigation";

const page = () => {
  return redirect("/settings/basic");
};

export default page;
