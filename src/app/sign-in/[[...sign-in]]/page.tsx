import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="flex h-screen flex-col items-center justify-center gap-10">
      <h1 className="text-4xl font-bold uppercase">Sign In </h1>
      <SignIn />
    </div>
  );
}
